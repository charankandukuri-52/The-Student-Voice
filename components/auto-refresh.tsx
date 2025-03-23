"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";

export function AutoRefresh() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const refreshCount = parseInt(sessionStorage.getItem("refreshCount") || "0");
    
    if (pathname === "/" && refreshCount < 2) {
      // Increment refresh count
      sessionStorage.setItem("refreshCount", (refreshCount + 1).toString());
      
      // Show loading screen for 1 second before refresh
      const timer = setTimeout(() => {
        window.location.reload();
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (pathname === "/") {
      // After two refreshes, hide loading screen immediately
      setIsLoading(false);
    }
  }, [pathname]);

  if (isLoading && pathname === "/") {
    return (
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
        <Loading />
      </div>
    );
  }

  return null;
} 