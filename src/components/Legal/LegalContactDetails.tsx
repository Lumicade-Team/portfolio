const LegalContactDetails = () => {
  return (
    <section className="not-prose rounded-md border bg-surface p-5">
      <h3 className="mb-3 text-lg font-semibold text-on-surface">
        Legal Entity and Contact
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm text-on-surface-variant">
          <thead>
            <tr>
              <th className="border px-3 py-2 text-left text-on-surface">Field</th>
              <th className="border px-3 py-2 text-left text-on-surface">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2"><strong className="text-on-surface">Business Name</strong></td>
              <td className="border px-3 py-2">Lumicade Solutions</td>
            </tr>
            <tr>
              <td className="border px-3 py-2"><strong className="text-on-surface">Registration No.</strong></td>
              <td className="border px-3 py-2">JM1042046-K</td>
            </tr>
            <tr>
              <td className="border px-3 py-2"><strong className="text-on-surface">Jurisdiction</strong></td>
              <td className="border px-3 py-2">Malaysia</td>
            </tr>
            <tr>
              <td className="border px-3 py-2"><strong className="text-on-surface">Business Address</strong></td>
              <td className="border px-3 py-2">Malaysia</td>
            </tr>
            <tr>
              <td className="border px-3 py-2"><strong className="text-on-surface">Phone</strong></td>
              <td className="border px-3 py-2">
                <a href="tel:+601124104917" className="hover:text-primary">
                  +60 11-2410 4917
                </a>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2"><strong className="text-on-surface">Email</strong></td>
              <td className="border px-3 py-2">
                <a href="mailto:info@lumicade.dev" className="hover:text-primary">
                  info@lumicade.dev
                </a>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2"><strong className="text-on-surface">Contact Page</strong></td>
              <td className="border px-3 py-2">/contact</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-on-surface-variant">
        © 2026 Lumicade Solutions. Engineering with Precision. JM1042046-K. All rights reserved.
      </p>
    </section>
  );
};

export default LegalContactDetails;
