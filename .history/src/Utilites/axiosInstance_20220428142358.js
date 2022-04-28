import axios from "axios";
// axios instance
const axiosNasaInstance = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const axiosIMDBInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { axiosInstance, axiosIMDBInstance };
