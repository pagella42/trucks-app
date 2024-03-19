"use client";

import { usStates } from "@/constants/usStates";
import {
  InspectionsType,
  ViolationType,
} from "@/services/api/inspections/schemas";
import { useSearchParams } from "next/navigation";

const inspectionDataItems: {
  label: string;
  key: keyof InspectionsType;
}[] = [
  {
    label: "Inspection date",
    key: "inspection_date",
  },
  {
    label: "Level",
    key: "level",
  },
];
const violationDataItems: {
  label: string;
  key: keyof ViolationType;
}[] = [
  {
    label: "BASIC Violation",
    key: "BASIC",
  },
  {
    label: "Violation Code",
    key: "code",
  },
  {
    label: "Violation Description",
    key: "description",
  },
  {
    label: "Time Severity Weight",
    key: "time_severity_weight",
  },
];

export default function MainDetails() {
  const searchParams = useSearchParams();
  const unparsedDetails = searchParams.get("details");
  const inspection = unparsedDetails
    ? (JSON.parse(unparsedDetails) as InspectionsType)
    : null;

  if (!inspection) return null;

  const stateDisplay =
    usStates[inspection.report_state] + ` (${inspection.report_state})`;

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
          <DetailItem title={"State"} value={stateDisplay} />
          {inspectionDataItems.map((item) =>
            inspection[item.key] ? (
              <DetailItem
                key={item.key}
                title={item.label}
                value={inspection[item.key]}
              />
            ) : null
          )}

          {violationDataItems.map((item) =>
            inspection.violations[0][item.key] ? (
              <DetailItem
                key={item.key}
                title={item.label}
                value={inspection.violations[0][item.key]}
              />
            ) : null
          )}
        </dl>
      </div>
    </div>
  );
}

const DetailItem = ({ title, value }: { title: string; value: any }) => {
  if (typeof value !== "string" || typeof value !== "number") return null;
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-900">{title}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {value}
      </dd>
    </div>
  );
};
