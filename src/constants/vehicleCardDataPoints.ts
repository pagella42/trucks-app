import { VehicleType } from "@/services/api/inspections/schemas";
import { ExtraInfoType } from "@/services/api/vehicleInfo/schemas";

export const itemsToRender: (keyof VehicleType)[] = [
    "vehicle_id_number",
    "license_number",
    "license_state",
  ];

  export type CollapsibleSectionKey = keyof ExtraInfoType;