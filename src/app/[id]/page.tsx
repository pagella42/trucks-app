"use client";

import BreadCrumbs from "@/components/inspectionDetails/BreadCrumbs";
import DetailsHeader from "@/components/inspectionDetails/DetailsHeader";
import MainDetails from "@/components/inspectionDetails/MainDetails";
import VehicleCard from "@/components/inspectionDetails/VehicleCard";
import { InspectionsType } from "@/services/api/inspections/schemas";
import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const searchParams = useSearchParams();
  const unparsedDetails = searchParams.get("details");
  const inspection = unparsedDetails
    ? (JSON.parse(unparsedDetails) as InspectionsType)
    : null;
  const vehicles = inspection?.vehicles;

  return (
    <div className="w-screen h-screen bg-white">
      <main>
        <DetailsHeader id={id} />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <BreadCrumbs id={id}/>
          <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {vehicles && vehicles[0] ? (
              <VehicleCard isFirst vehicle={vehicles[0]} />
            ) : null}
            <MainDetails />
            {vehicles && vehicles[1] ? (
              <VehicleCard vehicle={vehicles[1]} />
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
