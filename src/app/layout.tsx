"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Manrope } from "next/font/google";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head />
      <body className={`bg-background text-on-surface font-body selection:bg-primary/30 ${inter.variable} ${manrope.variable} ${inter.className}`}>
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
