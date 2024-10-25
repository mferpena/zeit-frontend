import axios from "axios";

const BASE_URL = 'http://localhost:5157/api/Auth';

export const signIn = async (username, password) => {
  const response = await axios.post(`${BASE_URL}/sign-in`, {
    username,
    password,
  });
  return response.data;
};

export const signUp = async (username, password, email) => {
  const response = await axios.post(`${BASE_URL}/sign-up`, {
    username,
    password,
    email,
  });
  return response.data;
};
