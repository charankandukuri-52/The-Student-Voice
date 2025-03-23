import { Metadata } from "next";
import { ScholarshipsSection } from "@/components/scholarships/ScholarshipsSection";

export const metadata: Metadata = {
  title: "Scholarships - TSV",
  description: "Explore government, private, and international scholarships available for Indian students.",
};

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Available Scholarships
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Explore government, private, and international scholarships available for Indian students.
          </p>
        </div>
        <ScholarshipsSection />
      </div>
    </main>
  );
} 