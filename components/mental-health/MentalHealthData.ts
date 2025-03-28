import { type CategoryType } from "./mental-health-filters";

export interface MentalHealthService {
  id: string;
  name: string;
  provider: string;
  type: 'counseling' | 'wellness' | 'support-group';
  category: CategoryType;
  description: string;
  facilitator: {
    name: string;
    credentials: string;
    experience: string;
    rating: number;
    reviews: number;
  };
  schedule: {
    type: 'weekly' | 'bi-weekly' | 'monthly' | 'on-demand';
    days: string[];
    time: string;
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
  maxParticipants?: number;
  currentParticipants?: number;
  requiredDocuments: string[];
  registrationLink: string;
  tags: string[];
  availabilityStatus: 'available' | 'waitlist' | 'unavailable';
  popularity: number;
  languages: string[];
  emergencyContact?: string;
  cancellationPolicy?: string;
}

export const MOCK_MENTAL_HEALTH: MentalHealthService[] = [
  {
    id: "1",
    name: "Mindfulness Meditation Sessions",
    provider: "Student Wellness Center",
    type: "wellness",
    category: "Mindfulness",
    description: "Learn and practice mindfulness meditation techniques to reduce stress and improve mental well-being.",
    facilitator: {
      name: "Dr. Priya Sharma",
      credentials: "Ph.D. in Clinical Psychology",
      experience: "12 years of experience in mindfulness training",
      rating: 4.9,
      reviews: 128
    },
    schedule: {
      type: "weekly",
      days: ["Monday", "Wednesday", "Friday"],
      time: "10:00 AM - 11:00 AM",
      nextAvailable: "2024-03-29T10:00:00Z"
    },
    location: {
      type: "hybrid",
      address: "Student Wellness Center",
      room: "Room 201",
      meetingLink: "https://meet.example.com/mindfulness"
    },
    price: {
      amount: "Free for enrolled students",
      range: {
        min: 0,
        max: 0
      }
    },
    duration: "60 minutes",
    requiredDocuments: [
      "Student ID",
      "Registration form"
    ],
    registrationLink: "/register/wellness/1",
    tags: ["Mindfulness", "Meditation", "Stress Relief", "Free"],
    availabilityStatus: "available",
    popularity: 850,
    languages: ["English", "Hindi"]
  },
  {
    id: "2",
    name: "Peer Support Group for Academic Stress",
    provider: "Student Support Services",
    type: "support-group",
    category: "Academic Support",
    description: "Join a supportive group of students to share experiences and learn coping strategies for academic stress.",
    facilitator: {
      name: "Dr. Amit Patel",
      credentials: "M.S. in Counseling Psychology",
      experience: "8 years of experience in group facilitation",
      rating: 4.7,
      reviews: 95
    },
    schedule: {
      type: "bi-weekly",
      days: ["Tuesday"],
      time: "4:00 PM - 5:30 PM",
      nextAvailable: "2024-03-26T16:00:00Z"
    },
    location: {
      type: "on-campus",
      address: "Student Center",
      room: "Room 305"
    },
    price: {
      amount: "₹200 per session",
      range: {
        min: 200,
        max: 200
      },
      insurance: ["Student Insurance"]
    },
    duration: "90 minutes",
    maxParticipants: 15,
    currentParticipants: 10,
    requiredDocuments: [
      "Student ID",
      "Consent form",
      "Group agreement"
    ],
    registrationLink: "/register/support/2",
    tags: ["Peer Support", "Academic Stress", "Group Therapy"],
    availabilityStatus: "available",
    popularity: 650,
    languages: ["English", "Hindi", "Gujarati"]
  },
  {
    id: "3",
    name: "Yoga for Mental Wellness",
    provider: "Campus Recreation",
    type: "wellness",
    category: "Physical Wellness",
    description: "Practice yoga poses and breathing techniques to improve mental and physical well-being.",
    facilitator: {
      name: "Yoga Master Rajesh",
      credentials: "Certified Yoga Instructor",
      experience: "15 years of experience in yoga instruction",
      rating: 4.8,
      reviews: 156
    },
    schedule: {
      type: "weekly",
      days: ["Monday", "Thursday"],
      time: "6:00 PM - 7:00 PM",
      nextAvailable: "2024-03-28T18:00:00Z"
    },
    location: {
      type: "on-campus",
      address: "Campus Recreation Center",
      room: "Yoga Studio"
    },
    price: {
      amount: "₹300 per month",
      range: {
        min: 300,
        max: 300
      }
    },
    duration: "60 minutes",
    requiredDocuments: [
      "Student ID",
      "Health declaration form",
      "Yoga waiver"
    ],
    registrationLink: "/register/wellness/3",
    tags: ["Yoga", "Physical Wellness", "Stress Relief"],
    availabilityStatus: "available",
    popularity: 750,
    languages: ["English", "Hindi", "Sanskrit"]
  }
]; 