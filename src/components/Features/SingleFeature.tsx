import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, id } = feature;
  const accentColor = id % 2 === 1 ? "border-primary" : "border-teal";
  const iconBg = id % 2 === 1 ? "bg-primary/10 text-primary" : "bg-teal/10 text-teal";

  return (
    <div className="w-full h-full">
      <div
        className={`flex h-full flex-col rounded-xl border-l-4 ${accentColor} bg-white p-8 shadow-card transition-all duration-300 hover:shadow-feature-2 dark:bg-dark`}
        data-wow-delay=".15s"
      >
        <div className="mb-5 flex items-center gap-4">
          <div className={`${iconBg} flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-xl`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-lumi-navy dark:text-lumi-offwhite">
            {title}
          </h3>
        </div>
        <p className="text-body-color text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
