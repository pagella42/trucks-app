import React from "react";
import SideBarLayout from "@/components/table/SideBarLayout";
import InspectionsTable from "@/components/table/InspectionsTable";

export default function Home() {
  return (
    <SideBarLayout>
      <InspectionsTable />
    </SideBarLayout>
  );
}
