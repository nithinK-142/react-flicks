// Library imports
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import toast from "react-hot-toast";

// Relative imports
import useFetchShows from "@/hooks/useFetchShows";
import { SHOW_URL } from "@/utils/constants";
import { UserDataType } from "@/utils/types";
import NotFound from "./NotFound";
import Loading from "./Loading";
import "reactjs-popup/dist/index.css";

const ShowInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { shows, loading } = useFetchShows(SHOW_URL + `${id}`);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);

  const [userData, setUserData] = useState<UserDataType>({
    name: "",
    email: "",
    seats: "",
    date: "",
  });

  useEffect(() => {
    const { name, email, date } = userData;
    if (name.trim() !== "" && email.trim() !== "" && date.trim() !== "")
      setIsFormFilled(true);
    else setIsFormFilled(false);
  }, [userData]);

  const show = shows[0];
  const navigate = useNavigate();

  const handleClose = () => {
    if (!isFormFilled) return toast.error("Fields must not be empty!");

    setIsOpen(false);
    toast.success("Payment successful!");

    localStorage.setItem(
      show.id.toString(),
      JSON.stringify([
        {
          username: userData.name,
          email: userData.email,
          seats: userData.seats,
          date: userData.date,
          image: {
            medium: show.image?.medium || "",
          },
          showName: show.name,
          id: show.id,
          network: {
            name: show.network?.name || "",
            country: {
              code: show.network?.country.code || "",
            },
          },
          schedule: {
            days: show.schedule.days,
            time: show.schedule.time,
          },
          runtime: show.runtime,
          status: show.status,
          type: show.type,
          genres: show.genres,
          rating: {
            average: show.rating.average,
          },
          officialSite: show.officialSite || "",
          language: show.language,
        },
      ])
    );

    navigate("/");
  };

  if (loading) return <Loading />;
  if (!shows) return <NotFound />;

  return (
    <div className="flex items-start justify-center h-[80vh] bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end w-1/2 h-auto">
        <img
          className="object-cover w-1/2 rounded-t-lg"
          src={show.image ? show.image.medium : "/not-found.jpg"}
          alt={show.name}
        />
      </div>
      <div className="flex flex-col w-1/2 p-5 pr-56 space-y-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {show.name}
        </h5>
        {show.network?.name && (
          <p className="flex space-x-1">
            Network :{" "}
            <span className="pl-1">
              <img
                src={`https://flagsapi.com/${show.network.country.code}/flat/64.png`}
                className="h-6 "
              />
            </span>
            <span className="text-green-400">{show.network.name}</span>{" "}
          </p>
        )}
        {show.schedule.days.length !== 0 && (
          <p>
            Schedule :{" "}
              <span className="opacity-90">
                {show.schedule.days}s{" "}
                {show.schedule.time && (
                  <span>
                    {" "}
                    at {show.schedule.time} ({show.runtime} min){" "}
                  </span>
                )}
              </span>
          </p>
        )}
        <p>
          Status : <span className="opacity-90">{show.status}</span>{" "}
        </p>
        <p>
          Show Type : <span className="opacity-90">{show.type}</span>{" "}
        </p>
        <p>
          Genre :{" "}
          {show.genres.map((genre, idx) => (
            <span key={idx} className="opacity-90">
              {genre}
              {idx !== show.genres.length - 1 && " | "}
            </span>
          ))}
        </p>
        {show.rating.average !== null && (
          <p className="opacity-90">Rating : {show.rating.average} / 10 </p>
        )}
        {show.officialSite && (
          <p>
            Site :{" "}
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
          open={isOpen}
          onClose={handleClose}
          modal
          closeOnDocumentClick={false}
        >
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center">
              <div className="flex w-full h-auto pr-4">
                <img
                  className="object-cover w-full rounded-t-lg"
                  src={show.image ? show.image.medium : "/not-found.jpg"}
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
                      onChange={(e) =>
                        setUserData({ ...userData, name: e.target.value })
                      }
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
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
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
                      onChange={(e) =>
                        setUserData({ ...userData, seats: e.target.value })
                      }
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
                      onChange={(e) =>
                        setUserData({ ...userData, date: e.target.value })
                      }
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
                  onClick={handleClose}
                  className="w-full text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        <button
          onClick={() => setIsOpen(true)}
          className="w-1/2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
        >
          Book Now!
        </button>
      </div>
    </div>
  );
};

export default ShowInfo;
