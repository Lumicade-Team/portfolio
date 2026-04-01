import { useEffect, useState } from "react";
import { CaretUp } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-99">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          aria-label="scroll to top"
          size="icon"
          className="bg-primary/80 hover:shadow-signUp text-white shadow-md"
        >
          <CaretUp size={20} weight="bold" />
        </Button>
      )}
    </div>
  );
}
