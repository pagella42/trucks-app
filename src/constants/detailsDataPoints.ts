import {
  InspectionsType,
  ViolationType,
} from "@/services/api/inspections/schemas";

export const inspectionDataItems: (keyof InspectionsType)[] = [
  "inspection_date",
  "level",
];
export const violationDataItems: (keyof ViolationType)[] = [
  "BASIC",
  "code",
  "description",
  "time_severity_weight",
];
