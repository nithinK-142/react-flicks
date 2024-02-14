import axios from "axios";
import { useQuery } from "react-query";
import { Show } from "@/utils/types";
import { SHOWS_URL } from "@/utils/constants";

export function useFetchShows() {
  const { data: shows, isLoading } = useQuery<Show[]>("shows", async () => {
    try {
      const response = await axios.get(SHOWS_URL);
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data.map((item: { show: Show }) => item.show);
    } catch (error) {
      console.error("Error fetching shows:", error);
      throw new Error("Error fetching shows");
    }
  });

  return { shows, isLoading };
}
