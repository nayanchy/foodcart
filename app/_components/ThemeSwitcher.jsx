"use client";

import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import { MdOutlineWbSunny, MdSunny } from "react-icons/md";
import { useEffect } from "react";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log("Current theme:", theme);
    setTheme(theme === "light" ? "dark" : "light");
    console.log("New theme:", theme);
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      {theme === "light" ? <MdOutlineWbSunny /> : <MdSunny />}
    </div>
  );
}

export default ThemeSwitcher;
