import { Metadata } from "next";
import WorkshopSection from "@/components/academic-support/workshops/WorkshopSection";

export const metadata: Metadata = {
  title: "Workshops & Training | Academic Support",
  description: "Enhance your skills and knowledge through our comprehensive workshops and training programs designed for students at all levels.",
};

export default function WorkshopsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Workshops & Training</h1>
        <p className="text-lg text-muted-foreground">
          Discover a wide range of workshops and training programs designed to help you develop new skills, advance your career, and achieve your academic goals.
        </p>
      </div>
      <WorkshopSection />
    </div>
  );
} 