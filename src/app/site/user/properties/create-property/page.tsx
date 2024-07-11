import { PageTitle } from "@/components/PageTitle";
import React from "react";
import { PropertyForm } from "../_components/property-form";

const CreatePropertyPage = () => {
  return (
    <div className="mt-8">
      <PageTitle title="Create Property" />
      <PropertyForm />
    </div>
  );
};

export default CreatePropertyPage;
