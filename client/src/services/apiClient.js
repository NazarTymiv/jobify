import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = (data) => {
  return axiosClient.post("/auth/login", data);
};
