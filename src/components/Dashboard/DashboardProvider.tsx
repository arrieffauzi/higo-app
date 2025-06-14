"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IDashboardProvider {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const DashboardProvider = (props: IDashboardProvider) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default DashboardProvider;
