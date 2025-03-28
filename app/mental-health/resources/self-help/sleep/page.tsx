import { SleepImprovementGuide } from "@/components/mental-health/resources/self-help/guides/SleepImprovementGuide";

export const metadata = {
  title: "Sleep Improvement Guides - Mental Health Resources",
  description: "Learn effective strategies and techniques to improve your sleep quality and develop healthy sleep habits.",
};

export default function SleepImprovementPage() {
  return (
    <main className="min-h-screen">
      <SleepImprovementGuide />
    </main>
  );
} 