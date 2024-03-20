import { tableColumns } from "@/constants/tableColumns";
import { getDetailsUrl } from "@/helpers/getDetailsUrl";
import { InspectionsType } from "@/services/api/inspections/schemas";
import { getNestedValue } from "@/helpers/getNestedValue";
import Link from "next/link";

type TableItemProps = {
  inspection: InspectionsType;
};

export default function TableItem({ inspection }: TableItemProps) {
  const expandUrl = getDetailsUrl(inspection);

  return (
    <tr>
      {tableColumns.map((column, index) =>
        column.key ? (
          <td
            key={index}
            className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-700"
          >
            {getNestedValue(inspection, column.key) ?? "-"}
          </td>
        ) : null
      )}
      <td className="relative whitespace-nowrap py-4 px-4 text-sm font-medium text-center">
        <Link
          href={expandUrl}
          className="text-blue-600 hover:text-[#b4c916] text-center"
        >
          Expand
        </Link>
      </td>
    </tr>
  );
}
