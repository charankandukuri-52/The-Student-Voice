"use client";

import { useState } from "react";
import { WorkCard } from "./WorkCard";
import { WorkFilters } from "./WorkFilters";
import { MOCK_WORK } from "./WorkData";
import { type FilterState, DEFAULT_FILTERS } from "./work-filters";

export function WorkSection() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const filteredWork = MOCK_WORK.filter((work) => {
    const matchesSearch = work.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      work.department.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      work.university.toLowerCase().includes(filters.searchTerm.toLowerCase());

    const matchesType = filters.type === "all" || work.type === filters.type;
    const matchesDegree = filters.degree === "all" || work.degree === filters.degree;
    const matchesGender = filters.gender === "all" || work.gender === filters.gender;
    const matchesLocation = filters.location === "all" || work.location === filters.location;
    const matchesFieldOfStudy = filters.fieldOfStudy === "all" || work.fieldOfStudy === filters.fieldOfStudy;
    const matchesWorkStatus = filters.workStatus === "all" || work.workStatus === filters.workStatus;
    const matchesUniversity = filters.university === "all" || work.university === filters.university;
    const matchesApplicationStatus = filters.applicationStatus === "all" || work.applicationStatus === filters.applicationStatus;
    const matchesStipendRange = work.stipendRange[0] >= filters.stipendRange[0] && work.stipendRange[1] <= filters.stipendRange[1];

    return (
      matchesSearch &&
      matchesType &&
      matchesDegree &&
      matchesGender &&
      matchesLocation &&
      matchesFieldOfStudy &&
      matchesWorkStatus &&
      matchesUniversity &&
      matchesApplicationStatus &&
      matchesStipendRange
    );
  });

  // Sort the filtered work
  const sortedWork = [...filteredWork].sort((a, b) => {
    if (filters.sorting === "deadline") {
      return a.deadlineDate.getTime() - b.deadlineDate.getTime();
    } else if (filters.sorting === "stipend") {
      return b.stipendRange[0] - a.stipendRange[0];
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">On Campus Work</h2>
          <p className="text-muted-foreground mt-2">
            Find on-campus work opportunities that match your profile and interests.
          </p>
        </div>

        <WorkFilters
          filters={filters}
          onFiltersChange={setFilters}
          filteredCount={filteredWork.length}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWork.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>

        {sortedWork.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No work opportunities found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
} 