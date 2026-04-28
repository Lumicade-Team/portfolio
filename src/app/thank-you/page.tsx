import Link from "next/link";
import { Button } from "@/components/ui/button";

const ThankYouPage = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
        <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
          Thank You!
        </h1>
        <p className="text-xl text-on-surface-variant mb-10">
          Our team will contact you soon.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-primary font-headline font-bold uppercase tracking-widest text-on-primary shadow-[0_0_30px_rgba(151,169,255,0.25)] hover:shadow-[0_0_40px_rgba(151,169,255,0.4)] hover:scale-[1.02] active:scale-95 transition-all"
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
};

export default ThankYouPage;
