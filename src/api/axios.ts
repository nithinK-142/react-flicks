import { SHOWS_URL } from "@/utils/constants";
import { Show } from "@/utils/types";
import axios from "axios";

export async function getShows() {
  try {
    const response = await axios.get(SHOWS_URL);
    return response.data.map((item: { show: Show }) => item.show);
  } catch (error) {
    throw new Error("failed to fetch!!");
  }
}

export async function getShowById(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("failed to fetch!!");
  }
}
