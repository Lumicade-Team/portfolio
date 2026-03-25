import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lumicade Solutions",
  description: "Lumicade Solutions is a Malaysia-based software house and SaaS provider. We research, design, build, and deploy IT solutions across multiple domains.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Lumicade Solutions"
        description="A Malaysia-based software house and SaaS provider. We research, design, build, and deploy IT solutions across multiple domains — from custom systems to AI automation and our own subscription-based microservices."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
