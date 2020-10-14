import axios from "axios";

const api = axios.create({
  baseURL: "https://api.covid19api.com/",
  headers: { "X-Custom-Header": "5cf9dfd5-3449-485e-b5ae-70a60e997864" },
});

export default api;
