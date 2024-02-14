import { showIds } from "@/utils/constants";
import { DataType } from "@/utils/types";
import { useEffect, useState } from "react";

export function useLocalStorage() {
  const [bookings, setBookings] = useState<DataType[]>([]);

  useEffect(() => {
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
  }, []);

  return { bookings };
}
