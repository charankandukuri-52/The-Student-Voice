import { DepressionSelfHelpGuide } from "@/components/mental-health/resources/self-help/guides/DepressionSelfHelpGuide";

export const metadata = {
  title: "Depression Self-Help Resources - Mental Health Resources",
  description: "Access comprehensive self-help resources and strategies for managing depression and improving mental well-being.",
};

export default function DepressionSelfHelpPage() {
  return (
    <main className="min-h-screen">
      <DepressionSelfHelpGuide />
    </main>
  );
} 