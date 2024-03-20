import { getFullState } from "@/utils/getFullState";
import { isUsState } from "@/utils/isUsState";

export const DetailItem = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  const parsedValue = value?.toString();
  const valueToRender = isUsState(parsedValue) ? getFullState(parsedValue, true) : value;
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-900">{title}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {valueToRender}
      </dd>
    </div>
  );
};
