import { useState, useEffect } from "react";
import { showIds } from "@/utils/constants";
import { DataType } from "@/utils/types";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [bookings, setBookings] = useState<DataType[]>([]);

  const fetchData = () => {
    showIds.forEach((id) => {
      const storage = localStorage.getItem(id);
      if (storage) {
        try {
          const parsedBooking = JSON.parse(storage);
          setBookings((prevBookings) => [...prevBookings, parsedBooking]);
        } catch (error) {
          console.error("Error parsing booking data:", error);
        }
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {bookings.length === 0 && (
        <h2 className="pt-10 text-xl text-center opacity-70">
          No bookings available...
        </h2>
      )}
      <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3 md:scroller">
        {bookings.flat().map((booking, index) => (
          <div
            key={index}
            className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-md shadow sm:max-w-lg md:flex-row md:max-w-full opacity-90 dark:border-gray-700 dark:bg-gray-800"
            >
            <div className="relative flex h-auto overflow-hidden justify-evenly group">
              <img
                className="object-cover w-full transition-all duration-500 rounded-t-lg hover:scale-110 group-hover:opacity-35"
                src={
                  booking.image && booking.image.medium
                    ? booking.image.medium
                    : "/nope-not-here.jpg"
                }
                alt={booking.showName}
              />
              <div className="absolute pt-6 space-y-4 transition-opacity duration-700 opacity-0 group-hover:opacity-100">
                <p>
                  Language :{" "}
                  <span className="opacity-90">{booking.language} </span>
                </p>
                {booking.rating.average !== null && (
                  <p>Rating: {booking.rating.average} / 10 </p>
                )}
                <p>
                  Genre:{" "}
                  {booking.genres.map((genre, idx) => (
                    <span key={idx} className="opacity-90">
                      {genre}
                      {idx !== booking.genres.length - 1 && " | "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4 space-y-2">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {booking.showName}
              </h5>
              <p>User : {booking.username} </p>
              <p>Mail : {booking.email} </p>
              <p>Date : {booking.date} </p>
              <p>Seats : {booking.seats} </p>
              <Link
                to={`/shows/${booking.id}`}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
              >
                Book Again!
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bookings;
