import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { ReactNode } from "react";
import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Haul - Challenge",
  description: "DOT Inspections tool",
};

interface RootLayoutProps {
  children: ReactNode;
}


const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ReactQueryClientProvider>
      <html
        lang="en"
        className={clsx(
          "h-full scroll-smooth bg-white antialiased",
          inter.variable
        )}
      >
        <head>
          <link
            rel="preconnect"
            href="https://cdn.fontshare.com"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
          />
        </head>
        <body className="flex min-h-full flex-col">{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
};

export default RootLayout;
