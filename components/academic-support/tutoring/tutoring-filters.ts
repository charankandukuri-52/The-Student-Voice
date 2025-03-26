export interface FilterState {
  searchTerm: string;
  subject: string;
  experience: string;
  availability: string;
  rating: string;
  sortBy: string;
}

export const DEFAULT_FILTERS: FilterState = {
  searchTerm: "",
  subject: "all",
  experience: "all",
  availability: "all",
  rating: "all",
  sortBy: "rating-desc"
};

export const SUBJECTS = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "English",
  "History",
  "Economics",
  "Psychology",
  "Sociology"
];

export const EXPERIENCE_LEVELS = [
  "Less than 1 year",
  "1-2 years",
  "2-5 years",
  "5+ years"
];

export const AVAILABILITY_OPTIONS = [
  "Weekdays",
  "Weekends",
  "Evenings",
  "Mornings"
];

export const RATING_OPTIONS = [
  "4.5+",
  "4.0+",
  "3.5+",
  "3.0+"
];

export const SORT_OPTIONS = [
  { value: "rating-desc", label: "Highest Rated" },
  { value: "rating", label: "Lowest Rated" },
  { value: "experience-desc", label: "Most Experienced" },
  { value: "experience", label: "Least Experienced" }
]; 