export interface FilterState {
  searchTerm: string;
  category: string;
  level: string;
  format: string;
  duration: string;
  sortBy: string;
}

export const WORKSHOP_CATEGORIES = [
  "Academic Skills",
  "Career Development",
  "Research Methods",
  "Technical Skills",
  "Soft Skills",
  "Leadership",
  "Professional Development"
];

export const DIFFICULTY_LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert"
];

export const FORMATS = [
  "In-Person",
  "Online",
  "Hybrid",
  "Self-Paced"
];

export const DURATIONS = [
  "1-2 hours",
  "Half Day",
  "Full Day",
  "Multiple Days",
  "Weekly Series"
];

export const SORT_OPTIONS = [
  { value: "popularity", label: "Most Popular" },
  { value: "rating", label: "Highest Rated" },
  { value: "date", label: "Upcoming Soon" },
  { value: "duration", label: "Shortest Duration" }
]; 