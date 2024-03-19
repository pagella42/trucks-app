'use client'

import TableItem from "./TableItem";
import TableHeader from "./TableHeader";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { useInspections } from "@/services/react-query/hooks/useInspections";
import clsx from "clsx";
import TableFilters from "./TableFilters";
import { BasicCategoryType, DateSortingType } from "@/constants/tableFilters";
import PageHeader from "./PageHeader";
import TableWrapper from "./TableWrapper";
import LoadingIndicator from "../LoadingIndicator";

export default function InspectionsTable() {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [basicFilter, setBasicFilter] = useState<
    BasicCategoryType | undefined
  >();
  const [sortDate, setSortDate] = useState<DateSortingType>();

  const { data: { inspections, totalItems } = {}, isLoading } = useInspections(
    currentPage,
    itemsPerPage,
    basicFilter,
    sortDate
  );

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (!totalItems) return;
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleBasicFilterChange = (value: BasicCategoryType | undefined) => {
    setCurrentPage(1);
    setBasicFilter(value);
  };
  const handleSortDate = (value: DateSortingType | undefined) => {
    setCurrentPage(1);
    setSortDate(value);
  };

  return (
    <main
      className={clsx("py-10 lg:pl-72", isLoading ? "bg-white" : " bg-gray-50")}
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className="px-4 sm:px-6 lg:px-8 bg-gray-50 h-screen">
          <PageHeader
            setShowFilters={setShowFilters}
            showFilters={showFilters}
          />
          <TableWrapper>
            <table className="min-w-full divide-y divide-gray-300">
              <TableHeader />
              <TableFilters
                visible={showFilters}
                setBasicFilter={handleBasicFilterChange}
                basicFilter={basicFilter}
                setSortDate={handleSortDate}
                sortDate={sortDate}
              />
              <tbody className="divide-y divide-gray-200 bg-white">
                {inspections?.length
                  ? inspections
                      .slice(0, 20)
                      .map((inspection) => (
                        <TableItem
                          key={inspection.report_number}
                          inspection={inspection}
                        />
                      ))
                  : null}
              </tbody>
            </table>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
              totalItems={totalItems}
            />
          </TableWrapper>
        </div>
      )}
    </main>
  );
}
