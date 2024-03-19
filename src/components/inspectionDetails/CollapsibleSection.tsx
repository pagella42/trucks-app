import React from "react";
import { camelCaseToRegularText } from "@/utils/camelCaseToRegularText";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import {
  ExtraPlantInfoType,
  ExtraVehicleInfoType,
} from "@/services/api/vehicleInfo/schemas";

type DataItem = ExtraVehicleInfoType | ExtraPlantInfoType;

type CollapsibleSectionProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: DataItem;
  name: string;
};

export default function CollapsibleSection({
  open,
  setOpen,
  data,
  name,
}: CollapsibleSectionProps) {
  const keyList = Object.keys(data) as (keyof ExtraVehicleInfoType)[];

  return (
    <>
      <div className="border-t border-gray-900/5 px-6 py-6 w-full">
        <button
          onClick={() => setOpen(!open)}
          className="text-sm font-semibold leading-6 text-blue-500 flex"
        >
          {open ? (
            <>
              Hide {name} Information
              <ChevronUpIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </>
          ) : (
            <>
              Show {name} Information
              <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
      {open && data && keyList ? (
        <div className="border-t border-gray-900/5 py-6 w-full">
          {keyList.map((key) => {
            const value = data[key as keyof DataItem]; // Correctly access the value using the key
            if (!value) return null; // Skip rendering if value is falsy
            return (
              <div key={String(key)} className="flex w-full gap-x-4 px-6">
                <dd className="text-sm font-medium leading-6 text-gray-900">
                  {camelCaseToRegularText(String(key))}:{" "}
                  <span className="font-normal text-gray-500">
                    {String(value)}
                  </span>
                </dd>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
