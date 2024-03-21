import { TruckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { VehicleType } from "@/services/api/inspections/schemas";
import { useVehicleInfo } from "@/services/react-query/hooks/useVehicleInfo";
import { useState } from "react";
import VehicleCollapsibleSection from "./VehicleCollapsibleSection";
import VehicleCardItem from "./VehicleCardItem";
import {
  itemsToRender,
  CollapsibleSectionKey,
} from "@/constants/vehicleCardDataPoints";
import { ExtraInfoType } from "@/services/api/vehicleInfo/schemas";

type VehicleProps = {
  isFirst?: boolean;
  vehicle: VehicleType;
};

export default function VehicleCard({ isFirst, vehicle }: VehicleProps) {
  const { data, isLoading } = useVehicleInfo(vehicle.vehicle_id_number ?? "");
  const [showSections, setShowSections] = useState<
    Partial<{ [K in CollapsibleSectionKey]: boolean }>
  >({});

  const sectionStatusChange = (section: CollapsibleSectionKey) => {
    setShowSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  const collapsibleSections = Object.keys(
    data ?? {}
  ) as (keyof ExtraInfoType)[];
  return (
    <div className={clsx("lg:col-start-3", isFirst ? "lg:row-end-1" : "")}>
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6 pt-6">
            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900 flex">
              <TruckIcon className="h-6 w-5 mr-1" aria-hidden="true" />
              {vehicle?.unit_type}
            </dd>
          </div>
          <div className="py-3 mt-6 flex w-full border-t border-gray-900/5 flex-col">
            {itemsToRender.map((i) => (
              <VehicleCardItem item={vehicle[i]} name={i} key={i} />
            ))}
          </div>
          {!isLoading && data
            ? collapsibleSections.map((section: keyof ExtraInfoType) => (
                <VehicleCollapsibleSection
                  key={section}
                  open={!!showSections[section]}
                  setOpen={() => sectionStatusChange(section)}
                  data={data[section]}
                  name={section}
                />
              ))
            : null}
        </dl>
      </div>
    </div>
  );
}
