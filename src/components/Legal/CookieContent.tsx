const CookieContent = () => (
  <section id="cookie-policy" className="legal-section">
    <details open className="mb-6">
      <summary className="text-xl font-semibold">Cookie Policy</summary>
      <div className="mt-3 space-y-4">
        <p className="text-sm text-muted">Last updated: April 30, 2026</p>

        <p>
          This Cookie Policy explains how Lumicade Solutions uses cookies and
          similar tracking technologies when you access our website, consistent
          with the <strong>Personal Data Protection Act 2010 (as amended in 2024)</strong>
          and applicable Malaysian regulatory requirements.
        </p>

        <h4>What Are Cookies</h4>
        <p>
          Cookies are small text files placed on your device by a website to
          store information about your browsing session, preferences, and
          interactions. Some cookies process personal data and are therefore
          subject to the PDPA.
        </p>

        <h4>Categories of Cookies We Use</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border px-3 py-2 text-left">Category</th>
                <th className="border px-3 py-2 text-left">Purpose</th>
                <th className="border px-3 py-2 text-left">Requires Consent?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2"><strong>Strictly Necessary</strong></td>
                <td className="border px-3 py-2">Core functionality, security, session management</td>
                <td className="border px-3 py-2">No — essential for service delivery</td>
              </tr>
              <tr>
                <td className="border px-3 py-2"><strong>Analytics &amp; Performance</strong></td>
                <td className="border px-3 py-2">Understanding traffic patterns, improving performance</td>
                <td className="border px-3 py-2">Yes — personal data processed</td>
              </tr>
              <tr>
                <td className="border px-3 py-2"><strong>Functional</strong></td>
                <td className="border px-3 py-2">Remembering preferences and improving usability</td>
                <td className="border px-3 py-2">Yes — where personal data is involved</td>
              </tr>
              <tr>
                <td className="border px-3 py-2"><strong>Third-Party</strong></td>
                <td className="border px-3 py-2">Set by integrated providers (e.g. analytics, embedded tools)</td>
                <td className="border px-3 py-2">Yes — disclosed to users</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Legal Basis for Cookies</h4>
        <p>
          Under <strong>Section 6 of the PDPA</strong>, consent is required
          before processing personal data in a commercial transaction.
        </p>
        <ul>
          <li>
            <strong>Strictly necessary cookies</strong> may be used without
            prior consent as they are essential to deliver the service
            requested
          </li>
          <li>
            <strong>All non-essential cookies</strong> that process personal
            data require prior, informed, and freely given consent before being
            set, in accordance with the <strong>Notice and Choice Principle (Section 7, PDPA)</strong>
          </li>
          <li>
            Third-party cookies are disclosed under the <strong>Disclosure Principle (Section 8, PDPA)</strong>
          </li>
        </ul>

        <h4>Cookie Retention</h4>
        <p>Cookies may be:</p>
        <ul>
          <li><strong>Session-based</strong> — deleted automatically when you close your browser</li>
          <li><strong>Persistent</strong> — stored on your device for a defined period</li>
        </ul>
        <p>
          Retention periods vary by cookie purpose and provider configuration
          and are subject to the <strong>Retention Principle</strong> of the
          PDPA. Data collected via cookies is not held longer than necessary
          for its stated purpose.
        </p>

        <h4>Managing Cookie Preferences</h4>
        <ul>
          <li>Cookies may be disabled or deleted at any time using your browser settings</li>
          <li>Where available, cookie preferences may be updated through consent settings on the website</li>
          <li>Disabling certain cookies may affect site features and performance</li>
          <li>Consent for non-essential cookies may be withdrawn at any time without detriment</li>
        </ul>

        <h4>Updates to This Policy</h4>
        <p>
          This Cookie Policy may be updated to reflect legal, technical, or
          operational changes. The &ldquo;Last updated&rdquo; date at the top of this
          document indicates the most recent revision.
        </p>
      </div>
    </details>
  </section>
);

export default CookieContent;
