"use server";

import db from "@/lib/db";

import { currentUser } from "@clerk/nextjs/server";

export const GetCurrentUserFromMongoDB = async () => {
  try {
    //check if user already esists

    const clerkUser = await currentUser();
    let mongoUser = null;

    mongoUser = await db.user.findUnique({
      where: {
        clerkUserId: clerkUser?.id,
      },
    });
    if (mongoUser) {
      return {
        data: mongoUser,
      };
    }

    // If no mongoUser
    const newUser = {
      clerkUserId: clerkUser?.id as string,
      username: clerkUser?.username as string,
      email: clerkUser?.emailAddresses[0].emailAddress as string,
      profilePic: clerkUser?.imageUrl as string,
    };

    const result = await db.user.create({
      data: newUser,
    });
    return { data: result };
  } catch (error) {
    return {
      message: "Database error failed to get user",
    };
  }
};
