import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/loading";

// This will be moved to a separate data file in a real application
const SECTION_DATA = {
  "financial-aid": {
    title: "Financial Aid Resources",
    description: "Navigate your educational funding journey with confidence.",
    content: [
      {
        title: "Scholarships",
        description: "Find and apply for scholarships that match your profile.",
      },
      {
        title: "Student Loans",
        description: "Understand different loan types and repayment options.",
      },
      {
        title: "Financial Planning",
        description: "Tools and resources for managing your educational expenses.",
      },
    ],
  },
  "academic-support": {
    title: "Academic Support Services",
    description: "Resources to help you excel in your studies.",
    content: [
      {
        title: "Study Skills",
        description: "Develop effective study habits and time management skills.",
      },
      {
        title: "Tutoring",
        description: "Connect with peer tutors and academic support services.",
      },
      {
        title: "Course Planning",
        description: "Get guidance on course selection and academic requirements.",
      },
    ],
  },
  "mental-health": {
    title: "Mental Health Support",
    description: "Resources for your mental well-being.",
    content: [
      {
        title: "Counseling Services",
        description: "Access professional counseling and support services.",
      },
      {
        title: "Stress Management",
        description: "Learn techniques for managing academic stress.",
      },
      {
        title: "Crisis Support",
        description: "24/7 crisis support and emergency resources.",
      },
    ],
  },
  "community": {
    title: "Student Community",
    description: "Connect with your peers and build lasting relationships.",
    content: [
      {
        title: "Student Organizations",
        description: "Join clubs and organizations that match your interests.",
      },
      {
        title: "Events Calendar",
        description: "Stay updated on campus events and activities.",
      },
      {
        title: "Peer Support",
        description: "Connect with peer mentors and support groups.",
      },
    ],
  },
  "career": {
    title: "Career Development",
    description: "Prepare for your future career success.",
    content: [
      {
        title: "Career Counseling",
        description: "Get guidance on career planning and development.",
      },
      {
        title: "Job Search",
        description: "Access job boards and internship opportunities.",
      },
      {
        title: "Resume Building",
        description: "Resources for creating effective resumes and portfolios.",
      },
    ],
  },
  "safety": {
    title: "Campus Safety",
    description: "Resources for maintaining a safe campus environment.",
    content: [
      {
        title: "Emergency Services",
        description: "Access emergency contacts and safety procedures.",
      },
      {
        title: "Reporting System",
        description: "Report incidents and safety concerns.",
      },
      {
        title: "Safety Tips",
        description: "Learn about campus safety best practices.",
      },
    ],
  },
};

export default function SectionPage({ params }: { params: { section: string } }) {
  const sectionData = SECTION_DATA[params.section as keyof typeof SECTION_DATA];

  if (!sectionData) {
    notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            {sectionData.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {sectionData.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectionData.content.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
} 