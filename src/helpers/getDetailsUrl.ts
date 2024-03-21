import { DETAILS_PARAM } from "@/constants/params";
import { InspectionsType } from "@/services/api/inspections/schemas";

//function to get the url for a specific inspection
export const getDetailsUrl = (
  inspection: InspectionsType,
) => {
  const params = new URLSearchParams();
  params.set(DETAILS_PARAM, JSON.stringify(inspection));

  return `/${encodeURIComponent(inspection.report_number)}?${params.toString()}`;
};
