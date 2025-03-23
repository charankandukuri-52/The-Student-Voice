"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { MOCK_SCHOLARSHIPS } from "./ScholarshipData";
import { ScholarshipFilters } from "./ScholarshipFilters";
import { ScholarshipCard } from "./ScholarshipCard";
import { DEFAULT_FILTERS, type FilterState } from "./scholarship-filters";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ScholarshipsSection() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const filteredScholarships = useMemo(() => {
    return MOCK_SCHOLARSHIPS.filter(scholarship => {
      // Search term filter
      if (filters.searchTerm && !scholarship.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
          !scholarship.provider.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }

      // Type filter
      if (filters.type !== "all" && scholarship.type !== filters.type) {
        return false;
      }

      // Degree filter
      if (filters.degree !== "all" && !scholarship.eligibilityCriteria.includes(filters.degree)) {
        return false;
      }

      // Gender filter
      if (filters.gender !== "all" && !scholarship.eligibilityCriteria.includes(filters.gender)) {
        return false;
      }

      // Location filter
      if (filters.location !== "all" && scholarship.location.type !== filters.location) {
        return false;
      }

      // Field of Study filter
      if (filters.fieldOfStudy !== "all" && !scholarship.eligibilityCriteria.includes(filters.fieldOfStudy)) {
        return false;
      }

      // Financial Aid Type filter
      if (filters.financialAid !== "all" && !scholarship.financialAidType.includes(filters.financialAid)) {
        return false;
      }

      // Application Status filter
      if (filters.applicationStatus !== "all") {
        const now = new Date();
        const deadline = new Date(scholarship.deadline);

        switch (filters.applicationStatus) {
          case "open":
            if (now > deadline) return false;
            break;
          case "upcoming":
            if (now >= deadline) return false;
            break;
          case "closed":
            if (now <= deadline) return false;
            break;
        }
      }

      // Amount Range filter
      const amount = parseInt(scholarship.amount.replace(/[^0-9]/g, ""));
      if (filters.amountRange.min > amount || filters.amountRange.max < amount) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case "amount-desc":
          return parseInt(b.amount.replace(/[^0-9]/g, "")) - parseInt(a.amount.replace(/[^0-9]/g, ""));
        case "amount":
          return parseInt(a.amount.replace(/[^0-9]/g, "")) - parseInt(b.amount.replace(/[^0-9]/g, ""));
        case "deadline":
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        case "deadline-desc":
          return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
        default:
          return 0;
      }
    });
  }, [filters]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="w-full"
    >
      <ScholarshipFilters
        filters={filters}
        onFiltersChange={setFilters}
        filteredCount={filteredScholarships.length}
      />

      <motion.div 
        variants={stagger}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredScholarships.map((scholarship) => (
          <motion.div
            key={scholarship.id}
            variants={fadeInUp}
          >
            <ScholarshipCard
              scholarship={scholarship}
            />
          </motion.div>
        ))}
        {filteredScholarships.length === 0 && (
          <motion.div 
            variants={fadeInUp}
            className="col-span-full text-center py-12"
          >
            <p className="text-muted-foreground">No scholarships found matching your criteria.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
} 