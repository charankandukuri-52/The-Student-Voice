import { StressManagementGuide } from "@/components/mental-health/resources/self-help/guides/StressManagementGuide";

export const metadata = {
  title: "Stress Management Techniques - Self-Help Guides",
  description: "Learn effective stress management techniques and coping strategies to improve your well-being.",
};

export default function StressManagementPage() {
  return (
    <main className="min-h-screen">
      <StressManagementGuide />
    </main>
  );
} 