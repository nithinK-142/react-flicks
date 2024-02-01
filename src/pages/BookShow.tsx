import useFetchShows from "@/hooks/useFetchShows";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Loading from "./Loading";

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
          <button className="inline-flex items-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Book Now!
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowInfo;
