import EnquiryDialog from "@/components/EnquiryDialog";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-surface-container-lowest">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-primary rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
          {/* Subtle gradient overlays */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 blur-[80px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#06b6d4]/10 blur-[80px] rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dim opacity-100 rounded-3xl" />
          <div className="relative z-10">
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
              Ready to scale <br />
              your vision?
            </h2>
            <p className="text-white/70 text-xl max-w-xl mx-auto mb-12">
              Join the elite brands working with Lumicade to build the next
              generation of digital excellence.
            </p>
            <EnquiryDialog
              trigger={
                <button className="inline-flex items-center justify-center px-12 py-4 text-base font-semibold bg-white text-primary rounded-lg shadow-lg hover:bg-white/90 active:scale-95 transition-all duration-md ease-out-stripe">
                  Start a Project
                </button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
