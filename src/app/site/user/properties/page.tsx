import React, { Suspense } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { LinkButton } from "@/components/LinkButton";
import { Filters } from "@/components/Filters";
import { PropertiesTable } from "./_components/properties-table";
import { Spinner } from "@/components/Loader";

const PropertiesPage = () => {
  return (
    <div>
      <div className="  w-full flex  items-center  justify-between   mb-5  ">
        <PageTitle title="Properties " />

        <LinkButton
          title="Create property"
          href="/site/user/properties/create-property"
        />
      </div>

      <Filters />
      <Suspense fallback={<Spinner />}>
        <PropertiesTable />
      </Suspense>
    </div>
  );
};

export default PropertiesPage;
