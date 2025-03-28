import { DiscussionForumsSection } from "@/components/community/forums/DiscussionForumsSection";

export const metadata = {
  title: "Discussion Forums - Student Community",
  description: "Engage in meaningful conversations about academic topics, career guidance, student life, and resource sharing in our discussion forums.",
};

export default function DiscussionForumsPage() {
  return (
    <main className="min-h-screen">
      <DiscussionForumsSection />
    </main>
  );
} 