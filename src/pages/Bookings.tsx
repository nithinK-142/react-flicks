// import { BookingDataType } from "@/utils/types";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { showIds } from "@/utils/constants";
import Loading from "./Loading";
import { BookingDataType } from "@/utils/types";
import AnotherComponent from "@/components/AnotherComponent";

export type UserDataType = {
  user: {
    name: string;
    email: string;
    seats: string;
    date: string;
  };
  show: {
    image: {
      medium: string;
    };
    showName: string;
    id: number;
    network?: {
      name: string;
      country: {
        code: string;
      };
    };
    schedule: {
      days: string[];
      time: string;
    };
    runtime: number;
    status: string;
    type: string;
    genres: string[];
    rating: {
      average: number;
    };
    officialSite?: string;
    language: string;
  };
};
const Bookings = () => {
  // const [userData, setUserData] = useState<UserDataType[]>([]);

  const [bookingData, setBookingData] = useState<BookingDataType[]>([]);

  useEffect(() => {
    const storedUserData = showIds
      .map((showId) => {
        const storageData = localStorage.getItem(showId);
        return storageData ? JSON.parse(storageData) : null;
      })
      .filter((data) => data !== null);

    setBookingData(storedUserData);
  }, []);

  if (!bookingData) return <Loading />;
  // console.log(bookingData.filter((data) => data));

  return <AnotherComponent />;
  // <div className="flex items-start justify-center h-[80vh] bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">

  /* <p className="text-white">
        {" "}
        {userData.map((booking) => (
          <span> {booking.user.name} </span>
        ))}{" "}
      </p> */
  /* <div className="flex justify-end w-1/2 h-auto">
        <img
          className="object-cover w-1/2 rounded-t-lg"
          src={userData?.image ? userData?.image.medium : "/nope-not-here.jpg"}
          alt={userData?.name}
        />
      </div>
      <div className="flex flex-col w-1/2 p-5 pr-56 space-y-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {userData?.name}
        </h5>
        {userData?.network?.name && (
          <p className="flex space-x-1">
            Network:{" "}
            <span className="pl-1">
              <img
                src={`https://flagsapi.com/${userData?.network.country.code}/flat/64.png`}
                className="h-6 "
              />
            </span>
            <span className="text-green-400">{userData?.network.name}</span>{" "}
          </p>
        )}
        {userData?.schedule.days?.length !== 0 && (
          <p>
            Schedule:{" "}
            <span className="opacity-90">
              {userData?.schedule.days}s at {userData?.schedule.time} (
              {userData?.runtime} min){" "}
            </span>
          </p>
        )}
        <p>
          Status: <span className="opacity-90">{userData?.status}</span>{" "}
        </p>
        <p>
          Show Type: <span className="opacity-90">{userData?.type}</span>{" "}
        </p>
        <p>
          Genre:{" "}
          {userData?.genres.map((genre, idx) => (
            <span key={idx} className="opacity-90">
              {genre}
              {idx !== userData?.genres.length - 1 && " | "}
            </span>
          ))}
        </p>
        <p>Rating: {userData?.rating.average} / 10 </p>
        {userData?.officialSite && (
          <p>
            Site:{" "}
            <a
              href={userData?.officialSite}
              target="_blank"
              className="text-blue-300 opacity-90 hover:underline"
            >
              {userData?.officialSite}
            </a>
          </p>
        )}
        <p>
          Language : <span className="opacity-90">{userData?.language} </span>
        </p>

        <Link
          to={`/shows/${userData?.id}`}
          className="inline-flex items-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Book Now!
        </Link>
      </div> */
  // </div>
};

export default Bookings;
