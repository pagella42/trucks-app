import { camelCaseToRegularText } from "@/utils/camelCaseToRegularText";
import { CollapsibleSectionDataItem } from "./VehicleCollapsibleSection";

export const VehicleCollapsibleItem = ({ name, data }: { name: string; data: CollapsibleSectionDataItem }) => {
    const value = data[name as keyof CollapsibleSectionDataItem];
    if (!value) return null;
  
    return (
      <div key={String(name)} className="flex w-full gap-x-4 px-6">
        <dd className="text-sm font-medium leading-6 text-gray-900">
          {camelCaseToRegularText(String(name))}:{" "}
          <span className="font-normal text-gray-500">{String(value)}</span>
        </dd>
      </div>
    );
  };
  