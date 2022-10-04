import { useTheme } from "next-themes";
import { Button } from "@chakra-ui/react";
import { SunIcon, StarIcon, MoonIcon } from "@chakra-ui/icons";
const ETheme = {
  dark: "dark",
  light: "light",
};
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    console.log(theme);
    if (theme != ETheme.dark) setTheme(ETheme.dark);
    else setTheme(ETheme.light);
  };

  return (
    <div className="text-2xl top-2.5 left-3 fixed">
      <Button onClick={handleToggle}>
        {" "}
        {theme == ETheme.dark ? <SunIcon /> : <MoonIcon />}{" "}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
