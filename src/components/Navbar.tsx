import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { getCurrentUser } from "@/actions/user";

export const Navbar = async () => {
  const clerkUser = await currentUser();

  const user = await getCurrentUser();

  if (!user.data?.isAdmin) {
    return (
      <header className="sticky top-0 z-50  h-20 max-w-[1056px] mx-auto border-b-2 border-slate-200 px-4 bg-[#1B4242] rounded-b-md">
        <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg ">
          <Link href="/" className="flex items-center gap-x-3 pb-7 pl-4 pt-8 ">
            <Image src="/logo.svg" alt="logo" height={40} width={40} />
            <h1 className="text-2xl font-extrabold tracking-wide text-slate-50">
              Shey Properties
            </h1>
          </Link>
          <div className="bg-slate-50 flex items-center p-2 rounded-md">
            {user ? (
              <div className="flex w-full items-center">
                <div className=" space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger className=" text-[#1B4242] mr-4">
                      <span>Personal Account</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="mr-4"
                      side="left"
                      align="start"
                    >
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <h2 className="font-bold text-xl">
                          {clerkUser?.firstName}: active user
                        </h2>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/site/user/account">Property account</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/site/user/properties">Properties</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/site/user/subscriptions">
                          subscriptions
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-gray-200" />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {/* <div className="mr-3">
                <Button size="sm" className="ml-4  px-4 bg-[#1B4242] ">
                  {user.firstName}
                </Button>
              </div> */}
              </div>
            ) : (
              <div className="">
                <Button asChild size="sm" className="px-6  ">
                  <Link href="/login">Login</Link>
                </Button>
              </div>
            )}
            <ClerkLoading>
              <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="redirect">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-slate-50 text-lg"
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
  } else {
    return (
      <header className="sticky top-0 z-50  h-20 max-w-[1056px] mx-auto border-b-2 border-slate-200 px-4 bg-[#1B4242] rounded-b-md">
        <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg ">
          <Link href="/" className="flex items-center gap-x-3 pb-7 pl-4 pt-8 ">
            <Image src="/logo.svg" alt="logo" height={40} width={40} />
            <h1 className="text-2xl font-extrabold tracking-wide text-slate-50">
              Shey Properties
            </h1>
          </Link>
          <div className="bg-slate-50 flex items-center p-2 rounded-md">
            {user ? (
              <div className="flex w-full items-center">
                <div className=" space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger className=" text-[#1B4242] mr-4">
                      <span>{user.data?.username}</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="mr-4"
                      side="left"
                      align="start"
                    >
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <h2 className="font-bold text-xl">
                          {clerkUser?.firstName}: admin user
                        </h2>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/site/admin/users">Users</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/site/admin/properties">Properties</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/site/admin/subscriptions">
                          Subscriptions
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-gray-200" />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {/* <div className="mr-3">
                  <Button size="sm" className="ml-4  px-4 bg-[#1B4242] ">
                    {user.firstName}
                  </Button>
                </div> */}
              </div>
            ) : (
              <div className="">
                <Button asChild size="sm" className="px-6  ">
                  <Link href="/login">Login</Link>
                </Button>
              </div>
            )}
            <ClerkLoading>
              <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="redirect">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-slate-50 text-lg"
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
  }
};
