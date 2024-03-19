import { tableColumns } from "@/constants/tableColumns";

export default function TableHeader() {
  return (
    <thead className="bg-[#e5f767]">
      <tr>
        {tableColumns.map((column, index) => (
          <th
            key={index}
            scope="col"
            className="py-3.5 px-3 text-left text-sm font-semibold text-slate-900 text-center"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
