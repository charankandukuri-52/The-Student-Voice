import { Metadata } from "next";
import { TutoringSection } from "@/components/academic-support/tutoring/TutoringSection";

export const metadata: Metadata = {
  title: "Tutoring Services - TSV",
  description: "Access one-on-one and group tutoring sessions for various subjects.",
};

export default function TutoringPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Tutoring Services
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Get personalized academic support through one-on-one tutoring sessions, 
            group study sessions, and peer tutoring programs.
          </p>
        </div>
        <TutoringSection />
      </div>
    </main>
  );
} 