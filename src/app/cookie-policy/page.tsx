import SectionTitle from '@/components/Common/SectionTitle';
import CookieContent from '@/components/Legal/CookieContent';

const CookiePolicy = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <SectionTitle
        title="Cookie Policy"
        paragraph="How Lumicade Solutions uses cookies and similar technologies."
        center={false}
        width="720px"
      />

      <div className="prose max-w-none text-body-color">
        <CookieContent />
      </div>
    </main>
  );
};

export default CookiePolicy;
