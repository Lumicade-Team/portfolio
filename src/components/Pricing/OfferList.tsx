import { Check, X } from "@phosphor-icons/react";

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="mb-3 flex items-center">
      <span className="bg-primary/10 mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full text-white">
        {status === "active" ? (
          <Check size={10} weight="bold" className="fill-current" />
        ) : (
          <X size={10} weight="bold" className="fill-current" />
        )}
      </span>
      <p className="text-body-color dark:text-body-color-dark m-0 text-base font-medium">{text}</p>
    </div>
  );
};

export default OfferList;
