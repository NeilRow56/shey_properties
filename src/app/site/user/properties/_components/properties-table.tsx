import db from "@/lib/db";
import React from "react";
import { PropertiesTableClientide } from "./properties-table-client";

export const PropertiesTable = async () => {
  const properties = await db.property.findMany();
  console.log(properties);

  return (
    <>
      <PropertiesTableClientide properties={properties} />
    </>
  );
};
