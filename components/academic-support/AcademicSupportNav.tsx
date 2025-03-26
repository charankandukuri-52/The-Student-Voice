"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Tutoring",
    href: "/academic-support/tutoring",
  },
  {
    title: "Study Resources",
    href: "/academic-support/resources",
  },
  {
    title: "Academic Advising",
    href: "/academic-support/advising",
  },
  {
    title: "Workshops & Training",
    href: "/academic-support/workshops",
  },
];

export function AcademicSupportNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mb-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
} 