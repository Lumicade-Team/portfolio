import { LinkedinLogo, XLogo, FacebookLogo } from "@phosphor-icons/react";

const SharePost = () => {
  return (
    <>
      <a
        href="#0"
        aria-label="share on LinkedIn"
        className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xs bg-gray-light text-body-color dark:text-body-color-dark duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary sm:ml-3"
      >
        <LinkedinLogo size={16} weight="fill" />
      </a>
      <a
        href="#0"
        aria-label="share on X"
        className="mb-3 ml-3 inline-flex h-9 w-9 items-center justify-center rounded-xs bg-gray-light text-body-color dark:text-body-color-dark duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary"
      >
        <XLogo size={18} weight="fill" />
      </a>
      <a
        href="#0"
        aria-label="share on Facebook"
        className="mb-3 ml-3 inline-flex h-9 w-9 items-center justify-center rounded-xs bg-gray-light text-body-color dark:text-body-color-dark duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary"
      >
        <FacebookLogo size={18} weight="fill" />
      </a>
    </>
  );
};

export default SharePost;
