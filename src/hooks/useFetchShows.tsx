import { useState, useEffect } from "react";
import { Show } from "@/utils/types";

const useFetchShows = (url: string) => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const showsData = data.map((item: { show: Show }) => item.show);
          setShows(showsData);
        } else {
          setShows([data]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
        setLoading(false);
      });
  }, [url]);

  return { shows, loading };
};

export default useFetchShows;
