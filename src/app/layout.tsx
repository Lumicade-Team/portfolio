"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-lumi-offwhite dark:bg-lumi-navy ${inter.className}`}>
        <Providers>
          {!isAdmin && <Header />}
          {children}
          {!isAdmin && <Footer />}
          {!isAdmin && <ScrollToTop />}
        </Providers>
      </body>
    </html>
  );
}
