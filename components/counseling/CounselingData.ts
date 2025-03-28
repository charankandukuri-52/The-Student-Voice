export interface Counseling {
  id: string;
  name: string;
  provider: string;
  type: 'individual' | 'group' | 'crisis' | 'academic';
  specialization: string[];
  description: string;
  counselor: {
    name: string;
    credentials: string;
    experience: string;
    rating: number;
    reviews: number;
  };
  availability: {
    type: 'morning' | 'afternoon' | 'evening' | 'weekend';
    schedule: string[];
    nextAvailable: string;
  };
  location: {
    type: 'on-campus' | 'online' | 'hybrid';
    address?: string;
    room?: string;
    meetingLink?: string;
  };
  price: {
    amount: string;
    range: {
      min: number;
      max: number | null;
    };
    insurance?: string[];
  };
  duration: string;
  frequency: string;
  maxParticipants?: number;
  currentParticipants?: number;
  requiredDocuments: string[];
  bookingLink: string;
  tags: string[];
  availabilityStatus: 'available' | 'waitlist' | 'unavailable';
  popularity: number;
  languages: string[];
  emergencyContact?: string;
  cancellationPolicy?: string;
}

export const MOCK_COUNSELING: Counseling[] = [
  {
    id: "1",
    name: "Individual Counseling Sessions",
    provider: "University Counseling Center",
    type: "individual",
    specialization: ["anxiety", "depression", "academic", "relationships"],
    description: "One-on-one counseling sessions with experienced mental health professionals to address personal challenges and develop coping strategies.",
    counselor: {
      name: "Dr. Sarah Johnson",
      credentials: "Ph.D. in Clinical Psychology",
      experience: "15 years of experience in student counseling",
      rating: 4.8,
      reviews: 156
    },
    availability: {
      type: "afternoon",
      schedule: ["Monday-Friday: 2PM-6PM"],
      nextAvailable: "2024-03-29T14:00:00Z"
    },
    location: {
      type: "on-campus",
      address: "Student Wellness Center",
      room: "Room 301"
    },
    price: {
      amount: "Free for enrolled students",
      range: {
        min: 0,
        max: 0
      }
    },
    duration: "50 minutes",
    frequency: "Weekly or bi-weekly",
    requiredDocuments: [
      "Student ID",
      "Insurance card (if applicable)",
      "Previous counseling records (if any)"
    ],
    bookingLink: "/book-counseling/1",
    tags: ["Individual", "On-campus", "Free", "Professional"],
    availabilityStatus: "available",
    popularity: 950,
    languages: ["English", "Hindi"]
  },
  {
    id: "2",
    name: "Stress Management Group Therapy",
    provider: "Student Wellness Services",
    type: "group",
    specialization: ["anxiety", "academic"],
    description: "Join a supportive group of students to learn and practice stress management techniques, mindfulness, and coping strategies.",
    counselor: {
      name: "Dr. Rajesh Kumar",
      credentials: "M.S. in Counseling Psychology",
      experience: "8 years of experience in group therapy",
      rating: 4.6,
      reviews: 89
    },
    availability: {
      type: "evening",
      schedule: ["Tuesday & Thursday: 5PM-6:30PM"],
      nextAvailable: "2024-03-26T17:00:00Z"
    },
    location: {
      type: "hybrid",
      address: "Student Center",
      room: "Room 205",
      meetingLink: "https://meet.example.com/stress-management"
    },
    price: {
      amount: "₹500 per session",
      range: {
        min: 500,
        max: 500
      },
      insurance: ["Student Insurance"]
    },
    duration: "90 minutes",
    frequency: "Twice weekly",
    maxParticipants: 12,
    currentParticipants: 8,
    requiredDocuments: [
      "Student ID",
      "Consent form",
      "Group therapy agreement"
    ],
    bookingLink: "/book-counseling/2",
    tags: ["Group", "Hybrid", "Stress Management", "Mindfulness"],
    availabilityStatus: "available",
    popularity: 750,
    languages: ["English", "Hindi", "Tamil"]
  },
  {
    id: "3",
    name: "24/7 Crisis Intervention",
    provider: "Emergency Counseling Services",
    type: "crisis",
    specialization: ["crisis", "trauma"],
    description: "Immediate support and intervention for students experiencing mental health crises or emergencies.",
    counselor: {
      name: "Emergency Response Team",
      credentials: "Licensed Crisis Counselors",
      experience: "24/7 crisis intervention specialists",
      rating: 4.9,
      reviews: 234
    },
    availability: {
      type: "morning",
      schedule: ["24/7 Emergency Service"],
      nextAvailable: "Immediate"
    },
    location: {
      type: "online",
      meetingLink: "https://crisis.example.com/emergency"
    },
    price: {
      amount: "Free emergency service",
      range: {
        min: 0,
        max: 0
      }
    },
    duration: "As needed",
    frequency: "24/7",
    requiredDocuments: [
      "Student ID (if possible)",
      "Emergency contact information"
    ],
    bookingLink: "/emergency-counseling",
    tags: ["Crisis", "Emergency", "24/7", "Free"],
    availabilityStatus: "available",
    popularity: 1200,
    languages: ["English", "Hindi", "Multiple regional languages"],
    emergencyContact: "1800-XXX-XXXX"
  }
]; 