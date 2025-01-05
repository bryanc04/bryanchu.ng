import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "~/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Bryan Chung's Page",
  description: "Check out Bryan's portfolio!",
  icons: [{ url: "/logo.svg", rel: "icon" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>
        {children}

        <Toaster />
      </body>
      <GoogleAnalytics gaId="G-DDZ2W9JMSE" />
    </html>
  );
}
