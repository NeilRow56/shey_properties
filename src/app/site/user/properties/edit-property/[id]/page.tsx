import { PageTitle } from "@/components/PageTitle";
import React from "react";
import PropertiesForm from "../../_components/property-form";

const EditPropertyPage = () => {
  return (
    <div>
      <PageTitle title="Edit Property" />
      <PropertiesForm />
    </div>
  );
};

export default EditPropertyPage;
