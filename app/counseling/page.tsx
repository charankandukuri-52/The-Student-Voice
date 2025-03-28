import { Metadata } from "next";
import { CounselingSection } from "@/components/counseling/CounselingSection";

export const metadata: Metadata = {
  title: "Counseling Services - TSV",
  description: "Access professional mental health counseling services and support programs for students.",
};

export default function CounselingPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Counseling Services
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Access professional mental health counseling services and support programs designed to help you thrive during your academic journey.
          </p>
        </div>
        <CounselingSection />
      </div>
    </main>
  );
} 