"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconSun, IconMoon, IconDeviceLaptop } from "@tabler/icons-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themeOptions = [
    { value: 'light', label: 'Light theme', icon: IconSun },
    { value: 'dark', label: 'Dark theme', icon: IconMoon },
    { value: 'system', label: 'System theme', icon: IconDeviceLaptop },
  ];

  const currentTheme = themeOptions.find(option => option.value === theme) || themeOptions[2];
  const Icon = currentTheme.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          aria-label={`Current theme: ${currentTheme.label}. Click to change theme.`}
        >
          <Icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((option) => {
          const OptionIcon = option.icon;
          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setTheme(option.value)}
              className="flex items-center gap-2"
              role="menuitemradio"
              aria-checked={theme === option.value}
              aria-label={`Switch to ${option.label}`}
            >
              <OptionIcon className="h-4 w-4" aria-hidden="true" />
              <span>{option.label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 