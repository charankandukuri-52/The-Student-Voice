export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  type: 'government' | 'private' | 'international';
  category: string;
  eligibilityCriteria: string[];
  amount: string;
  deadline: string;
  requiredDocuments: string[];
  applicationLink: string;
}

export const MOCK_SCHOLARSHIPS: Scholarship[] = [
  {
    id: "1",
    name: "Post Matric Scholarship for SC Students",
    provider: "Ministry of Social Justice and Empowerment",
    type: "government",
    category: "SC Category",
    eligibilityCriteria: [
      "Must belong to Scheduled Caste category",
      "Family income should not exceed ₹2.5 lakh per annum",
      "Must be pursuing post-matriculation studies",
      "Must have secured at least 60% marks in previous examination"
    ],
    amount: "Course fees + Maintenance allowance up to ₹1,200 per month",
    deadline: "October 31, 2024",
    requiredDocuments: [
      "Caste certificate",
      "Income certificate",
      "Previous year marksheet",
      "Domicile certificate",
      "Bank account details"
    ],
    applicationLink: "https://scholarships.gov.in"
  },
  {
    id: "2",
    name: "Prime Minister's Scholarship Scheme",
    provider: "Ministry of Defence",
    type: "government",
    category: "Defence",
    eligibilityCriteria: [
      "Wards/widows of ex-servicemen/ex-coast guards",
      "Must be pursuing first professional degree course",
      "Must have secured admission through regular process"
    ],
    amount: "₹48,000 per annum for boys and ₹60,000 per annum for girls",
    deadline: "September 15, 2024",
    requiredDocuments: [
      "Ex-servicemen/widow identity card",
      "Student's identity proof",
      "Previous academic records",
      "Admission letter",
      "Fee structure of the course"
    ],
    applicationLink: "https://www.ksb.gov.in"
  },
  {
    id: "3",
    name: "Tata Scholarship for Cornell University",
    provider: "Tata Education and Development Trust",
    type: "private",
    category: "International Education",
    eligibilityCriteria: [
      "Must be an Indian citizen",
      "Must have received admission to Cornell University",
      "Demonstrate financial need",
      "Strong academic record"
    ],
    amount: "Full tuition coverage + living expenses",
    deadline: "March 1, 2024",
    requiredDocuments: [
      "Admission letter from Cornell",
      "Financial documents",
      "Academic transcripts",
      "Statement of purpose",
      "Letters of recommendation"
    ],
    applicationLink: "https://www.cornell.edu/tata-scholarship"
  }
]; 