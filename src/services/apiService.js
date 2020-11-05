import axios from "./axios";

/**
 * function to get list of beers
 * @returns void
 */
export async function getBeers() {
  return axios.get("beers?per_page=80");
}

export default {
  getBeers,
};
