import { PeerSupportSection } from "@/components/community/peer-support/PeerSupportSection";

export const metadata = {
  title: "Peer Support - Student Community",
  description: "Connect with peers for support and guidance. Join study groups, mentorship programs, and peer counseling sessions.",
};

export default function PeerSupportPage() {
  return (
    <main className="min-h-screen">
      <PeerSupportSection />
    </main>
  );
} 