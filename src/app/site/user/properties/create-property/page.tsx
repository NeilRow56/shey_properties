import { PageTitle } from "@/components/PageTitle";
import React from "react";
import PropertiesForm from "../_components/property-form";
import { App } from "antd";
import { Property } from "@prisma/client";
import db from "@/lib/db";

const CreatePropertyPage = async ({ searchParams }: { searchParams: any }) => {
  const cloneFrom = searchParams?.cloneFrom || "";
  let property: Property | null = null;
  if (cloneFrom) {
    property = (await db.property.findUnique({
      where: {
        id: cloneFrom,
      },
    })) as Property;
  }
  return (
    <App>
      <div className="mt-8">
        <PageTitle title="Create Property" />
        <PropertiesForm initialValues={property ? property : {}} />
      </div>
    </App>
  );
};

export default CreatePropertyPage;
