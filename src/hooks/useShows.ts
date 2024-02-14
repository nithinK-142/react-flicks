// useFetchShows.ts
import { useQuery } from "react-query";
import { Show } from "@/utils/types";
import { getShowById, getShows } from "@/api/axios";

export function useFetchShows() {
  return useQuery<Show[]>("shows", getShows);
}

export function useFetchShowById(url: string) {
  return useQuery<Show>(["show", url], () => getShowById(url));
}
