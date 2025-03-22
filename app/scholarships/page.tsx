import ScholarshipsSection from "@/components/scholarships/ScholarshipsSection";

export const metadata = {
  title: "Scholarships - Indian Government Scholarships",
  description: "Explore various government scholarships available for Indian students, including merit-based, need-based, and special category scholarships.",
};

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen">
      <ScholarshipsSection />
    </main>
  );
} 