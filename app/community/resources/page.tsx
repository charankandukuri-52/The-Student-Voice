import { ResourcesSection } from "@/components/community/resources/ResourcesSection";

export const metadata = {
  title: "Resources - Student Community",
  description: "Access community-curated resources and guides. Find study materials, career resources, life skills guides, and external links.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <ResourcesSection />
    </main>
  );
} 