"use server";

import db from "@/lib/db";
import { GetCurrentUserFromMongoDB } from "./user";

export const AddQuery = async (query: any) => {
  try {
    const user = await GetCurrentUserFromMongoDB();
    query.userId = user?.data?.id;
    await db.query.create({
      data: query,
    });
    return {
      success: true,
      message: "Successfully added the query.",
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const GetQueriesbyPropertId = async (propertyId: string) => {
  try {
    const queries = await db.query.findMany({
      where: { propertyId: propertyId },
    });
    return {
      success: true,
      data: queries,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
