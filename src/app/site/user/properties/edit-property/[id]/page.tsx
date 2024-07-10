import { PageTitle } from "@/components/PageTitle";
import React from "react";
import { PropertyForm } from "../../_components/property-form";

const EditPropertyPage = () => {
  return (
    <div>
      <PageTitle title="Edit Property" />
      <PropertyForm />
    </div>
  );
};

export default EditPropertyPage;
