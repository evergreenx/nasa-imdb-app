
// axios instance
const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    