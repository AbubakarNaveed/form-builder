"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Switch } from "../ui/switch";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <label htmlFor="airplane-mode">
        {theme === "light" ? (
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
        )}
      </label>
    </div>
  );
}

export default ThemeSwitcher;
