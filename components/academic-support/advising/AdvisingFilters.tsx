"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type FilterState } from "./academic-advising-filters";
import {
  SPECIALIZATIONS,
  AVAILABILITY_OPTIONS,
  EXPERIENCE_LEVELS,
  RATING_OPTIONS,
  SORT_OPTIONS,
} from "./academic-advising-filters";

interface AdvisingFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function AdvisingFilters({ filters, onFilterChange }: AdvisingFiltersProps) {
  const handleChange = (key: keyof FilterState, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search advisors..."
            value={filters.searchTerm}
            onChange={(e) => handleChange("searchTerm", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Specialization</Label>
          <Select
            value={filters.specialization}
            onValueChange={(value) => handleChange("specialization", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select specialization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specializations</SelectItem>
              {SPECIALIZATIONS.map((spec) => (
                <SelectItem key={spec} value={spec}>
                  {spec}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Availability</Label>
          <Select
            value={filters.availability}
            onValueChange={(value) => handleChange("availability", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Times</SelectItem>
              {AVAILABILITY_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Experience</Label>
          <Select
            value={filters.experience}
            onValueChange={(value) => handleChange("experience", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {EXPERIENCE_LEVELS.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Rating</Label>
          <Select
            value={filters.rating}
            onValueChange={(value) => handleChange("rating", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select minimum rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Rating</SelectItem>
              {RATING_OPTIONS.map((rating) => (
                <SelectItem key={rating} value={rating}>
                  {rating}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Sort By</Label>
          <Select
            value={filters.sortBy}
            onValueChange={(value) => handleChange("sortBy", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
} 