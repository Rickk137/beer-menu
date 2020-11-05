import axios from './axios';

/**
 * function to login with phone & password
 * @returns void
 */
export async function passwordLogin(userName, password) {
  return await axios.post('v2/user/login/', {
    userName,
    password,
  });
}

export default {
  passwordLogin,
};
