import useFetchShows from "@/hooks/useFetchShows";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Loading from "./Loading";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
// import FormPopup from "@/components/FormPopup";

const ShowInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { shows, loading } = useFetchShows(
    `https://api.tvmaze.com/shows/${id}`
  );
  const show = shows[0];

  if (loading) return <Loading />;
  if (id?.length !== 5 || !show) return <NotFound />;

  return (
    <>
      <div className="flex items-start justify-center h-[80vh] bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end w-1/2 h-auto">
          <img
            className="object-cover w-1/2 rounded-t-lg"
            src={show.image ? show.image.medium : "/nope-not-here.jpg"}
            alt={show.name}
          />
        </div>
        <div className="flex flex-col w-1/2 p-5 pr-56 space-y-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {show.name}
          </h5>
          {show.network?.name && (
            <p>
              Network:{" "}
              <span className="opacity-90">{show.network.country.code}</span>{" "}
              <span className="text-green-400">{show.network.name}</span>{" "}
            </p>
          )}
          {show.schedule.days.length !== 0 && (
            <p>
              Schedule:{" "}
              <span className="opacity-90">
                {show.schedule.days}s at {show.schedule.time} ({show.runtime}{" "}
                min){" "}
              </span>
            </p>
          )}
          <p>
            Status: <span className="opacity-90">{show.status}</span>{" "}
          </p>
          <p>
            Show Type: <span className="opacity-90">{show.type}</span>{" "}
          </p>
          <p>
            Genre:{" "}
            {show.genres.map((genre, idx) => (
              <span key={idx} className="opacity-90">
                {genre}
                {idx !== show.genres.length - 1 && " | "}
              </span>
            ))}
          </p>
          <p>Rating: {show.rating.average} / 10 </p>
          {show.officialSite && (
            <p>
              Site:{" "}
              <a
                href={show.officialSite}
                target="_blank"
                className="text-blue-300 opacity-90 hover:underline"
              >
                {show.officialSite}
              </a>
            </p>
          )}
          <p>
            Language : <span className="opacity-90">{show.language} </span>
          </p>

          <Popup
            trigger={
              <button className="inline-flex items-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Book Now!
              </button>
            }
            modal
          >
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-center">
                <div className="flex w-full h-auto pr-4">
                  <img
                    className="object-cover w-full rounded-t-lg"
                    src={show.image ? show.image.medium : "/nope-not-here.jpg"}
                    alt={show.name}
                  />
                </div>
                <div className="w-full space-y-6">
                  <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                    {show.name}
                  </h5>
                  <div className="flex flex-col space-y-1">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="jhon smith"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="seat"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Seat No.
                      </label>
                      <input
                        type="number"
                        name="seat"
                        id="seat"
                        min="1"
                        max="99"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="1-99"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                      >
                        I agree with the T&C
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Pay
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    get discounts!{" "}
                    <a
                      href="#"
                      className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Create account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
};

export default ShowInfo;
