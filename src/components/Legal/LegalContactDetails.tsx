const LegalContactDetails = () => {
  return (
    <section className="not-prose rounded-md border bg-surface p-5">
      <h3 className="mb-3 text-lg font-semibold text-on-surface">
        Legal Entity and Contact
      </h3>
      <ul className="space-y-2 text-sm text-on-surface-variant">
        <li>
          <strong className="text-on-surface">Business Name:</strong>{" "}
          Lumicade Solutions
        </li>
        <li>
          <strong className="text-on-surface">Registration No.:</strong>{" "}
          JM1042046-K
        </li>
        <li>
          <strong className="text-on-surface">Jurisdiction:</strong> Malaysia
        </li>
        <li>
          <strong className="text-on-surface">Business Address:</strong>{" "}
          Malaysia
        </li>
        <li>
          <strong className="text-on-surface">Phone:</strong>{" "}
          <a href="tel:+601124104917" className="hover:text-primary">
            +60 11-2410 4917
          </a>
        </li>
        <li>
          <strong className="text-on-surface">Email:</strong>{" "}
          <a href="mailto:info@lumicade.dev" className="hover:text-primary">
            info@lumicade.dev
          </a>
        </li>
        <li>
          <strong className="text-on-surface">Contact Page:</strong> /contact
        </li>
      </ul>
    </section>
  );
};

export default LegalContactDetails;
