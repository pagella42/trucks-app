import { VehicleType } from "@/services/api/inspections/schemas";

export const itemsToRender: (keyof VehicleType)[] = [
    "vehicle_id_number",
    "license_number",
    "license_state",
  ];
  export const collapsibleSections = ["vehicle", "plant"] as const;
  export type CollapsibleSectionKey = (typeof collapsibleSections)[number];