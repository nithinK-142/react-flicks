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
    <div className="relative">
      {bookings.length === 0 && (
        <h2 className="pt-10 text-xl text-center opacity-70">
          No bookings available...
        </h2>
      )}
      <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((bookingArray, index) => (
          <div key={index}>
            {bookingArray.map((booking, bookingIndex) => (
              <div
                key={bookingIndex}
                className="flex mb-4 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="relative flex items-stretch h-auto justify-evenly group">
                  <img
                    className="object-cover w-full transition-all duration-500 rounded-t-lg group-hover:scale-105 group-hover:opacity-35"
                    src={
                      booking.image
                        ? booking.image.medium
                        : "/nope-not-here.jpg"
                    }
                    alt={booking.showName}
                  />
                  <div className="absolute hidden pt-6 space-y-4 group-hover:block">
                    <p>
                      Language :{" "}
                      <span className="opacity-90">{booking.language} </span>
                    </p>
                    <p>Rating: {booking.rating.average} / 10 </p>
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
                <div className="flex flex-col justify-start p-4 space-y-2">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {booking.showName}
                  </h5>
                  <p>User : {booking.username} </p>
                  <p>Mail : {booking.email} </p>
                  <p>Date : {booking.date} </p>
                  <p>Seats : {booking.seats} </p>
                  <Link
                    to={`/shows/${booking.id}`}
                    className="inline-flex items-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Book Again!
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
