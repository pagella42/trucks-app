import { makeApi } from "@zodios/core";
import errors from "../errors";
import { VehicleInfoResponse } from "./schemas";
import { z } from "zod";

const vehicleInfo = makeApi([
  {
    method: "get",
    path: "vehicleinfo/:vin",
    alias: "getVehicleInfo",
    response: VehicleInfoResponse,
    errors,
    parameters: [
      {
        name: "vin",
        type: "Path",
        schema: z.string(),
      },
    ],
  },
]);

export { vehicleInfo };
