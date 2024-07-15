import { PageTitle } from "@/components/PageTitle";
import React from "react";
import PropertiesForm from "../../_components/property-form";
import db from "@/lib/db";

interface Props {
  params: {
    id: string;
  };
}

const EditPropertyPage = async ({ params }: Props) => {
  const property = await db.property.findUnique({
    where: {
      id: params.id,
    },
  });
  return (
    <div>
      <PageTitle title="Edit Property" />
      <PropertiesForm initialValues={property} isEdit={true} />
    </div>
  );
};

export default EditPropertyPage;
