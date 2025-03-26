import { Metadata } from "next";
import { AcademicSupportNav } from "@/components/academic-support/AcademicSupportNav";

export const metadata: Metadata = {
  title: "Academic Support | The Student Voice",
  description: "Access comprehensive academic support services including tutoring, workshops, and resources to enhance your learning experience.",
};

export default function AcademicSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <AcademicSupportNav />
        {children}
      </div>
    </div>
  );
} 