import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  withCredentials: true, // Necessary for send HTTP-only cookies
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
