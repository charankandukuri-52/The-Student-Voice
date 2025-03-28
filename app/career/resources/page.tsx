import { CareerResourcesSection } from "@/components/career/resources/CareerResourcesSection";

export const metadata = {
  title: "Career Resources - Student Voice",
  description: "Access comprehensive career planning and development resources including assessment tools, resume guides, and interview preparation materials.",
};

export default function CareerResourcesPage() {
  return (
    <main className="min-h-screen">
      <CareerResourcesSection />
    </main>
  );
} 