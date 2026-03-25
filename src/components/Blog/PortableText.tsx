import { PortableText as PT, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/client";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(820).url()}
            alt={value.alt || ""}
            className="w-full rounded-xl shadow-[0_4px_24px_rgba(51,82,218,0.1)]"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-body-color">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => (
      <pre className="my-6 overflow-x-auto rounded-xl border border-lumi-mutednav/30 bg-[#0d1520] p-5 text-sm dark:bg-[#0a1018]">
        <code>{value.code}</code>
      </pre>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b border-primary/30 font-semibold text-primary transition hover:border-primary"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="rounded bg-primary/5 px-1.5 py-0.5 text-sm font-semibold text-primary">
        {children}
      </code>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mb-5 mt-14 text-[28px] font-extrabold leading-tight tracking-tight text-lumi-navy dark:text-lumi-offwhite">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-4 mt-10 text-xl font-extrabold tracking-tight text-lumi-navy dark:text-lumi-offwhite">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-3 mt-8 text-lg font-bold text-lumi-navy dark:text-lumi-offwhite">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-lg leading-[1.85] text-body-color dark:text-body-color-dark">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-xl border-l-[3px] border-primary bg-primary/[0.03] px-6 py-4 text-lumi-navy/80 dark:bg-primary/[0.05] dark:text-body-color-dark">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc space-y-2 pl-6 text-lg text-body-color marker:text-primary dark:text-body-color-dark">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-6 text-lg text-body-color marker:text-primary dark:text-body-color-dark">
        {children}
      </ol>
    ),
  },
};

export default function PortableTextBody({ body }: { body: any[] }) {
  return <PT value={body} components={components} />;
}
