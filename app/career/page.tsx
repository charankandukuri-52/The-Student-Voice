"use client"
import { CareerGuidanceSection } from "@/components/career/CareerGuidanceSection";

export const metadata = {
  title: "Career Guidance - Student Voice",
  description: "Access comprehensive career guidance resources, job opportunities, and professional development tools to help you plan and advance your career.",
};

export default function CareerGuidancePage() {
  return (
    <main className="min-h-screen">
      <CareerGuidanceSection />
    </main>
  );
} 