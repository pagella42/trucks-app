import { InspectionsType } from "@/services/api/inspections/schemas";
import { ReadonlyURLSearchParams } from "next/navigation";

export function getDetailsFromParams(params: ReadonlyURLSearchParams) {
  const unparsedDetails = params.get("details");
  return unparsedDetails
    ? (JSON.parse(unparsedDetails) as InspectionsType)
    : null;
}
