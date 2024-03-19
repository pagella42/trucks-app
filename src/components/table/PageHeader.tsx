type InspectionsTableProps = {
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
};
export default function PageHeader({
  setShowFilters,
  showFilters,
}: InspectionsTableProps) {
  return (
    <div className="sm:flex sm:items-center sm:justify-between">
      <h1 className="text-xl font-semibold leading-6 text-gray-900">
        Inspections Dashboard
      </h1>
      <div className="mt-3 sm:ml-4 sm:mt-0">
        <button
          onClick={() => setShowFilters(!showFilters)}
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {showFilters ? "Hide" : "Show"} filters
        </button>
      </div>
    </div>
  );
}
