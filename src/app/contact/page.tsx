import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Lumicade Solutions",
  description: "Have a project in mind? Get in touch with Lumicade Solutions — we build custom web systems, mobile apps, AI workflows, and SaaS products.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have a project in mind? Whether it's a custom system, mobile app, or AI workflow — reach out and let's build it together."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
