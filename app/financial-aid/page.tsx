import FinancialAidSection from "@/components/financial-aid/FinancialAidSection";

export const metadata = {
  title: "Financial Aid - Student Support Platform",
  description: "Explore various financial aid options including scholarships, student loans, and on-campus work opportunities.",
};

export default function FinancialAidPage() {
  return (
    <main className="min-h-screen">
      <FinancialAidSection />
    </main>
  );
} 