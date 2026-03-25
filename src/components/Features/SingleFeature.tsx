import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, id } = feature;
  const accentColor = id % 2 === 1 ? "border-primary" : "border-teal";
  const iconBg = id % 2 === 1 ? "bg-primary/10 text-primary" : "bg-teal/10 text-teal";

  return (
    <div className="w-full">
      <div
        className={`rounded-xl border-l-4 ${accentColor} bg-white p-8 shadow-card transition-all duration-300 hover:shadow-feature-2 dark:bg-dark`}
        data-wow-delay=".15s"
      >
        <div className={`${iconBg} mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-xl`}>
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-lumi-navy sm:text-2xl lg:text-xl xl:text-2xl dark:text-lumi-offwhite">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
