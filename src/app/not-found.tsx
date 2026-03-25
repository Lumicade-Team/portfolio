import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative z-10 pt-[150px] pb-[120px]">
      <div className="container">
        <div className="mx-auto max-w-[530px] text-center">
          <h2 className="mb-4 text-6xl font-bold text-primary">404</h2>
          <h3 className="mb-4 text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
            Page Not Found
          </h3>
          <p className="mb-10 text-base text-body-color dark:text-body-color-dark">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="rounded-lg bg-primary px-8 py-3 text-base font-medium text-lumi-offwhite transition hover:bg-primary/90"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
