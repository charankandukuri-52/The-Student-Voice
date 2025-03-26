"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
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
  LOAN_TYPES,
  DEGREE_TYPES,
  LOCATION_TYPES,
  FIELD_OF_STUDY,
  LOAN_CATEGORIES,
  SORT_OPTIONS,
  type FilterState,
  DEFAULT_FILTERS
} from "./loan-filters";

interface LoanFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  filteredCount: number;
}

export function LoanFilters({ filters, onFiltersChange, filteredCount }: LoanFiltersProps) {
  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(false);

  return (
    <div className="w-full space-y-6">
      {/* Basic Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-full">
          <Label htmlFor="search" className="sr-only">Search loans</Label>
          <Input
            id="search"
            placeholder="Search loans by name, provider, category, or tags..."
            value={filters.searchTerm}
            onChange={(e) => onFiltersChange({ ...filters, searchTerm: e.target.value })}
            className="w-full"
          />
        </div>

        <Select
          value={filters.type}
          onValueChange={(value: FilterState['type']) => 
            onFiltersChange({ ...filters, type: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Loan Type" />
          </SelectTrigger>
          <SelectContent>
            {LOAN_TYPES.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.degree}
          onValueChange={(value: FilterState['degree']) => 
            onFiltersChange({ ...filters, degree: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Degree Level" />
          </SelectTrigger>
          <SelectContent>
            {DEGREE_TYPES.map((degree) => (
              <SelectItem key={degree.value} value={degree.value}>
                {degree.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.sortBy}
          onValueChange={(value: FilterState['sortBy']) => 
            onFiltersChange({ ...filters, sortBy: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort By" />
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

      {/* Advanced Filters Toggle */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setIsAdvancedFiltersOpen(!isAdvancedFiltersOpen)}
          className="gap-2"
        >
          {isAdvancedFiltersOpen ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Hide Advanced Filters
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Show Advanced Filters
            </>
          )}
        </Button>
      </div>

      {/* Advanced Filters */}
      <motion.div
        initial="hidden"
        animate={isAdvancedFiltersOpen ? "visible" : "hidden"}
        variants={{
          visible: { height: "auto", opacity: 1 },
          hidden: { height: 0, opacity: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 border rounded-lg bg-muted/50">
          <Select
            value={filters.location}
            onValueChange={(value: FilterState['location']) => 
              onFiltersChange({ ...filters, location: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATION_TYPES.map((location) => (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.fieldOfStudy}
            onValueChange={(value: FilterState['fieldOfStudy']) => 
              onFiltersChange({ ...filters, fieldOfStudy: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Field of Study" />
            </SelectTrigger>
            <SelectContent>
              {FIELD_OF_STUDY.map((field) => (
                <SelectItem key={field.value} value={field.value}>
                  {field.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.category}
            onValueChange={(value: FilterState['category']) => 
              onFiltersChange({ ...filters, category: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Loan Category" />
            </SelectTrigger>
            <SelectContent>
              {LOAN_CATEGORIES.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.applicationStatus}
            onValueChange={(value: FilterState['applicationStatus']) => 
              onFiltersChange({ ...filters, applicationStatus: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Application Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>

          <div className="space-y-2">
            <Label>Amount Range (₹)</Label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={filters.amountRange.min}
                onChange={(e) => onFiltersChange({
                  ...filters,
                  amountRange: {
                    ...filters.amountRange,
                    min: parseInt(e.target.value) || 0
                  }
                })}
              />
              <span>-</span>
              <Input
                type="number"
                placeholder="Max"
                value={filters.amountRange.max}
                onChange={(e) => onFiltersChange({
                  ...filters,
                  amountRange: {
                    ...filters.amountRange,
                    max: parseInt(e.target.value) || 5000000
                  }
                })}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Results Count and Clear Filters */}
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          Found {filteredCount} loan{filteredCount !== 1 ? 's' : ''}
        </p>
        <Button
          variant="ghost"
          onClick={() => onFiltersChange(DEFAULT_FILTERS)}
          className="text-sm"
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
} 