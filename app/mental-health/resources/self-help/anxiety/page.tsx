import { AnxietyCopingGuide } from "@/components/mental-health/resources/self-help/guides/AnxietyCopingGuide";

export const metadata = {
  title: "Anxiety Coping Strategies - Self-Help Guides",
  description: "Learn effective strategies and techniques to manage anxiety and improve your mental well-being.",
};

export default function AnxietyCopingPage() {
  return (
    <main className="min-h-screen">
      <AnxietyCopingGuide />
    </main>
  );
} 