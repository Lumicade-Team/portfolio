import SectionTitle from '@/components/Common/SectionTitle';
import TermsContent from '@/components/Legal/TermsContent';

const TermsPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <SectionTitle
        title="Terms of Service"
        paragraph="The terms that govern use of Lumicade Solutions' website and services."
        center={false}
        width="720px"
      />

      <div className="prose max-w-none text-body-color">
        <TermsContent />
      </div>
    </main>
  );
};

export default TermsPage;
