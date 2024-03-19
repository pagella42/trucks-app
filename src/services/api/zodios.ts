import { Zodios } from "@zodios/core";
import { ZodiosHooks } from "@zodios/react";
import axios from "axios";
import { inspections } from "./inspections/endpoints";
import { vehicleInfo } from "./vehicleInfo/endpoints";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const apiClient = new Zodios([...inspections, ...vehicleInfo], {
  axiosInstance,
});

const apiHooks = new ZodiosHooks("api", apiClient);

export { apiClient, apiHooks};

export default apiClient;
