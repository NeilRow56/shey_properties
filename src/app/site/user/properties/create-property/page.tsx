import { PageTitle } from "@/components/PageTitle";
import React from "react";
import PropertiesForm from "../_components/property-form";
import { App } from "antd";

const CreatePropertyPage = () => {
  return (
    <App>
      <div className="mt-8">
        <PageTitle title="Create Property" />
        <PropertiesForm />
      </div>
    </App>
  );
};

export default CreatePropertyPage;
