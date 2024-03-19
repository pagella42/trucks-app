import { makeApi } from "@zodios/core";
import errors from "../errors";
import { InspectionResponse } from "./schemas";
import { z } from "zod";

const inspections = makeApi([
  {
    method: "get",
    path: "inspections",
    alias: "getInspections",
    response: InspectionResponse,
    errors,
    parameters: [
      {
        name: "page",
        type: "Query",
        schema: z.number(),
      },
      {
        name: "itemsPerPage",
        type: "Query",
        schema: z.number(),
      },
      {
        name: "basicFilter",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "sortDate",
        type: "Query",
        schema: z.string().optional(),
      }
    ],
  },
]);

export { inspections };
