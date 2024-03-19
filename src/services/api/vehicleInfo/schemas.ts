import { z } from "zod";
import { BaseResponseSchema } from "../baseSchema";

const VehicleSchema = z.object({
  vehicleDescriptor: z.string().nullable(),
  make: z.string().nullable(),
  manufacturerName: z.string().nullable(),
  model: z.string().nullable(),
  modelYear: z.string().nullable(),
  driveType: z.string().nullable(),
  brakeSystemType: z.string().nullable(),
  fuelTypePrimary: z.string().nullable(),
});

const PlantSchema = z.object({
  plantCity: z.string().nullable(),
  plantCountry: z.string().nullable(),
  plantCompanyName: z.string().nullable(),
  plantState: z.string().nullable(),
});

const MainSchema = z.object({
  vehicle: VehicleSchema,
  plant: PlantSchema,
});

export const VehicleInfoResponse = BaseResponseSchema.extend({
  data: MainSchema,
});

export type ExtraVehicleInfoType = z.infer<typeof VehicleSchema>;
export type ExtraPlantInfoType = z.infer<typeof PlantSchema>;
export type ExtraInfoType = z.infer<typeof MainSchema>;
