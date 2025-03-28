import { AchievementsSection } from "@/components/community/achievements/AchievementsSection";

export const metadata = {
  title: "Achievements - Student Community",
  description: "Celebrate student achievements, awards, and milestones. Share success stories and inspire others in our community.",
};

export default function AchievementsPage() {
  return (
    <main className="min-h-screen">
      <AchievementsSection />
    </main>
  );
} 