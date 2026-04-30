import SectionTitle from '@/components/Common/SectionTitle';
import PrivacyContent from '@/components/Legal/PrivacyContent';

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <SectionTitle
        title="Privacy Policy"
        paragraph="How Lumicade Solutions collects, uses, and protects personal data."
        center={false}
        width="720px"
      />

      <div className="prose max-w-none text-body-color">
        <PrivacyContent />
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
