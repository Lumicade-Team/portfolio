const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low rounded-3xl p-12 md:p-24 text-center relative overflow-hidden border border-outline-variant/10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/10 blur-[120px] rounded-full" />
          <div className="relative z-10">
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
              Ready to scale <br />
              your vision?
            </h2>
            <p className="text-on-surface-variant text-xl max-w-xl mx-auto mb-12">
              Join the elite brands working with Lumicade to build the next
              generation of digital excellence.
            </p>
            <a
              href="mailto:hello@lumicade.dev"
              className="inline-block px-12 py-5 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline text-lg font-extrabold uppercase rounded-md shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
