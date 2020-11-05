import axios from "./axios";

/**
 * function to get list of beers
 * @returns void
 */
export async function getBeers(params) {
  return axios.get("beers");
}

export default {
  getBeers,
};
