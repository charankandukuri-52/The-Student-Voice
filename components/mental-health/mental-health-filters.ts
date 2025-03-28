export const MENTAL_HEALTH_TYPES = [
  "All Types",
  "counseling",
  "wellness",
  "support-group",
] as const;

export const CATEGORY_TYPES = [
  "All Categories",
  "Mindfulness",
  "Academic Support",
  "Physical Wellness",
  "Emotional Support",
  "Stress Management",
  "Meditation",
  "Yoga",
] as const;

export const SCHEDULE_TYPES = [
  "All Schedules",
  "weekly",
  "bi-weekly",
  "monthly",
  "on-demand",
] as const;

export const SORT_OPTIONS = [
  "Availability (Earliest)",
  "Availability (Latest)",
  "Rating (High to Low)",
  "Rating (Low to High)",
  "Most Popular",
  "Name (A-Z)",
  "Name (Z-A)",
] as const;

export const LOCATION_TYPES = [
  "All Locations",
  "on-campus",
  "online",
  "hybrid",
] as const;

export type MentalHealthType = typeof MENTAL_HEALTH_TYPES[number];
export type CategoryType = typeof CATEGORY_TYPES[number];
export type ScheduleType = typeof SCHEDULE_TYPES[number];
export type SortOption = typeof SORT_OPTIONS[number];
export type LocationType = typeof LOCATION_TYPES[number];

export interface FilterState {
  searchTerm: string;
  type: MentalHealthType;
  category: CategoryType;
  schedule: ScheduleType;
  location: LocationType;
  sortBy: SortOption;
  priceRange: "All Prices" | "Free" | "Paid";
  availabilityStatus: "All" | "Available" | "Full";
}

export const DEFAULT_FILTERS: FilterState = {
  searchTerm: "",
  type: "All Types",
  category: "All Categories",
  schedule: "All Schedules",
  location: "All Locations",
  sortBy: "Availability (Earliest)",
  priceRange: "All Prices",
  availabilityStatus: "All",
}; 