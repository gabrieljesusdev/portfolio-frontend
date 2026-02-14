import axios from "axios";

const api = axios.create({
  baseURL: "https://api.gabrieljesus.dev",
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN || "tst"}`,
  },
});

export default api;
