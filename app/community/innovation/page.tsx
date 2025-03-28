import { InnovationHubSection } from "@/components/community/innovation/InnovationHubSection";

export const metadata = {
  title: "Innovation Hub - Student Community",
  description: "Share and explore innovative ideas, showcase projects, and find collaboration opportunities in our Innovation Hub.",
};

export default function InnovationHubPage() {
  return (
    <main className="min-h-screen">
      <InnovationHubSection />
    </main>
  );
} 