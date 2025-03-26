"use client";

import { useState, useMemo } from "react";
import { WorkshopFilters } from "./WorkshopFilters";
import { WorkshopCard } from "./WorkshopCard";
import { MOCK_WORKSHOPS } from "./WorkshopData";
import { type FilterState } from "./workshop-filters";

export default function WorkshopSection() {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    category: "all",
    level: "all",
    format: "all",
    duration: "all",
    sortBy: "popularity"
  });

  const filteredWorkshops = useMemo(() => {
    return MOCK_WORKSHOPS.filter((workshop) => {
      const matchesSearch = workshop.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        workshop.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const matchesCategory = filters.category === "all" || 
        workshop.category === filters.category;
      const matchesLevel = filters.level === "all" || 
        workshop.level === filters.level;
      const matchesFormat = filters.format === "all" || 
        workshop.format === filters.format;
      const matchesDuration = filters.duration === "all" || 
        workshop.duration === filters.duration;

      return matchesSearch && matchesCategory && matchesLevel && 
        matchesFormat && matchesDuration;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case "popularity":
          return b.enrolled - a.enrolled;
        case "rating":
          return b.rating - a.rating;
        case "date":
          return a.date.getTime() - b.date.getTime();
        case "duration":
          return a.duration.localeCompare(b.duration);
        default:
          return 0;
      }
    });
  }, [filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <WorkshopFilters filters={filters} onFilterChange={setFilters} />
      </div>
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredWorkshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </div>
    </div>
  );
} 