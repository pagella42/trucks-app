import React, { SVGProps } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { VehicleCollapsibleItem } from "./VehicleCollapsibleItem";
import { camelCaseToRegularText } from "@/utils/camelCaseToRegularText";
import { getRenderableListFromObject } from "@/utils/getRenderableListFromObject";

type ObjectToReceive = {
  [key: string]: string | null;
};
type CollapsibleSectionProps<T> = {
  open: boolean;
  setOpen: () => void;
  data: T;
  name: keyof T;
};

export default function VehicleCollapsibleSection({
  open,
  setOpen,
  data,
  name,
}: CollapsibleSectionProps<ObjectToReceive>) {
  const valuesToRender = getRenderableListFromObject(data);

  const sectionName = camelCaseToRegularText(name.toString());
  return (
    <>
      <div className="border-t border-gray-900/5 px-6 py-6 w-full">
        <button
          onClick={setOpen}
          className="text-sm font-semibold leading-6 text-blue-500 flex"
        >
          {open ? "Hide " : "Show "}
          {sectionName} Information
          <Icon open={open} className="ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      {open && data && valuesToRender ? (
        <div className="border-t border-gray-900/5 py-6 w-full">
          {valuesToRender.map(({ label, value }) => {
            return (
              <VehicleCollapsibleItem label={label} value={value} key={label} />
            );
          })}
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
