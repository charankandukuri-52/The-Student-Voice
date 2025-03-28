import MentalHealthSection from "@/components/mental-health/MentalHealthSection";

export const metadata = {
  title: "Mental Health - Student Support Platform",
  description: "Access mental health resources, counseling services, and support programs for students.",
};

export default function MentalHealthPage() {
  return (
    <main className="min-h-screen">
      <MentalHealthSection />
    </main>
  );
} 