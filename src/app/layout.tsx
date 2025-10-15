import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "~/components/ui/toaster";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

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
      <head></head>
      <body>
        {children}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ppd8fkqut2");
          `}
        </Script>
        <Toaster />
      </body>
      <GoogleTagManager gtmId="GTM-KJ54BG8S" />
      <GoogleAnalytics gaId="G-DDZ2W9JMSE" />
    </html>
  );
}
