"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { MOCK_TUTORS } from "./TutoringData";
import { TutoringFilters } from "./TutoringFilters";
import { TutoringCard } from "./TutoringCard";
import { DEFAULT_FILTERS, type FilterState } from "./tutoring-filters";

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

export function TutoringSection() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const filteredTutors = useMemo(() => {
    return MOCK_TUTORS.filter(tutor => {
      // Search term filter
      if (filters.searchTerm && !tutor.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
          !tutor.subjects.some(subject => subject.toLowerCase().includes(filters.searchTerm.toLowerCase()))) {
        return false;
      }

      // Subject filter
      if (filters.subject !== "all" && !tutor.subjects.includes(filters.subject)) {
        return false;
      }

      // Experience filter
      if (filters.experience !== "all" && tutor.experience < parseInt(filters.experience)) {
        return false;
      }

      // Availability filter
      if (filters.availability !== "all" && !tutor.availability.includes(filters.availability)) {
        return false;
      }

      // Rating filter
      if (filters.rating !== "all" && tutor.rating < parseFloat(filters.rating)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case "rating-desc":
          return b.rating - a.rating;
        case "rating":
          return a.rating - b.rating;
        case "experience-desc":
          return b.experience - a.experience;
        case "experience":
          return a.experience - b.experience;
        default:
          return 0;
      }
    });
  }, [filters]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <motion.div
        variants={fadeInUp}
        className="lg:col-span-1"
      >
        <TutoringFilters filters={filters} onFilterChange={setFilters} />
      </motion.div>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="lg:col-span-3"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTutors.map((tutor) => (
            <motion.div key={tutor.id} variants={fadeInUp}>
              <TutoringCard tutor={tutor} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 