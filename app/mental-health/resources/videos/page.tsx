import { VideoResourcesSection } from "@/components/mental-health/resources/videos/VideoResourcesSection";

export const metadata = {
  title: "Video Resources - Mental Health Resources",
  description: "Access educational videos, recorded workshops, guided relaxation sessions, and mental health awareness content.",
};

export default function VideoResourcesPage() {
  return (
    <main className="min-h-screen">
      <VideoResourcesSection />
    </main>
  );
} 