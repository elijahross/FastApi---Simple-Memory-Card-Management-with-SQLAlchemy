import axios from "axios";

const api = axios.create({
  baseURL: "https://cttmp6-8000.csb.app/api",
  timeout: 3000,
});

export default api;
