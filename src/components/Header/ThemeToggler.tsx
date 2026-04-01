import { useTheme } from "next-themes";
import { Sun, Moon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      aria-label="theme toggler"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full bg-gray-2 text-black dark:bg-dark-bg dark:text-white h-9 w-9 md:h-14 md:w-14"
    >
      <Sun className="h-5 w-5 dark:hidden md:h-6 md:w-6" />
      <Moon className="hidden h-5 w-5 dark:block md:h-6 md:w-6" />
    </Button>
  );
};

export default ThemeToggler;
