import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lumicade Solutions",
  description: "Lumicade Solutions is a Malaysia-based software house and SaaS provider. We research, design, build, and deploy IT solutions across multiple domains.",
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
