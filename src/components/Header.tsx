import React from "react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

export const Header = async () => {
  const clerkUser = await currentUser();
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4 bg-[#1B4242] ">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8 ">
          <Image src="/logo.svg" alt="logo" height={40} width={40} />
          <h1 className="text-xl font-extrabold tracking-wide text-slate-50">
            Shey Properties
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <Button asChild variant="ghost">
                <Link href="/site/user/properties" className="text-slate-50">
                  {clerkUser?.username}
                </Link>
              </Button>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="redirect">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-[#1B4242] text-lg cursor-pointer"
                >
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};
