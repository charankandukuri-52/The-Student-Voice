"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { MOCK_COUNSELING } from "./CounselingData";
import { CounselingFilters } from "./CounselingFilters";
import { CounselingCard } from "./CounselingCard";
import { DEFAULT_FILTERS, type FilterState } from "./counseling-filters";

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

export function CounselingSection() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const filteredCounseling = useMemo(() => {
    return MOCK_COUNSELING.filter(counseling => {
      // Search term filter
      if (filters.searchTerm && !counseling.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
          !counseling.provider.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }

      // Type filter
      if (filters.type !== "all" && counseling.type !== filters.type) {
        return false;
      }

      // Specialization filter
      if (filters.specialization !== "all" && !counseling.specialization.includes(filters.specialization)) {
        return false;
      }

      // Availability filter
      if (filters.availability !== "all" && counseling.availability.type !== filters.availability) {
        return false;
      }

      // Location filter
      if (filters.location !== "all" && counseling.location.type !== filters.location) {
        return false;
      }

      // Availability Status filter
      if (filters.availabilityStatus !== "all" && counseling.availabilityStatus !== filters.availabilityStatus) {
        return false;
      }

      // Price Range filter
      const price = counseling.price.range.min;
      if (filters.priceRange.min > price || filters.priceRange.max < price) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case "rating":
          return b.counselor.rating - a.counselor.rating;
        case "rating-desc":
          return a.counselor.rating - b.counselor.rating;
        case "popularity":
          return b.popularity - a.popularity;
        case "name":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "availability":
          return new Date(a.availability.nextAvailable).getTime() - new Date(b.availability.nextAvailable).getTime();
        case "availability-desc":
          return new Date(b.availability.nextAvailable).getTime() - new Date(a.availability.nextAvailable).getTime();
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
      <CounselingFilters
        filters={filters}
        onFiltersChange={setFilters}
        filteredCount={filteredCounseling.length}
      />

      <motion.div 
        variants={stagger}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCounseling.map((counseling) => (
          <motion.div
            key={counseling.id}
            variants={fadeInUp}
          >
            <CounselingCard
              counseling={counseling}
            />
          </motion.div>
        ))}
        {filteredCounseling.length === 0 && (
          <motion.div 
            variants={fadeInUp}
            className="col-span-full text-center py-12"
          >
            <p className="text-muted-foreground">No counseling services found matching your criteria.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
} 