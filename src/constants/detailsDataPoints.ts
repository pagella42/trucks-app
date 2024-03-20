import {
  InspectionsType,
  ViolationType,
} from "@/services/api/inspections/schemas";

export const inspectionDataItems: (keyof InspectionsType)[] = [
  "report_state",
  "inspection_date",
  "level",
];
export const violationDataItems: (keyof ViolationType)[] = [
  "BASIC",
  "code",
  "description",
  "time_severity_weight",
];
