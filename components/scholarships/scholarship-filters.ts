export const SCHOLARSHIP_TYPES = [
  { value: 'all', label: 'All Types' },
  { value: 'government', label: 'Government' },
  { value: 'private', label: 'Private' },
  { value: 'international', label: 'International' }
] as const;

export const DEGREE_TYPES = [
  { value: 'all', label: 'All Degrees' },
  { value: 'undergraduate', label: 'Undergraduate' },
  { value: 'postgraduate', label: 'Postgraduate' },
  { value: 'both', label: 'Both UG & PG' },
  { value: 'phd', label: 'PhD' }
] as const;

export const GENDER_TYPES = [
  { value: 'all', label: 'All Genders' },
  { value: 'female', label: 'Female Only' },
  { value: 'male', label: 'Male Only' }
] as const;

export const LOCATION_TYPES = [
  { value: 'all', label: 'All Locations' },
  { value: 'india', label: 'India' },
  { value: 'abroad', label: 'Abroad' },
  { value: 'both', label: 'Both' }
] as const;

export const FINANCIAL_AID_TYPES = [
  { value: 'all', label: 'All Types' },
  { value: 'full-tuition', label: 'Full Tuition' },
  { value: 'partial-tuition', label: 'Partial Tuition' },
  { value: 'living-stipend', label: 'Living Stipend' },
  { value: 'research-grant', label: 'Research Grant' }
] as const;

export const SORT_OPTIONS = [
  { value: 'deadline', label: 'Deadline (Earliest)' },
  { value: 'deadline-desc', label: 'Deadline (Latest)' },
  { value: 'amount', label: 'Amount (Low to High)' },
  { value: 'amount-desc', label: 'Amount (High to Low)' },
  { value: 'popularity', label: 'Most Popular' },
  { value: 'name', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' }
] as const;

export const FIELD_OF_STUDY = [
  { value: 'all', label: 'All Fields' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'medical', label: 'Medical' },
  { value: 'science', label: 'Science' },
  { value: 'arts', label: 'Arts' },
  { value: 'commerce', label: 'Commerce' },
  { value: 'law', label: 'Law' },
  { value: 'management', label: 'Management' }
] as const;

export interface FilterState {
  searchTerm: string;
  type: typeof SCHOLARSHIP_TYPES[number]['value'];
  degree: typeof DEGREE_TYPES[number]['value'];
  gender: typeof GENDER_TYPES[number]['value'];
  location: typeof LOCATION_TYPES[number]['value'];
  fieldOfStudy: typeof FIELD_OF_STUDY[number]['value'];
  financialAid: typeof FINANCIAL_AID_TYPES[number]['value'];
  sortBy: typeof SORT_OPTIONS[number]['value'];
  amountRange: {
    min: number;
    max: number;
  };
  applicationStatus: 'all' | 'open' | 'closed' | 'upcoming';
}

export const DEFAULT_FILTERS: FilterState = {
  searchTerm: "",
  type: "all",
  degree: "all",
  gender: "all",
  location: "all",
  fieldOfStudy: "all",
  financialAid: "all",
  sortBy: "deadline",
  amountRange: {
    min: 0,
    max: 5000000
  },
  applicationStatus: "all"
}; 