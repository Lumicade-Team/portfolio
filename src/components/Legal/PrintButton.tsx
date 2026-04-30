"use client";

const PrintButton = () => {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50"
      aria-label="Print legal documents"
    >
      Print
    </button>
  );
};

export default PrintButton;
