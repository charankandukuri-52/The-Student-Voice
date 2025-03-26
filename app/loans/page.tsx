import { Metadata } from "next";
import { LoansSection } from "../../components/loans/LoansSection";

export const metadata: Metadata = {
  title: "Student Loans - TSV",
  description: "Explore various student loan options including government-backed and private bank loans for Indian students.",
};

export default function LoansPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Student Loan Options
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Explore various student loan options including government-backed and private bank loans for Indian students.
          </p>
        </div>
        <LoansSection />
      </div>
    </main>
  );
} 