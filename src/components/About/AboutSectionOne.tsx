import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="bg-lumi-navy py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionTitle
            title="Who We Are"
            paragraph="Lumicade Solutions is a Malaysia-based software house and SaaS provider. We research, design, build, and deploy IT solutions across multiple domains — from custom web systems and mobile apps to AI-powered automation pipelines. Clients choose us for end-to-end development, multi-domain expertise, and an AI-first approach that keeps their business ahead."
            center
            mb="0px"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
