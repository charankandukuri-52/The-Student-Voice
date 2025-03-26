export const LOAN_TYPES = [
  { value: 'all', label: 'All Types' },
  { value: 'government', label: 'Government' },
  { value: 'private', label: 'Private' },
  { value: 'international', label: 'International' }
] as const;

export const DEGREE_TYPES = [
  { value: 'all', label: 'All Degrees' },
  { value: 'undergraduate', label: 'Undergraduate' },
  { value: 'postgraduate', label: 'Postgraduate' },
  { value: 'both', label: 'Both' },
  { value: 'phd', label: 'PhD' }
] as const;

export const LOCATION_TYPES = [
  { value: 'all', label: 'All Locations' },
  { value: 'india', label: 'India' },
  { value: 'abroad', label: 'Abroad' },
  { value: 'both', label: 'Both' }
] as const;

export const FIELD_OF_STUDY = [
  { value: 'all', label: 'All Fields' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'medical', label: 'Medical' },
  { value: 'science', label: 'Science' },
  { value: 'arts', label: 'Arts' },
  { value: 'commerce', label: 'Commerce' }
] as const;

export const LOAN_CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 'education', label: 'Education' },
  { value: 'tuition', label: 'Tuition' },
  { value: 'living-expenses', label: 'Living Expenses' },
  { value: 'research', label: 'Research' }
] as const;

export const SORT_OPTIONS = [
  { value: 'interest-rate', label: 'Interest Rate (Low to High)' },
  { value: 'interest-rate-desc', label: 'Interest Rate (High to Low)' },
  { value: 'amount', label: 'Amount (Low to High)' },
  { value: 'amount-desc', label: 'Amount (High to Low)' },
  { value: 'tenure', label: 'Tenure (Short to Long)' },
  { value: 'tenure-desc', label: 'Tenure (Long to Short)' },
  { value: 'popularity', label: 'Most Popular' }
] as const;

export interface FilterState {
  searchTerm: string;
  type: typeof LOAN_TYPES[number]['value'];
  degree: typeof DEGREE_TYPES[number]['value'];
  location: typeof LOCATION_TYPES[number]['value'];
  fieldOfStudy: typeof FIELD_OF_STUDY[number]['value'];
  category: typeof LOAN_CATEGORIES[number]['value'];
  sortBy: typeof SORT_OPTIONS[number]['value'];
  amountRange: {
    min: number;
    max: number;
  };
  applicationStatus: 'all' | 'open' | 'upcoming' | 'closed';
}

export const DEFAULT_FILTERS: FilterState = {
  searchTerm: "",
  type: "all",
  degree: "all",
  location: "all",
  fieldOfStudy: "all",
  category: "all",
  sortBy: "interest-rate",
  amountRange: {
    min: 0,
    max: 5000000
  },
  applicationStatus: "all"
}; 