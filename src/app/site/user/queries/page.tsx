import { GetCurrentUserFromMongoDB } from "@/actions/user";
import { PageTitle } from "@/components/PageTitle";
import db from "@/lib/db";
import React from "react";
import UserQueriesTable from "./_components/user-queries-table";

const QueriesPage = async () => {
  const user = await GetCurrentUserFromMongoDB();
  const queries = await db.query.findMany({
    where: {
      userId: user?.data?.id,
    },
    include: {
      property: true,
    },
  });

  return (
    <div>
      <PageTitle title="Queries" />
      <UserQueriesTable queries={queries} />
    </div>
  );
};

export default QueriesPage;
