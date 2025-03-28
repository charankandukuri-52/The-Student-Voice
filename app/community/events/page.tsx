import { EventsSection } from "@/components/community/events/EventsSection";

export const metadata = {
  title: "Events & Activities - Student Community",
  description: "Participate in workshops, seminars, social gatherings, and skill development sessions. Join our vibrant community events and activities.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <EventsSection />
    </main>
  );
} 