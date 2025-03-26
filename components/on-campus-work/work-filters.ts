export const WORK_TYPES = [
  "teaching",
  "research",
  "administrative",
  "library",
  "lab",
] as const;

export const DEGREE_TYPES = [
  "undergraduate",
  "postgraduate",
  "phd",
] as const;

export const GENDER_TYPES = [
  "female only",
  "male only",
  "all",
] as const;

export const LOCATION_TYPES = [
  "india",
  "abroad",
] as const;

export const FIELD_OF_STUDY = [
  "engineering",
  "medical",
  "arts",
  "science",
  "commerce",
  "all fields",
] as const;

export const WORK_STATUS = [
  "part time",
  "full time",
] as const;

export const UNIVERSITIES = [
  "iit bombay",
  "iit delhi",
  "iit madras",
  "iit kanpur",
  "iit kharagpur",
  "iit roorkee",
  "iit guwahati",
  "iit hyderabad",
  "iit indore",
  "iit bhubaneswar",
  "iit gandhinagar",
  "iit jodhpur",
  "iit patna",
  "iit ropar",
  "iit mandi",
  "iit palakkad",
  "iit tirupati",
  "iit dhanbad",
  "iit bhilai",
  "iit goa",
  "iit jammu",
  "iit dharwad",
  "all universities",
] as const;

export const SORT_OPTIONS = [
  "deadline",
  "stipend",
] as const;

export interface FilterState {
  searchTerm: string;
  type: typeof WORK_TYPES[number] | "all";
  degree: typeof DEGREE_TYPES[number] | "all";
  gender: typeof GENDER_TYPES[number] | "all";
  location: typeof LOCATION_TYPES[number] | "all";
  fieldOfStudy: typeof FIELD_OF_STUDY[number] | "all";
  workStatus: typeof WORK_STATUS[number] | "all";
  university: typeof UNIVERSITIES[number] | "all";
  sorting: typeof SORT_OPTIONS[number];
  stipendRange: [number, number];
  applicationStatus: "open" | "closed" | "all";
}

export const DEFAULT_FILTERS: FilterState = {
  searchTerm: "",
  type: "all",
  degree: "all",
  gender: "all",
  location: "all",
  fieldOfStudy: "all",
  workStatus: "all",
  university: "all",
  sorting: "deadline",
  stipendRange: [0, 50000],
  applicationStatus: "all",
}; 