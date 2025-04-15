import { axiosInstance } from "./axiosConfig.js";
export const fetchDoctorsList = () =>
  axiosInstance
    .get("doctorsList.json")
    .then((response) => response.data)
    .catch((error) => {
      throw (console.error("Error Fetching comments:", error), error);
    });
