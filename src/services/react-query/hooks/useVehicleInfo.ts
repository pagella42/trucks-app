import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api/zodios";
import { queryKeys } from "../queryKeys";

export function useVehicleInfo(vin: string) {
  console.log(vin);
  const queryVehicleInfo = useQuery({
    queryKey: [queryKeys.vehicleInfo, vin],
    queryFn: async () => {
      const { data } = await apiClient.getVehicleInfo({
        params: {
          vin,
        },
      });
      return data;
    },
    cacheTime: Infinity,
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return queryVehicleInfo;
}
