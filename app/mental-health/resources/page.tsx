import { MentalHealthResourcesSection } from "@/components/mental-health/resources/MentalHealthResourcesSection";

export const metadata = {
  title: "Mental Health Resources - Student Support",
  description: "Access comprehensive mental health resources including self-help guides, video resources, and wellness activities.",
};

export default function MentalHealthResourcesPage() {
  return (
    <main className="min-h-screen">
      <MentalHealthResourcesSection />
    </main>
  );
} 