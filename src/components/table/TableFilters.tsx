import { ColumnLabels, tableColumns } from "@/constants/tableColumns";
import DropdownFilter from "./DropdownFilter";
import {
  BasicCategoryType,
  DateSorting,
  DateSortingType,
} from "@/constants/tableFilters";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

type TableFiltersProps = {
  setBasicFilter: (value: BasicCategoryType | undefined) => void;
  basicFilter?: BasicCategoryType;
  sortDate?: DateSortingType;
  setSortDate: (value: DateSortingType | undefined) => void;
  visible: boolean;
};
export default function TableFilters({
  setBasicFilter,
  basicFilter,
  sortDate,
  setSortDate,
  visible,
}: TableFiltersProps) {
  const iconProperties = {
    className: "h-5 w-5",
    "aria-hidden": true,
  };

  const onSortDate = (type: DateSortingType) => {
    if (sortDate === type) {
      setSortDate(undefined);
      return;
    }
    setSortDate(type);
  };
  if (!visible) return null;
  return (
    <thead className="bg-gray-50">
      <tr>
        {tableColumns.map((column, index) => (
          <th
            key={index}
            scope="col"
            className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 flex-row items-center justify-center text-center"
          >
            {column.label === ColumnLabels.BASIC ? (
              <DropdownFilter
                setBasicFilter={setBasicFilter}
                basicFilter={basicFilter}
              />
            ) : null}
            {column.label === ColumnLabels.DATE
              ? Object.values(DateSorting).map((type) => (
                  <div
                    key={type}
                    onClick={() => onSortDate(type)}
                    className={clsx(
                      "flex-none rounded group-hover:bg-gray-400 inline-block p-1 mx-1 cursor-pointer border border-solid",
                      sortDate === type
                        ? "bg-gray-100 border-gray-400 text-gray-900"
                        : "border-gray-300 text-gray-700"
                    )}
                  >
                    {type === DateSorting.DESC ? (
                      <ChevronDownIcon {...iconProperties} />
                    ) : (
                      <ChevronUpIcon {...iconProperties} />
                    )}
                  </div>
                ))
              : null}
          </th>
        ))}
      </tr>
    </thead>
  );
}
