export const COUNSELING_TYPES = [
  { value: 'all', label: 'All Types' },
  { value: 'individual', label: 'Individual Counseling' },
  { value: 'group', label: 'Group Therapy' },
  { value: 'crisis', label: 'Crisis Intervention' },
  { value: 'academic', label: 'Academic Counseling' }
] as const;

export const SPECIALIZATION_TYPES = [
  { value: 'all', label: 'All Specializations' },
  { value: 'anxiety', label: 'Anxiety & Stress' },
  { value: 'depression', label: 'Depression' },
  { value: 'academic', label: 'Academic Pressure' },
  { value: 'relationships', label: 'Relationships' },
  { value: 'identity', label: 'Identity & Self' },
  { value: 'substance', label: 'Substance Use' },
  { value: 'trauma', label: 'Trauma & PTSD' }
] as const;

export const AVAILABILITY_TYPES = [
  { value: 'all', label: 'All Times' },
  { value: 'morning', label: 'Morning (8AM-12PM)' },
  { value: 'afternoon', label: 'Afternoon (12PM-5PM)' },
  { value: 'evening', label: 'Evening (5PM-9PM)' },
  { value: 'weekend', label: 'Weekend' }
] as const;

export const SORT_OPTIONS = [
  { value: 'availability', label: 'Availability (Earliest)' },
  { value: 'availability-desc', label: 'Availability (Latest)' },
  { value: 'rating', label: 'Rating (High to Low)' },
  { value: 'rating-desc', label: 'Rating (Low to High)' },
  { value: 'popularity', label: 'Most Popular' },
  { value: 'name', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' }
] as const;

export const LOCATION_TYPES = [
  { value: 'all', label: 'All Locations' },
  { value: 'on-campus', label: 'On Campus' },
  { value: 'online', label: 'Online' },
  { value: 'hybrid', label: 'Hybrid' }
] as const;

export interface FilterState {
  searchTerm: string;
  type: typeof COUNSELING_TYPES[number]['value'];
  specialization: typeof SPECIALIZATION_TYPES[number]['value'];
  availability: typeof AVAILABILITY_TYPES[number]['value'];
  location: typeof LOCATION_TYPES[number]['value'];
  sortBy: typeof SORT_OPTIONS[number]['value'];
  priceRange: {
    min: number;
    max: number;
  };
  availabilityStatus: 'all' | 'available' | 'waitlist' | 'unavailable';
}

export const DEFAULT_FILTERS: FilterState = {
  searchTerm: "",
  type: "all",
  specialization: "all",
  availability: "all",
  location: "all",
  sortBy: "availability",
  priceRange: {
    min: 0,
    max: 5000
  },
  availabilityStatus: "all"
}; 