import { camelCaseToRegularText } from "@/utils/camelCaseToRegularText";
import { getFullState } from "@/utils/getFullState";
import { isUsState } from "@/utils/isUsState";

type VehicleProps = {
  item?: string | number;
  name: string;
};

export default function VehicleCardItem({ item, name }: VehicleProps) {
  const value = item?.toString();

  if (!value) return null;
  return (
    <div key={name} className="my-2 flex w-full gap-x-4 px-6">
      <dd className="text-sm font-medium leading-6 text-gray-900">
        {camelCaseToRegularText(name)}:{" "}
        <span className="font-normal text-gray-500">
          {isUsState(value) ? getFullState(value) : value}
        </span>
      </dd>
    </div>
  );
}
