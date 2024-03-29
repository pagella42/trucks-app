"use client";

import {
  inspectionDataItems,
  violationDataItems,
} from "@/constants/detailsDataPoints";
import { useSearchParams } from "next/navigation";
import { DetailItem } from "./DetailItem";
import { getDetailsFromParams } from "@/utils/getDetailsFromParams";
import {
  RenderableListItemType,
  getRenderableListFromObject,
} from "@/utils/getRenderableListFromObject";
import {
  InspectionsType,
  ViolationType,
} from "@/services/api/inspections/schemas";
import { getDesiredMainDetails } from "@/helpers/getDesiredMainDetails";

export default function MainDetails() {
  const inspection = getDetailsFromParams(useSearchParams());
  if (!inspection) return null;

  
  const list1 = getRenderableListFromObject(inspection);
  const list2 = getRenderableListFromObject(inspection.violations[0]);

  const desiredDataPoints = [
    ...getDesiredMainDetails<InspectionsType>(list1, inspectionDataItems),
    ...getDesiredMainDetails<ViolationType>(list2, violationDataItems),
  ];

  return (
    <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
      <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Inspection
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          #{inspection.report_number}
        </p>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {desiredDataPoints.map((c) =>
            c?.value ? (
              <DetailItem key={c.value} title={c.label} value={c.value} />
            ) : null
          )}
        </dl>
      </div>
    </div>
  );
}
