"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { IndianRupee } from "lucide-react";
import {
  COUNSELING_TYPES,
  SPECIALIZATION_TYPES,
  AVAILABILITY_TYPES,
  LOCATION_TYPES,
  SORT_OPTIONS,
  type FilterState,
} from "./counseling-filters";

interface CounselingFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  filteredCount: number;
}

export function CounselingFilters({
  filters,
  onFiltersChange,
  filteredCount,
}: CounselingFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (
    key: keyof FilterState,
    value: string | number | { min: number; max: number }
  ) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const handlePriceRangeChange = (value: number[]) => {
    handleFilterChange("priceRange", {
      min: value[0],
      max: value[1],
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search counseling services..."
          value={filters.searchTerm}
          onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
          className="flex-1"
        />
        <Select
          value={filters.type}
          onValueChange={(value) => handleFilterChange("type", value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            {COUNSELING_TYPES.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={filters.specialization}
          onValueChange={(value) => handleFilterChange("specialization", value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Specialization" />
          </SelectTrigger>
          <SelectContent>
            {SPECIALIZATION_TYPES.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-[120px]"
        >
          {isExpanded ? "Less Filters" : "More Filters"}
        </Button>
      </div>

      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Select
            value={filters.availability}
            onValueChange={(value) => handleFilterChange("availability", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              {AVAILABILITY_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.location}
            onValueChange={(value) => handleFilterChange("location", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATION_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.sortBy}
            onValueChange={(value) => handleFilterChange("sortBy", value)}
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

          <Select
            value={filters.availabilityStatus}
            onValueChange={(value) => handleFilterChange("availabilityStatus", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="waitlist">Waitlist</SelectItem>
              <SelectItem value="unavailable">Unavailable</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-4 w-4" />
            <span className="text-sm font-medium">Price Range</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ₹{filters.priceRange.min} - ₹{filters.priceRange.max}
          </span>
        </div>
        <Slider
          value={[filters.priceRange.min, filters.priceRange.max]}
          onValueChange={handlePriceRangeChange}
          min={0}
          max={5000}
          step={100}
          className="w-full"
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredCount} counseling services found
        </p>
        <Button
          variant="outline"
          onClick={() => {
            onFiltersChange({
              searchTerm: "",
              type: "all",
              specialization: "all",
              availability: "all",
              location: "all",
              sortBy: "availability",
              priceRange: {
                min: 0,
                max: 5000,
              },
              availabilityStatus: "all",
            });
          }}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
} 