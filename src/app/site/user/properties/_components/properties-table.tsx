import db from "@/lib/db";
import React from "react";
import { PropertiesTableClientide } from "./properties-table-client";
import { GetCurrentUserFromMongoDB } from "@/actions/user";

export const PropertiesTable = async () => {
  const user = await GetCurrentUserFromMongoDB();
  const properties = await db.property.findMany({
    where: {
      userId: user.data?.id,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <>
      <PropertiesTableClientide properties={properties} />
    </>
  );
};
