import { SelfHelpGuidesSection } from "@/components/mental-health/resources/self-help/SelfHelpGuidesSection";

export const metadata = {
  title: "Self-Help Guides - Mental Health Resources",
  description: "Access comprehensive self-help guides and materials for stress management, anxiety, depression, and sleep improvement.",
};

export default function SelfHelpGuidesPage() {
  return (
    <main className="min-h-screen">
      <SelfHelpGuidesSection />
    </main>
  );
} 