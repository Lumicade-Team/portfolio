import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div className="group shadow-card hover:shadow-feature-2 dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xl bg-white duration-300">
        <Link
          href="/blog-details"
          className="relative block aspect-37/22 w-full"
        >
          <span className="bg-teal absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-lumi-offwhite capitalize">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-lumi-navy sm:text-2xl dark:text-lumi-offwhite"
            >
              {title}
            </Link>
          </h3>
          <p className="border-body-color/10 text-body-color dark:text-body-color-dark mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="border-body-color/10 mr-5 flex items-center border-r pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5 dark:border-white/10">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="text-lumi-navy mb-1 text-sm font-medium dark:text-lumi-offwhite">
                  By {author.name}
                </h4>
                <p className="text-body-color dark:text-body-color-dark text-xs">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="text-lumi-navy mb-1 text-sm font-medium dark:text-lumi-offwhite">
                Date
              </h4>
              <p className="text-body-color dark:text-body-color-dark text-xs">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
