"use client";

import { FormEvent, useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to send message. Please try again.");
        return;
      }

      if (!data.emailSent) {
        // Log detailed email error information for debugging without exposing it to end users
        if (data.emailError) {
          console.error("Email sending error:", data.emailError);
        }
        alert(
          data.message ||
            "Your message was received, but we couldn't send a confirmation email. Please contact support if the issue persists."
        );
      } else {
        alert(data.message || "Your message has been sent.");
      }
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      alert("Something went wrong while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={handleSubmit}>
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
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your name"
                        required
                        className="border-stroke w-full rounded-md border bg-lumi-offwhite px-6 py-3 text-base text-body-color dark:text-body-color-dark outline-hidden focus:border-primary dark:border-lumi-mutednav dark:bg-lumi-navy dark:focus:border-primary"
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
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        required
                        className="border-stroke w-full rounded-md border bg-lumi-offwhite px-6 py-3 text-base text-body-color dark:text-body-color-dark outline-hidden focus:border-primary dark:border-lumi-mutednav dark:bg-lumi-navy dark:focus:border-primary"
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
                        id="message"
                        name="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        rows={5}
                        placeholder="Tell us about your project"
                        required
                        className="border-stroke w-full resize-none rounded-md border bg-lumi-offwhite px-6 py-3 text-base text-body-color dark:text-body-color-dark outline-hidden focus:border-primary dark:border-lumi-mutednav dark:bg-lumi-navy dark:focus:border-primary"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-lg bg-primary px-9 py-4 text-base font-medium text-lumi-offwhite shadow-submit duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 dark:shadow-submit-dark"
                    >
                      {isSubmitting ? "Sending..." : "Start a Project"}
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
