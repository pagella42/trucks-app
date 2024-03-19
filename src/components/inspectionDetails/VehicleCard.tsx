import {
  ChevronDownIcon,
  ChevronUpIcon,
  TruckIcon,
} from "@heroicons/react/20/solid";
import { usStates } from "@/constants/usStates";
import clsx from "clsx";
import { VehicleType } from "@/services/api/inspections/schemas";
import { useVehicleInfo } from "@/services/react-query/hooks/useVehicleInfo";
import { useState } from "react";
import { ExtraVehicleInfoType } from "@/services/api/vehicleInfo/schemas";
import { camelCaseToRegularText } from "@/utils/camelCaseToRegularText";
import CollapsibleSection from "./CollapsibleSection";

type VehicleProps = {
  isFirst?: boolean;
  vehicle: VehicleType;
};

export default function VehicleCard({ isFirst, vehicle }: VehicleProps) {
  const { data, isLoading } = useVehicleInfo(vehicle.vehicle_id_number ?? "");
  const [showMoreVehicle, setShowMoreVehicle] = useState(false);
  const [showMorePlant, setShowMorePlant] = useState(false);

  const info = [
    {
      label: "VIN",
      value: vehicle?.vehicle_id_number,
    },
    {
      label: "Plate",
      value: vehicle?.license_number,
    },
    {
      label: "License State",
      value: vehicle?.license_state
        ? `${usStates[vehicle?.license_state]} (${vehicle?.license_state})`
        : null,
    },
  ];
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
            {info.map((i) =>
              i.value ? (
                <div key={i.label} className="my-2 flex w-full gap-x-4 px-6">
                  <dd className="text-sm font-medium leading-6 text-gray-900">
                    {i.label}:{" "}
                    <span className="font-normal text-gray-500">{i.value}</span>
                  </dd>
                </div>
              ) : null
            )}
          </div>
          {!isLoading && data?.vehicle ? (
            <CollapsibleSection
              open={showMoreVehicle}
              setOpen={setShowMoreVehicle}
              data={data?.vehicle}
              name="Vehicle"
            />
          ) : null}
          {!isLoading && data?.plant ? (
            <CollapsibleSection
              open={showMorePlant}
              setOpen={setShowMorePlant}
              data={data?.plant}
              name="Plant"
            />
          ) : null}
        </dl>
      </div>
    </div>
  );
}
