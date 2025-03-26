"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { MOCK_LOANS } from "./LoanData";
import { LoanFilters } from "./LoanFilters";
import { LoanCard } from "./LoanCard";
import { DEFAULT_FILTERS, type FilterState } from "./loan-filters";

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

export function LoansSection() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const filteredLoans = useMemo(() => {
    return MOCK_LOANS.filter(loan => {
      // Search term filter
      if (filters.searchTerm && !loan.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
          !loan.provider.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }

      // Type filter
      if (filters.type !== "all" && loan.type !== filters.type) {
        return false;
      }

      // Degree filter
      if (filters.degree !== "all" && loan.degree !== filters.degree) {
        return false;
      }

      // Location filter
      if (filters.location !== "all" && loan.location.type !== filters.location) {
        return false;
      }

      // Field of Study filter
      if (filters.fieldOfStudy !== "all" && 
          !loan.fieldOfStudy.includes("All Fields") && 
          !loan.fieldOfStudy.includes(filters.fieldOfStudy)) {
        return false;
      }

      // Category filter
      if (filters.category !== "all" && !loan.loanType.includes(filters.category)) {
        return false;
      }

      // Application Status filter
      if (filters.applicationStatus !== "all" && loan.applicationStatus !== filters.applicationStatus) {
        return false;
      }

      // Amount Range filter
      const amount = loan.amountRange.max || loan.amountRange.min;
      if (filters.amountRange.min > amount || filters.amountRange.max < amount) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case "interest-rate": {
          const rateA = a.interestRateRange.min;
          const rateB = b.interestRateRange.min;
          return rateA - rateB;
        }
        case "interest-rate-desc": {
          const rateA = a.interestRateRange.min;
          const rateB = b.interestRateRange.min;
          return rateB - rateA;
        }
        case "amount": {
          const amountA = a.amountRange.max || a.amountRange.min;
          const amountB = b.amountRange.max || b.amountRange.min;
          return amountA - amountB;
        }
        case "amount-desc": {
          const amountA = a.amountRange.max || a.amountRange.min;
          const amountB = b.amountRange.max || b.amountRange.min;
          return amountB - amountA;
        }
        case "tenure": {
          const tenureA = a.tenureRange.max || a.tenureRange.min;
          const tenureB = b.tenureRange.max || b.tenureRange.min;
          return tenureA - tenureB;
        }
        case "tenure-desc": {
          const tenureA = a.tenureRange.max || a.tenureRange.min;
          const tenureB = b.tenureRange.max || b.tenureRange.min;
          return tenureB - tenureA;
        }
        case "popularity":
          return b.popularity - a.popularity;
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
      <LoanFilters
        filters={filters}
        onFiltersChange={setFilters}
        filteredCount={filteredLoans.length}
      />

      <motion.div 
        variants={stagger}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredLoans.map((loan) => (
          <motion.div
            key={loan.id}
            variants={fadeInUp}
          >
            <LoanCard
              loan={loan}
            />
          </motion.div>
        ))}
        {filteredLoans.length === 0 && (
          <motion.div 
            variants={fadeInUp}
            className="col-span-full text-center py-12"
          >
            <p className="text-muted-foreground">No loans found matching your criteria.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
} 