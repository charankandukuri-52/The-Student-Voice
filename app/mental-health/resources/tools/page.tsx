import { MentalHealthToolsSection } from "@/components/mental-health/resources/tools/MentalHealthToolsSection";

export const metadata = {
  title: "Mental Health Tools - Mental Health Resources",
  description: "Access digital tools and applications designed to support your mental well-being journey.",
};

export default function MentalHealthToolsPage() {
  return (
    <main className="min-h-screen">
      <MentalHealthToolsSection />
    </main>
  );
} 