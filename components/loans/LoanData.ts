export interface Loan {
  id: string;
  name: string;
  provider: string;
  type: 'government' | 'private' | 'international';
  category: string;
  degree: 'undergraduate' | 'postgraduate' | 'both' | 'phd';
  fieldOfStudy: string[];
  eligibilityCriteria: string[];
  amount: string;
  amountRange: {
    min: number;
    max: number | null;
  };
  interestRate: string;
  interestRateRange: {
    min: number;
    max: number | null;
  };
  tenure: string;
  tenureRange: {
    min: number;
    max: number | null;
  };
  requiredDocuments: string[];
  applicationLink: string;
  location: {
    type: 'india' | 'abroad' | 'both';
    specificRegion?: string;
  };
  loanType: ('education' | 'tuition' | 'living-expenses' | 'research')[];
  tags: string[];
  applicationStatus: 'open' | 'closed' | 'upcoming';
  popularity: number;
  incomeLimit?: number;
  instituteType?: string[];
  collateralRequired: boolean;
  coApplicantRequired: boolean;
  processingFee?: string;
  prepaymentCharges?: string;
}

export const MOCK_LOANS: Loan[] = [
  // Government Loans
  {
    id: "1",
    name: "Vidya Lakshmi Education Loan",
    provider: "Ministry of Finance",
    type: "government",
    category: "General",
    degree: "both",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Indian citizen",
      "Admitted to a recognized institution",
      "Family income should not exceed ₹4.5 lakh per annum",
      "Good academic record"
    ],
    amount: "Up to ₹10 lakhs",
    amountRange: {
      min: 0,
      max: 1000000
    },
    interestRate: "7.5% - 8.5%",
    interestRateRange: {
      min: 7.5,
      max: 8.5
    },
    tenure: "Up to 15 years",
    tenureRange: {
      min: 1,
      max: 15
    },
    requiredDocuments: [
      "Admission letter",
      "Academic records",
      "Income certificate",
      "Identity proof",
      "Bank account details"
    ],
    applicationLink: "https://www.vidyalakshmi.co.in",
    location: {
      type: "india"
    },
    loanType: ["education", "tuition", "living-expenses"],
    tags: ["Government", "Low Interest", "Need-based"],
    applicationStatus: "open",
    popularity: 85000,
    incomeLimit: 450000,
    collateralRequired: true,
    coApplicantRequired: true,
    processingFee: "₹500",
    prepaymentCharges: "2%"
  },
  {
    id: "2",
    name: "Central Sector Interest Subsidy Scheme",
    provider: "Ministry of Education",
    type: "government",
    category: "General",
    degree: "undergraduate",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Family income should not exceed ₹4.5 lakh per annum",
      "Must be pursuing undergraduate studies",
      "Must have secured admission to a recognized institution"
    ],
    amount: "Up to ₹10 lakhs",
    amountRange: {
      min: 0,
      max: 1000000
    },
    interestRate: "Subsidized rate",
    interestRateRange: {
      min: 0,
      max: 0
    },
    tenure: "Course duration + 1 year",
    tenureRange: {
      min: 1,
      max: 5
    },
    requiredDocuments: [
      "Admission letter",
      "Income certificate",
      "Academic records",
      "Bank loan sanction letter"
    ],
    applicationLink: "https://scholarships.gov.in",
    location: {
      type: "india"
    },
    loanType: ["education"],
    tags: ["Government", "Interest Subsidy", "Need-based"],
    applicationStatus: "open",
    popularity: 65000,
    incomeLimit: 450000,
    collateralRequired: true,
    coApplicantRequired: true
  },

  // Private Bank Loans
  {
    id: "3",
    name: "HDFC Credila Education Loan",
    provider: "HDFC Bank",
    type: "private",
    category: "General",
    degree: "both",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Indian resident",
      "Admitted to a recognized institution",
      "Good academic record",
      "Co-applicant with regular income"
    ],
    amount: "Up to ₹20 lakhs",
    amountRange: {
      min: 0,
      max: 2000000
    },
    interestRate: "8.5% - 11.5%",
    interestRateRange: {
      min: 8.5,
      max: 11.5
    },
    tenure: "Up to 15 years",
    tenureRange: {
      min: 1,
      max: 15
    },
    requiredDocuments: [
      "Admission letter",
      "Academic records",
      "Income proof",
      "Identity proof",
      "Bank statements"
    ],
    applicationLink: "https://www.hdfcbank.com",
    location: {
      type: "both"
    },
    loanType: ["education", "tuition", "living-expenses"],
    tags: ["Private Bank", "Flexible", "International"],
    applicationStatus: "open",
    popularity: 75000,
    collateralRequired: true,
    coApplicantRequired: true,
    processingFee: "₹1,000",
    prepaymentCharges: "3%"
  },
  {
    id: "4",
    name: "Axis Bank Education Loan",
    provider: "Axis Bank",
    type: "private",
    category: "General",
    degree: "both",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Indian citizen",
      "Admitted to a recognized institution",
      "Co-applicant with regular income",
      "Good academic record"
    ],
    amount: "Up to ₹15 lakhs",
    amountRange: {
      min: 0,
      max: 1500000
    },
    interestRate: "8.75% - 11.25%",
    interestRateRange: {
      min: 8.75,
      max: 11.25
    },
    tenure: "Up to 15 years",
    tenureRange: {
      min: 1,
      max: 15
    },
    requiredDocuments: [
      "Admission letter",
      "Academic records",
      "Income proof",
      "Identity proof",
      "Bank statements"
    ],
    applicationLink: "https://www.axisbank.com",
    location: {
      type: "both"
    },
    loanType: ["education", "tuition", "living-expenses"],
    tags: ["Private Bank", "Flexible", "International"],
    applicationStatus: "open",
    popularity: 70000,
    collateralRequired: true,
    coApplicantRequired: true,
    processingFee: "₹1,000",
    prepaymentCharges: "2%"
  },

  // International Loans
  {
    id: "5",
    name: "Prodigy Finance International Student Loan",
    provider: "Prodigy Finance",
    type: "international",
    category: "International Education",
    degree: "postgraduate",
    fieldOfStudy: ["All Fields"],
    eligibilityCriteria: [
      "Admitted to a partner institution",
      "International student",
      "Good academic record",
      "No co-signer required"
    ],
    amount: "Up to $50,000",
    amountRange: {
      min: 0,
      max: 50000
    },
    interestRate: "6.5% - 12.5%",
    interestRateRange: {
      min: 6.5,
      max: 12.5
    },
    tenure: "Up to 20 years",
    tenureRange: {
      min: 1,
      max: 20
    },
    requiredDocuments: [
      "Admission letter",
      "Academic records",
      "Identity proof",
      "Bank statements"
    ],
    applicationLink: "https://prodigyfinance.com",
    location: {
      type: "abroad"
    },
    loanType: ["education", "tuition", "living-expenses"],
    tags: ["International", "No Co-signer", "Flexible"],
    applicationStatus: "open",
    popularity: 45000,
    collateralRequired: false,
    coApplicantRequired: false,
    processingFee: "2%",
    prepaymentCharges: "None"
  }
]; 