import { Metadata } from "next";
import StudyResourcesSection from "@/components/academic-support/resources/StudyResourcesSection";

export const metadata: Metadata = {
  title: "Study Resources | Academic Support",
  description: "Access a comprehensive collection of study resources, guides, and materials to support your academic journey.",
};

export default function StudyResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Study Resources</h1>
        <p className="text-lg text-muted-foreground">
          Discover a wide range of study materials, guides, and interactive resources to enhance your learning experience.
        </p>
      </div>
      <StudyResourcesSection />
    </div>
  );
} 