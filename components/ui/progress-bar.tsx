"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function ProgressBar() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="h-1 bg-primary"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: "0 0 10px rgba(var(--primary), 0.5)",
        }}
      />
    </div>
  );
} 