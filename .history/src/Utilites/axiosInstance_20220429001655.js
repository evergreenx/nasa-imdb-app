import axios from "axios";
// axios instance
const axiosNasaInstance = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const axiosIMDBInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { axiosNasaInstance, axiosIMDBInstance };
