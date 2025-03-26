"use client";

import { useState, useMemo } from "react";
import { AdvisingFilters } from "./AdvisingFilters";
import { AdvisorCard } from "./AdvisorCard";
import { MOCK_ADVISORS } from "./AdvisingData";
import { type FilterState, EXPERIENCE_LEVELS, AVAILABILITY_OPTIONS } from "./academic-advising-filters";

export default function AcademicAdvisingSection() {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    specialization: "all",
    availability: "all",
    experience: "all",
    rating: "any",
    sortBy: "rating"
  });

  const filteredAdvisors = useMemo(() => {
    return MOCK_ADVISORS.filter((advisor) => {
      const matchesSearch = advisor.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        advisor.bio.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const matchesSpecialization = filters.specialization === "all" || 
        advisor.specializations.includes(filters.specialization);
      const matchesAvailability = filters.availability === "all" || 
        advisor.availability === filters.availability;
      const matchesExperience = filters.experience === "all" || 
        advisor.experience === filters.experience;
      const matchesRating = filters.rating === "any" || 
        advisor.rating >= parseFloat(filters.rating);

      return matchesSearch && matchesSpecialization && matchesAvailability && 
        matchesExperience && matchesRating;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "experience":
          return EXPERIENCE_LEVELS.indexOf(b.experience) - EXPERIENCE_LEVELS.indexOf(a.experience);
        case "availability":
          return AVAILABILITY_OPTIONS.indexOf(a.availability) - AVAILABILITY_OPTIONS.indexOf(b.availability);
        default:
          return 0;
      }
    });
  }, [filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <AdvisingFilters filters={filters} onFilterChange={setFilters} />
      </div>
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAdvisors.map((advisor) => (
            <AdvisorCard key={advisor.id} advisor={advisor} />
          ))}
        </div>
      </div>
    </div>
  );
} 