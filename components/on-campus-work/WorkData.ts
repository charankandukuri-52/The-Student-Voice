import { UNIVERSITIES } from "./work-filters";

export interface Work {
  id: string;
  name: string;
  department: string;
  university: typeof UNIVERSITIES[number];
  type: "teaching" | "research" | "administrative" | "library" | "lab";
  degree: "undergraduate" | "postgraduate" | "phd";
  gender: "female only" | "male only" | "all";
  fieldOfStudy: "engineering" | "medical" | "arts" | "science" | "commerce" | "all fields";
  eligibilityCriteria: string[];
  stipend: string;
  stipendRange: [number, number];
  deadline: string;
  deadlineDate: Date;
  requiredDocuments: string[];
  applicationLink: string;
  location: "india" | "abroad";
  workStatus: "part time" | "full time";
  tags: string[];
  applicationStatus: "open" | "closed";
  popularity: number;
  hoursPerWeek?: string;
  instituteType?: string;
}

// Helper function to convert date string to ISO format
const toISODate = (dateStr: string) => new Date(dateStr).toISOString();

export const MOCK_WORK: Work[] = [
  {
    id: "1",
    name: "Computer Science Teaching Assistant",
    department: "Computer Science and Engineering",
    university: "iit bombay",
    type: "teaching",
    degree: "undergraduate",
    gender: "all",
    fieldOfStudy: "engineering",
    eligibilityCriteria: [
      "Currently enrolled in B.Tech program",
      "Minimum CGPA of 8.0",
      "Strong programming skills",
      "Good communication abilities"
    ],
    stipend: "₹15,000 per month",
    stipendRange: [15000, 15000],
    deadline: "March 15, 2024",
    deadlineDate: new Date("2024-03-15"),
    requiredDocuments: [
      "Updated CV",
      "Academic transcripts",
      "Letter of recommendation",
      "Statement of purpose"
    ],
    applicationLink: "https://example.com/apply/1",
    location: "india",
    workStatus: "part time",
    tags: ["Teaching", "Computer Science", "Part Time"],
    applicationStatus: "open",
    popularity: 85,
    hoursPerWeek: "20 hours/week"
  },
  {
    id: "2",
    name: "Mathematics Teaching Assistant",
    department: "Mathematics",
    university: "iit delhi",
    type: "teaching",
    degree: "postgraduate",
    gender: "all",
    fieldOfStudy: "science",
    eligibilityCriteria: [
      "Currently enrolled in M.Sc. or M.Tech program",
      "Minimum CGPA of 8.5",
      "Strong mathematical background",
      "Teaching experience preferred"
    ],
    stipend: "₹20,000 per month",
    stipendRange: [20000, 20000],
    deadline: "March 20, 2024",
    deadlineDate: new Date("2024-03-20"),
    requiredDocuments: [
      "Updated CV",
      "Academic transcripts",
      "Letter of recommendation",
      "Teaching portfolio"
    ],
    applicationLink: "https://example.com/apply/2",
    location: "india",
    workStatus: "part time",
    tags: ["Teaching", "Mathematics", "Part Time"],
    applicationStatus: "open",
    popularity: 78,
    hoursPerWeek: "20 hours/week"
  },
  {
    id: "3",
    name: "AI Research Assistant",
    department: "Computer Science and Engineering",
    university: "iit madras",
    type: "research",
    degree: "postgraduate",
    gender: "all",
    fieldOfStudy: "engineering",
    eligibilityCriteria: [
      "Currently enrolled in M.Tech or PhD program",
      "Minimum CGPA of 8.5",
      "Strong programming and AI/ML skills",
      "Research experience preferred"
    ],
    stipend: "₹25,000 per month",
    stipendRange: [25000, 25000],
    deadline: "March 25, 2024",
    deadlineDate: new Date("2024-03-25"),
    requiredDocuments: [
      "Updated CV",
      "Academic transcripts",
      "Research proposal",
      "Letter of recommendation"
    ],
    applicationLink: "https://example.com/apply/3",
    location: "india",
    workStatus: "full time",
    tags: ["Research", "AI/ML", "Full Time"],
    applicationStatus: "open",
    popularity: 92,
    hoursPerWeek: "40 hours/week"
  },
  {
    id: "4",
    name: "Student Affairs Office Assistant",
    department: "Student Affairs",
    university: "iit kanpur",
    type: "administrative",
    degree: "undergraduate",
    gender: "all",
    fieldOfStudy: "all fields",
    eligibilityCriteria: [
      "Currently enrolled in any program",
      "Minimum CGPA of 7.5",
      "Good organizational skills",
      "Excellent communication abilities"
    ],
    stipend: "₹12,000 per month",
    stipendRange: [12000, 12000],
    deadline: "March 30, 2024",
    deadlineDate: new Date("2024-03-30"),
    requiredDocuments: [
      "Updated CV",
      "Academic transcripts",
      "Letter of recommendation",
      "Statement of purpose"
    ],
    applicationLink: "https://example.com/apply/4",
    location: "india",
    workStatus: "part time",
    tags: ["Administrative", "Student Affairs", "Part Time"],
    applicationStatus: "open",
    popularity: 65,
    hoursPerWeek: "20 hours/week"
  },
  {
    id: "5",
    name: "Library Assistant",
    department: "Central Library",
    university: "iit kharagpur",
    type: "library",
    degree: "undergraduate",
    gender: "all",
    fieldOfStudy: "all fields",
    eligibilityCriteria: [
      "Currently enrolled in any program",
      "Minimum CGPA of 7.0",
      "Good organizational skills",
      "Basic computer knowledge"
    ],
    stipend: "₹10,000 per month",
    stipendRange: [10000, 10000],
    deadline: "April 5, 2024",
    deadlineDate: new Date("2024-04-05"),
    requiredDocuments: [
      "Updated CV",
      "Academic transcripts",
      "Letter of recommendation"
    ],
    applicationLink: "https://example.com/apply/5",
    location: "india",
    workStatus: "part time",
    tags: ["Library", "Administrative", "Part Time"],
    applicationStatus: "open",
    popularity: 55,
    hoursPerWeek: "20 hours/week"
  },
  {
    id: "6",
    name: "Physics Lab Assistant",
    department: "Physics",
    university: "iit roorkee",
    type: "lab",
    degree: "undergraduate",
    gender: "all",
    fieldOfStudy: "science",
    eligibilityCriteria: [
      "Currently enrolled in B.Tech or B.Sc. program",
      "Minimum CGPA of 7.5",
      "Strong physics background",
      "Lab experience preferred"
    ],
    stipend: "₹18,000 per month",
    stipendRange: [18000, 18000],
    deadline: "April 10, 2024",
    deadlineDate: new Date("2024-04-10"),
    requiredDocuments: [
      "Updated CV",
      "Academic transcripts",
      "Letter of recommendation",
      "Lab experience certificate"
    ],
    applicationLink: "https://example.com/apply/6",
    location: "india",
    workStatus: "part time",
    tags: ["Lab", "Physics", "Part Time"],
    applicationStatus: "open",
    popularity: 70,
    hoursPerWeek: "20 hours/week"
  }
]; 