import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lumicade Solutions",
  description: "Learn how Lumicade Solutions helps you capture receipts, extract data offline, and ask AI for insights—plus our roadmap milestones.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Lumicade Solutions"
        description="We build privacy-first, offline-first tools that make personal finance effortless. Lumicade Solutions turns messy receipts into structured data and clear insights. Our milestones span foundation setup, OCR, offline storage, AI integration, exports, and rigorous testing."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
