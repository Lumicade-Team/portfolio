import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xl bg-white px-8 py-11 shadow-card dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite sm:text-3xl lg:text-2xl xl:text-3xl">
                Have a project in mind? Let&apos;s build it together.
              </h2>
              <p className="mb-12 text-base font-medium text-body-color dark:text-body-color-dark">
                Whether it&apos;s a custom system, mobile app, or AI workflow — we&apos;re ready to help.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-lumi-navy dark:text-lumi-offwhite"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-md border bg-lumi-offwhite px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-lumi-mutednav dark:bg-lumi-navy dark:text-body-color-dark dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-lumi-navy dark:text-lumi-offwhite"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-md border bg-lumi-offwhite px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-lumi-mutednav dark:bg-lumi-navy dark:text-body-color-dark dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-lumi-navy dark:text-lumi-offwhite"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project"
                        className="border-stroke w-full resize-none rounded-md border bg-lumi-offwhite px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-lumi-mutednav dark:bg-lumi-navy dark:text-body-color-dark dark:focus:border-primary"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-lg bg-primary px-9 py-4 text-base font-medium text-lumi-offwhite shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Start a Project
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
