import { PageTitle } from "@/components/PageTitle";
import React from "react";
import { PropertyForm } from "../_components/property-form";

const CreatePropertyPage = () => {
  return (
    <div>
      <PageTitle title="Create Property" />
      <PropertyForm />
    </div>
  );
};

export default CreatePropertyPage;
