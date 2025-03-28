import { WellnessActivitiesSection } from "@/components/mental-health/resources/wellness/WellnessActivitiesSection";

export const metadata = {
  title: "Wellness Activities - Mental Health Resources",
  description: "Engage in interactive wellness activities, challenges, and exercises designed to support your mental well-being.",
};

export default function WellnessActivitiesPage() {
  return (
    <main className="min-h-screen">
      <WellnessActivitiesSection />
    </main>
  );
} 