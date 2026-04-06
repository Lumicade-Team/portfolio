import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { Star } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  const ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        <Star size={18} weight="fill" />
      </span>,
    );
  }

  return (
    <div className="h-full w-full">
      <Card className="h-full shadow-card hover:shadow-feature-2 dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark duration-300">
        <CardContent className="flex h-full flex-col p-8 lg:px-5 xl:px-8">
          <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
          <p className="border-body-color/10 text-body-color dark:text-body-color-dark mb-8 flex-1 border-b pb-8 text-base leading-relaxed dark:border-white/10 dark:text-white">
            &ldquo;{content}&rdquo;
          </p>
          <div className="mt-auto flex items-center">
            <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
              <Image src={image} alt={name} fill />
            </div>
            <div className="w-full">
              <h3 className="text-lumi-navy mb-1 text-lg font-semibold lg:text-base xl:text-lg dark:text-lumi-offwhite">
                {name}
              </h3>
              <p className="text-body-color dark:text-body-color-dark text-sm">{designation}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleTestimonial;
