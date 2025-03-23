"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AutoRefresh() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Only refresh on the home page and if we haven't refreshed before
    if (pathname === "/" && !sessionStorage.getItem("hasRefreshed")) {
      sessionStorage.setItem("hasRefreshed", "true");
      window.location.reload();
    }
  }, [pathname]);

  return null;
} 