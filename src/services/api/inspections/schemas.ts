import { z } from "zod";
import { BaseResponseSchema } from "../baseSchema";

const VehicleSchema = z.object({
  unit: z.number(),
  vehicle_id_number: z.string().optional(),
  unit_type: z.string().optional(),
  license_state: z.string().optional(),
  license_number: z.string().optional(),
});

const ViolationSchema = z.object({
  convicted_of_dif_charge: z.string(),
  code: z.string().optional(),
  description: z.string().optional(),
  oos: z.string().optional(),
  time_severity_weight: z.number().optional(),
  BASIC: z.string().optional(),
  unit: z.string().optional(),
});

const InspectionSchema = z.object({
  inspection_date: z.string(),
  report_state: z.string(),
  report_number: z.string(),
  level: z.number(),
  time_weight: z.number(),
  Placarable_HM_Veh_Insp: z.string(),
  HM_inspection: z.string(),
  vehicles: z.array(VehicleSchema),
  violations: z.array(ViolationSchema),
});

const CrashSchema = z.object({
  vehicle_id_number: z.string(),
  crash_date: z.string(),
  report_state: z.string(),
  report_number: z.string(),
  fatal: z.number().optional(),
  injury: z.number().optional(),
  tow: z.number().optional(),
  hazmat: z.string().optional(),
});

const CarrierDataSchema = z.object({
  inspections: z.array(InspectionSchema),
  crashes: z.array(CrashSchema).optional(),
  totalItems: z.number(),
});

export const InspectionResponse = BaseResponseSchema.extend({
  data: CarrierDataSchema,
});

export type CarrierDataType = z.infer<typeof CarrierDataSchema>;
export type InspectionsType = z.infer<typeof InspectionSchema>;
export type VehicleType = z.infer<typeof VehicleSchema>;

