import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { Show } from "@/utils/types";

const useGetShow = (url: string) => {
  const {
    data: show,
    isLoading: loading,
    error,
  } = useQuery<Show>(["show", url], async () => {
    const response: AxiosResponse<Show> = await axios.get<Show>(url);
    return response.data;
  });

  if (error) console.error("Error fetching show:", error);

  return { show, loading };
};

export default useGetShow;
