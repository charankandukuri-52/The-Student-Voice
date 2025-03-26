export interface FilterState {
  searchTerm: string;
  type: string;
  subject: string;
  format: string;
  difficulty: string;
  sortBy: string;
}

export const RESOURCE_TYPES = [
  "Study Guide",
  "Video Lecture",
  "Interactive Quiz",
  "Flashcards",
  "Practice Test",
  "Text"
];

export const SUBJECTS = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "English",
  "History"
];

export const FORMATS = [
  "PDF",
  "Video",
  "Interactive",
  "Text",
  "Audio"
];

export const DIFFICULTY_LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced"
];

export const SORT_OPTIONS = [
  { value: "newest", label: "Newest First" },
  { value: "popular", label: "Most Popular" },
  { value: "rating", label: "Highest Rated" }
]; 