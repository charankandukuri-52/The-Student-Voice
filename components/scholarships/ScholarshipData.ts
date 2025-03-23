export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  type: 'government' | 'private' | 'international';
  category: string;
  degree: 'undergraduate' | 'postgraduate' | 'both' | 'phd';
  gender: 'all' | 'female' | 'male';
  fieldOfStudy: string[];
  eligibilityCriteria: string[];
  amount: string;
  amountRange: {
    min: number;
    max: number | null;
  };
  deadline: string;
  deadlineDate: string; // ISO date string
  requiredDocuments: string[];
  applicationLink: string;
  location: {
    type: 'india' | 'abroad' | 'both';
    specificRegion?: string;
  };
  financialAidType: ('full-tuition' | 'partial-tuition' | 'living-stipend' | 'research-grant')[];
  tags: string[];
  applicationStatus: 'open' | 'closed' | 'upcoming';
  popularity: number; // Number of applications/views
  incomeLimit?: number; // Optional income limit in INR
  instituteType?: string[]; // Optional specific institutes
}

// Helper function to convert date string to ISO format
const toISODate = (dateStr: string) => new Date(dateStr).toISOString();

export const MOCK_SCHOLARSHIPS: Scholarship[] = [
  // Government Scholarships
  {
    id: "1",
    name: "Post Matric Scholarship for SC Students",
    provider: "Ministry of Social Justice and Empowerment",
    type: "government",
    category: "SC Category",
    degree: "both",
    gender: "all",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Must belong to Scheduled Caste category",
      "Family income should not exceed ₹2.5 lakh per annum",
      "Must be pursuing post-matriculation studies",
      "Must have secured at least 60% marks in previous examination"
    ],
    amount: "Course fees + Maintenance allowance up to ₹1,200 per month",
    amountRange: {
      min: 14400,
      max: 100000
    },
    deadline: "October 31, 2024",
    deadlineDate: "2024-10-31",
    requiredDocuments: [
      "Caste certificate",
      "Income certificate",
      "Previous year marksheet",
      "Domicile certificate",
      "Bank account details"
    ],
    applicationLink: "https://scholarships.gov.in",
    location: {
      type: "india"
    },
    financialAidType: ["full-tuition", "living-stipend"],
    tags: ["SC", "Need-based", "Merit-based", "Government"],
    applicationStatus: "upcoming",
    popularity: 95000,
    incomeLimit: 250000
  },
  {
    id: "2",
    name: "National Scholarship Portal (NSP) - Central Sector Scheme of Scholarship",
    provider: "Ministry of Education",
    type: "government",
    category: "General",
    degree: "undergraduate",
    gender: "all",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Must be a student enrolled in a post-secondary institution",
      "Must have scored at least 80% marks in Class 12",
      "Family income should not exceed ₹8 lakh per annum"
    ],
    amount: "₹10,000 - ₹20,000 per annum",
    amountRange: {
      min: 10000,
      max: 20000
    },
    deadline: "November 30, 2024",
    deadlineDate: "2024-11-30",
    requiredDocuments: [
      "Marksheets",
      "Income certificate",
      "Identity proof",
      "Admission letter"
    ],
    applicationLink: "https://scholarships.gov.in",
    location: {
      type: "india"
    },
    financialAidType: ["partial-tuition"],
    tags: ["General", "Merit-based", "Government"],
    applicationStatus: "upcoming",
    popularity: 75000,
    incomeLimit: 800000
  },
  {
    id: "3",
    name: "Indira Gandhi Scholarship for Single Girl Child",
    provider: "University Grants Commission (UGC)",
    type: "government",
    category: "Single Girl Child",
    degree: "postgraduate",
    gender: "female",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Must be the only girl child of the parents",
      "Must be enrolled in a regular full-time first-year postgraduate course",
      "Must have secured at least 55% marks in the qualifying examination"
    ],
    amount: "₹36,200 per annum",
    amountRange: {
      min: 36200,
      max: 36200
    },
    deadline: "October 15, 2024",
    deadlineDate: "2024-10-15",
    requiredDocuments: [
      "Birth certificate",
      "Previous academic records",
      "Admission letter",
      "Proof of single girl child status"
    ],
    applicationLink: "https://scholarships.gov.in",
    location: {
      type: "india"
    },
    financialAidType: ["partial-tuition"],
    tags: ["Women", "Merit-based", "Government", "Single Girl Child"],
    applicationStatus: "upcoming",
    popularity: 25000
  },

  // Private Scholarships
  {
    id: "4",
    name: "Tata Scholarship for Cornell University",
    provider: "Tata Education and Development Trust",
    type: "private",
    category: "International Education",
    degree: "undergraduate",
    gender: "all",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Must be an Indian citizen",
      "Must have received admission to Cornell University",
      "Demonstrate financial need",
      "Strong academic record"
    ],
    amount: "Full tuition coverage + living expenses",
    amountRange: {
      min: 3500000,
      max: null
    },
    deadline: "March 1, 2024",
    deadlineDate: "2024-03-01",
    requiredDocuments: [
      "Admission letter from Cornell",
      "Financial documents",
      "Academic transcripts",
      "Statement of purpose",
      "Letters of recommendation"
    ],
    applicationLink: "https://www.cornell.edu/tata-scholarship",
    location: {
      type: "abroad",
      specificRegion: "United States"
    },
    financialAidType: ["full-tuition", "living-stipend"],
    tags: ["International", "Need-based", "Merit-based", "Private"],
    applicationStatus: "open",
    popularity: 15000,
    instituteType: ["Cornell University"]
  },
  {
    id: "5",
    name: "Sitaram Jindal Foundation Scholarship",
    provider: "Sitaram Jindal Foundation",
    type: "private",
    category: "General",
    degree: "both",
    gender: "all",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Must be a student pursuing undergraduate or postgraduate studies",
      "Must have secured at least 60% marks in the previous examination",
      "Must come from a financially disadvantaged background"
    ],
    amount: "Varies based on financial need",
    amountRange: {
      min: 0,
      max: null
    },
    deadline: "May 31, 2024",
    deadlineDate: "2024-05-31",
    requiredDocuments: [
      "Previous academic records",
      "Income certificate",
      "Bank account details",
      "Identity proof"
    ],
    applicationLink: "http://www.sitaramjindalfoundation.org",
    location: {
      type: "india"
    },
    financialAidType: ["full-tuition", "living-stipend"],
    tags: ["General", "Need-based", "Private"],
    applicationStatus: "upcoming",
    popularity: 50000
  },

  // Merit-Based Scholarships
  {
    id: "6",
    name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
    provider: "Department of Science and Technology",
    type: "government",
    category: "Science",
    degree: "both",
    gender: "all",
    fieldOfStudy: ["Science", "Engineering", "Medicine"],
    eligibilityCriteria: [
      "Must be pursuing undergraduate or postgraduate studies in Science, Engineering or Medicine",
      "Must have secured at least 75% marks in Class 12 or equivalent examination"
    ],
    amount: "Up to ₹5,000 per month + annual contingency grant",
    amountRange: {
      min: 0,
      max: 5000
    },
    deadline: "July 30, 2024",
    deadlineDate: "2024-07-30",
    requiredDocuments: [
      "Previous academic records",
      "Admission letter",
      "Identity proof"
    ],
    applicationLink: "https://kvpy.iisc.ernet.in",
    location: {
      type: "india"
    },
    financialAidType: ["living-stipend"],
    tags: ["Science", "Merit-based", "Government"],
    applicationStatus: "upcoming",
    popularity: 30000
  },

  // Need-Based Scholarships
  {
    id: "7",
    name: "HDFC Educational Crisis Scholarship Scheme",
    provider: "HDFC Bank",
    type: "private",
    category: "General",
    degree: "both",
    gender: "all",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Must be facing an educational crisis due to financial difficulty",
      "Must be a student enrolled in undergraduate or postgraduate studies"
    ],
    amount: "Varies based on financial need",
    amountRange: {
      min: 0,
      max: null
    },
    deadline: "June 30, 2024",
    deadlineDate: "2024-06-30",
    requiredDocuments: [
      "Academic records",
      "Income certificate",
      "Crisis-related documents"
    ],
    applicationLink: "https://www.hdfcbank.com",
    location: {
      type: "india"
    },
    financialAidType: ["full-tuition", "living-stipend"],
    tags: ["General", "Need-based", "Private"],
    applicationStatus: "upcoming",
    popularity: 40000
  },

  // Community-Based Scholarships
  {
    id: "8",
    name: "ONGC Scholarships for SC/ST Students",
    provider: "Oil and Natural Gas Corporation (ONGC)",
    type: "private",
    category: "SC/ST",
    degree: "undergraduate",
    gender: "all",
    fieldOfStudy: ["Engineering", "Medical", "Related Fields"],
    eligibilityCriteria: [
      "Must belong to SC/ST category",
      "Must be pursuing undergraduate studies in Engineering, Medical, or related fields",
      "Must have secured at least 60% marks in the previous examination"
    ],
    amount: "₹48,000 per annum",
    amountRange: {
      min: 48000,
      max: 48000
    },
    deadline: "October 10, 2024",
    deadlineDate: "2024-10-10",
    requiredDocuments: [
      "Caste certificate",
      "Previous academic records",
      "Admission letter"
    ],
    applicationLink: "https://www.ongcindia.com",
    location: {
      type: "india"
    },
    financialAidType: ["full-tuition"],
    tags: ["SC/ST", "Community-based", "Private"],
    applicationStatus: "upcoming",
    popularity: 20000
  },

  // Women-Specific Scholarships
  {
    id: "9",
    name: "L'Oréal India For Young Women in Science Scholarship",
    provider: "L'Oréal India",
    type: "private",
    category: "Women in Science",
    degree: "both",
    gender: "female",
    fieldOfStudy: ["Science", "Technology", "Engineering", "Mathematics"],
    eligibilityCriteria: [
      "Must be a female student",
      "Must be pursuing B.Sc./M.Sc. degree in Science, Technology, Engineering, or Mathematics (STEM)",
      "Must have secured at least 85% marks in the previous examination"
    ],
    amount: "₹2,50,000 per year",
    amountRange: {
      min: 2500000,
      max: 2500000
    },
    deadline: "April 30, 2024",
    deadlineDate: "2024-04-30",
    requiredDocuments: [
      "Academic transcripts",
      "Admission letter",
      "Statement of purpose",
      "Proof of gender"
    ],
    applicationLink: "https://www.loreal.com",
    location: {
      type: "india"
    },
    financialAidType: ["full-tuition"],
    tags: ["Women", "Merit-based", "Private"],
    applicationStatus: "upcoming",
    popularity: 10000
  },

  // Region-Specific Scholarships
  {
    id: "10",
    name: "Swami Vivekananda Merit-cum-Means Scholarship",
    provider: "Government of West Bengal",
    type: "government",
    category: "West Bengal residents",
    degree: "both",
    gender: "all",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Must be a resident of West Bengal",
      "Must have secured at least 50% marks in the previous examination",
      "Must be pursuing undergraduate, postgraduate, or professional courses"
    ],
    amount: "Up to ₹10,000 per annum",
    amountRange: {
      min: 0,
      max: 10000
    },
    deadline: "October 31, 2024",
    deadlineDate: "2024-10-31",
    requiredDocuments: [
      "Academic records",
      "Income certificate",
      "Identity proof"
    ],
    applicationLink: "https://wbhed.gov.in",
    location: {
      type: "india"
    },
    financialAidType: ["full-tuition"],
    tags: ["West Bengal", "Merit-based", "Government"],
    applicationStatus: "upcoming",
    popularity: 5000
  },

  // Subject-Specific Scholarships
  {
    id: "11",
    name: "Dr. Reddy's Foundation Scholarship",
    provider: "Dr. Reddy's Foundation",
    type: "private",
    category: "Medical/Healthcare",
    degree: "both",
    gender: "all",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Must be pursuing a medical or healthcare-related degree",
      "Must have demonstrated financial need"
    ],
    amount: "Varies based on financial need",
    amountRange: {
      min: 0,
      max: null
    },
    deadline: "March 31, 2024",
    deadlineDate: "2024-03-31",
    requiredDocuments: [
      "Academic records",
      "Income certificate",
      "Admission letter"
    ],
    applicationLink: "https://www.drfoundation.org",
    location: {
      type: "india"
    },
    financialAidType: ["full-tuition"],
    tags: ["Medical/Healthcare", "Need-based", "Private"],
    applicationStatus: "upcoming",
    popularity: 30000
  }
];
