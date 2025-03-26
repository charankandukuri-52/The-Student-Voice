"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  WORK_TYPES,
  DEGREE_TYPES,
  GENDER_TYPES,
  LOCATION_TYPES,
  FIELD_OF_STUDY,
  WORK_STATUS,
  UNIVERSITIES,
  SORT_OPTIONS,
  type FilterState,
  DEFAULT_FILTERS,
} from "./work-filters";

interface WorkFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  filteredCount: number;
}

export function WorkFilters({
  filters,
  onFiltersChange,
  filteredCount,
}: WorkFiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handleStipendRangeChange = (value: string) => {
    const [min, max] = value.split("-").map(Number);
    onFiltersChange({ ...filters, stipendRange: [min, max] });
  };

  const clearFilters = () => {
    onFiltersChange(DEFAULT_FILTERS);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="flex-1 space-y-2">
            <Label>Search</Label>
            <Input
              placeholder="Search by name, department, or role..."
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Sort By</Label>
            <Select
              value={filters.sorting}
              onValueChange={(value) => handleFilterChange("sorting", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {SORT_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="outline"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="shrink-0"
          >
            {showAdvanced ? "Hide Advanced" : "Show Advanced"}
          </Button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: showAdvanced ? "auto" : 0 }}
          className="overflow-hidden"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label>University</Label>
              <Select
                value={filters.university}
                onValueChange={(value: typeof UNIVERSITIES[number] | "all") =>
                  onFiltersChange({ ...filters, university: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select University" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Universities</SelectItem>
                  {UNIVERSITIES.map((university) => (
                    <SelectItem key={university} value={university}>
                      {university.charAt(0).toUpperCase() + university.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Work Type</Label>
              <Select
                value={filters.type}
                onValueChange={(value) => handleFilterChange("type", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Work Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {WORK_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Degree Level</Label>
              <Select
                value={filters.degree}
                onValueChange={(value) => handleFilterChange("degree", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Degree Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Degrees</SelectItem>
                  {DEGREE_TYPES.map((degree) => (
                    <SelectItem key={degree} value={degree}>
                      {degree.charAt(0).toUpperCase() + degree.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <Select
                value={filters.gender}
                onValueChange={(value) => handleFilterChange("gender", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genders</SelectItem>
                  {GENDER_TYPES.map((gender) => (
                    <SelectItem key={gender} value={gender}>
                      {gender.charAt(0).toUpperCase() + gender.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Location</Label>
              <Select
                value={filters.location}
                onValueChange={(value) => handleFilterChange("location", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {LOCATION_TYPES.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location.charAt(0).toUpperCase() + location.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Field of Study</Label>
              <Select
                value={filters.fieldOfStudy}
                onValueChange={(value) => handleFilterChange("fieldOfStudy", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Field of Study" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Fields</SelectItem>
                  {FIELD_OF_STUDY.map((field) => (
                    <SelectItem key={field} value={field}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Work Status</Label>
              <Select
                value={filters.workStatus}
                onValueChange={(value) => handleFilterChange("workStatus", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Work Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  {WORK_STATUS.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Application Status</Label>
              <Select
                value={filters.applicationStatus}
                onValueChange={(value) => handleFilterChange("applicationStatus", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Application Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Stipend Range</Label>
              <Select
                value={`${filters.stipendRange[0]}-${filters.stipendRange[1]}`}
                onValueChange={handleStipendRangeChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Stipend Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50000">All Ranges</SelectItem>
                  <SelectItem value="0-10000">Under ₹10,000</SelectItem>
                  <SelectItem value="10000-20000">₹10,000 - ₹20,000</SelectItem>
                  <SelectItem value="20000-30000">₹20,000 - ₹30,000</SelectItem>
                  <SelectItem value="30000-50000">₹30,000 - ₹50,000</SelectItem>
                  <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="100000-1000000">Over ₹1,00,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredCount} results found
          </p>
          <Button
            variant="outline"
            onClick={clearFilters}
            className="text-sm"
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </div>
  );
} 