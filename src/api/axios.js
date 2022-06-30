import axios from "axios";

import { baseApiUrl } from "./baseUrls";

const axiosInstance = axios.create({ baseURL: baseApiUrl });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
