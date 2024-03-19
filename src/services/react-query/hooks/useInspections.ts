import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api/zodios";
import { queryKeys } from "../queryKeys";
import { BasicCategoryType, DateSortingType } from "@/constants/tableFilters";

export function useInspections(
  currentPage: number = 1,
  itemsPerPage: number = 20,
  basicFilter: BasicCategoryType | undefined = undefined,
  sortDate: DateSortingType | undefined = undefined
) {
  const queryInspections = useQuery({
    queryKey: [
      queryKeys.inspections,
      currentPage,
      itemsPerPage,
      basicFilter,
      sortDate,
    ],
    queryFn: async () => {
      const { data } = await apiClient.getInspections({
        queries: {
          page: currentPage,
          itemsPerPage,
          basicFilter,
          sortDate,
        },
      });
      return data;
    },
    cacheTime: Infinity,
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return queryInspections;
}
