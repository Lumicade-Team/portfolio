import SectionTitle from '@/components/Common/SectionTitle';
import PrivacyContent from '@/components/Legal/PrivacyContent';
import TermsContent from '@/components/Legal/TermsContent';
import CookieContent from '@/components/Legal/CookieContent';
import PrintButton from '@/components/Legal/PrintButton';
import LegalContactDetails from '@/components/Legal/LegalContactDetails';

const LegalPage = () => {
  return (
    <main id="top" className="max-w-7xl mx-auto px-6 py-20">
      <SectionTitle
        title="Legal"
        paragraph="Privacy Policy, Terms of Service, and Cookie Policy for Lumicade Solutions."
        center={false}
        width="820px"
      />

      <div className="md:grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1 sticky top-24 self-start hidden md:block">
          <div className="rounded-md border bg-surface p-4">
            <div className="mb-4 flex items-center justify-between">
              <strong>On this page</strong>
              <PrintButton />
            </div>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#privacy-policy" className="text-on-surface-variant hover:text-primary">Privacy Policy</a>
              <a href="#terms-of-service" className="text-on-surface-variant hover:text-primary">Terms of Service</a>
              <a href="#cookie-policy" className="text-on-surface-variant hover:text-primary">Cookie Policy</a>
            </nav>
          </div>
        </aside>

        <article className="md:col-span-3 prose max-w-none text-body-color space-y-8">
          <div className="mb-4 md:hidden flex items-center justify-between">
            <nav className="flex gap-3">
              <a href="#privacy-policy" className="text-sm text-primary hover:underline">Privacy</a>
              <a href="#terms-of-service" className="text-sm text-primary hover:underline">Terms</a>
              <a href="#cookie-policy" className="text-sm text-primary hover:underline">Cookies</a>
            </nav>
            <PrintButton />
          </div>

          <PrivacyContent />
          <TermsContent />
          <CookieContent />

          <LegalContactDetails />

          <div className="mt-6">
            <a href="#top" className="text-sm text-on-surface-variant hover:text-primary">Back to top</a>
          </div>
        </article>
      </div>
    </main>
  );
};

export default LegalPage;
