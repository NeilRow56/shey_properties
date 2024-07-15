"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { GetCurrentUserFromMongoDB } from "./user";
import { Property } from "@prisma/client";

export const AddProperty = async (property: Property) => {
  try {
    const user: any = await GetCurrentUserFromMongoDB();
    property.userId = user.data.id;
    await db.property.create({
      data: property,
    });
    revalidatePath("/site/user/properties");
    return {
      data: property,
      message: "Property added successfully",
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const EditProperty = async (property: Property, id: string) => {
  try {
    await db.property.update({
      where: {
        id: id,
      },
      data: property,
    });
    revalidatePath("/site/user/properties");
    return {
      data: property,
      message: "Property edited successfully",
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
