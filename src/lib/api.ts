import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "https://api.gabrieljesus.dev",
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN || "tst"}`,
  },
});

export default api;
