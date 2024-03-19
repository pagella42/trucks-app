"use client";

import { queryClient } from "@/services/react-query/client";
import { QueryClientProvider } from "@tanstack/react-query";

export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
