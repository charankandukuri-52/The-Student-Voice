import { WellnessSection } from "@/components/community/wellness/WellnessSection";

export const metadata = {
  title: "Wellness - Student Community",
  description: "Focus on physical and mental well-being. Access fitness challenges, mental health support, stress management resources, and work-life balance tips.",
};

export default function WellnessPage() {
  return (
    <main className="min-h-screen">
      <WellnessSection />
    </main>
  );
} 