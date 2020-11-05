import axios from "./axios";

/**
 * function to get list of beers
 * @returns void
 */
export async function getBeers(food, per_page = 80) {
  return axios.get(`beers?per_page=${per_page}${food ? "&food=" + food : ""}`);
}

const api = {
  getBeers,
};

export default api;
