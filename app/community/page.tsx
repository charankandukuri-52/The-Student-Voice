import { CommunitySection } from "@/components/community/CommunitySection";

export const metadata = {
  title: "Community - The Student Voice",
  description: "Connect with fellow students, share experiences, and engage in meaningful discussions. Access peer support, discussion forums, and community events.",
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      <CommunitySection />
    </main>
  );
} 