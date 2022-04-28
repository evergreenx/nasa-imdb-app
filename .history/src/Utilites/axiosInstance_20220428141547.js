import axios from "axios";
// axios instance
const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const customAxios = axios.create({
  baseURL: "https://some-custom-domain.com/api/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default {
    axiosInstance,
    customAxios
};