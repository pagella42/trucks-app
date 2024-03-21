import { camelCaseToRegularText } from "@/utils/camelCaseToRegularText";

export const VehicleCollapsibleItem = ({
  value,
  label,
}: {
  value: string | null;
  label: string;
}) => {
  if (!value) return null;

  return (
    <div key={String(label)} className="flex w-full gap-x-4 px-6">
      <dd className="text-sm font-medium leading-6 text-gray-900">
        {camelCaseToRegularText(label)}:{" "}
        <span className="font-normal text-gray-500">{value}</span>
      </dd>
    </div>
  );
};
