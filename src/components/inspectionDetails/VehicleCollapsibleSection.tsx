import React, { SVGProps } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import {
  ExtraPlantInfoType,
  ExtraVehicleInfoType,
} from "@/services/api/vehicleInfo/schemas";
import { VehicleCollapsibleItem } from "./VehicleCollapsibleItem";
import { camelCaseToRegularText } from "@/utils/camelCaseToRegularText";
import { CollapsibleSectionKey } from "@/constants/vehicleCardDataPoints";

export type CollapsibleSectionDataItem =
  | ExtraVehicleInfoType
  | ExtraPlantInfoType;

type CollapsibleSectionProps = {
  open: boolean;
  setOpen: (open: CollapsibleSectionKey) => void;
  data: CollapsibleSectionDataItem;
  name: CollapsibleSectionKey;
};

export default function VehicleCollapsibleSection({
  open,
  setOpen,
  data,
  name,
}: CollapsibleSectionProps) {
  const valuesToRender = Object.keys(data) as (keyof ExtraVehicleInfoType)[];
  const sectionName = camelCaseToRegularText(name);
  return (
    <>
      <div className="border-t border-gray-900/5 px-6 py-6 w-full">
        <button
          onClick={() => setOpen(name)}
          className="text-sm font-semibold leading-6 text-blue-500 flex"
        >
          {open ? "Hide " : "Show "}
          {sectionName} Information
          <Icon open={open} className="ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      {open && data && valuesToRender ? (
        <div className="border-t border-gray-900/5 py-6 w-full">
          {valuesToRender.map((v) => (
            <VehicleCollapsibleItem name={v} data={data} key={v} />
          ))}
        </div>
      ) : null}
    </>
  );
}


type IconProps = SVGProps<SVGSVGElement> & {
  open: boolean;
};

function Icon({ open, ...props }: IconProps) {
  const Icon = open ? ChevronUpIcon : ChevronDownIcon;
  return <Icon {...props} />;
}
