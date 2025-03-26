export interface FilterState {
  searchTerm: string;
  specialization: string;
  availability: string;
  experience: string;
  rating: string;
  sortBy: string;
}

export const SPECIALIZATIONS = [
  "Career Planning",
  "Course Selection",
  "Graduate School",
  "Research Opportunities",
  "Internship Guidance",
  "Academic Planning",
  "Study Abroad"
];

export const AVAILABILITY_OPTIONS = [
  "Weekdays",
  "Evenings",
  "Weekends",
  "By Appointment"
];

export const EXPERIENCE_LEVELS = [
  "Entry Level",
  "Mid Level",
  "Senior Level",
  "Department Head"
];

export const RATING_OPTIONS = [
  "4.5+",
  "4.0+",
  "3.5+",
  "Any"
];

export const SORT_OPTIONS = [
  { value: "rating", label: "Highest Rated" },
  { value: "experience", label: "Most Experienced" },
  { value: "availability", label: "Most Available" }
]; 