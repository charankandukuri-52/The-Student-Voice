import { JobOpportunitiesSection } from "@/components/career/jobs/JobOpportunitiesSection";

export const metadata = {
  title: "Job Opportunities - Student Voice",
  description: "Explore internships, research positions, and part-time job opportunities to kickstart your career journey.",
};

export default function JobOpportunitiesPage() {
  return (
    <main className="min-h-screen">
      <JobOpportunitiesSection />
    </main>
  );
} 