import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/theme-provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shey Properties",
  description: "Onestop for all your property needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${font.className} ${"theme-orange"}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
