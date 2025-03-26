"use client";

import { useState, useMemo } from "react";
import { StudyResourcesFilters } from "./StudyResourcesFilters";
import { StudyResourceCard } from "./StudyResourceCard";
import { MOCK_RESOURCES } from "./StudyResourcesData";
import { type FilterState } from "./study-resources-filters";

export default function StudyResourcesSection() {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    type: "all",
    subject: "all",
    format: "all",
    difficulty: "all",
    sortBy: "newest"
  });

  const filteredResources = useMemo(() => {
    return MOCK_RESOURCES.filter((resource) => {
      const matchesSearch = resource.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const matchesType = filters.type === "all" || resource.type === filters.type;
      const matchesSubject = filters.subject === "all" || resource.subjects.includes(filters.subject);
      const matchesFormat = filters.format === "all" || resource.format === filters.format;
      const matchesDifficulty = filters.difficulty === "all" || resource.difficulty === filters.difficulty;

      return matchesSearch && matchesType && matchesSubject && matchesFormat && matchesDifficulty;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case "newest":
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case "popular":
          return b.downloads - a.downloads;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <StudyResourcesFilters filters={filters} onFilterChange={setFilters} />
      </div>
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((resource) => (
            <StudyResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
} 