import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { LinkButton } from "@/components/LinkButton";

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

      <div>Properties Table</div>
    </div>
  );
};

export default PropertiesPage;
