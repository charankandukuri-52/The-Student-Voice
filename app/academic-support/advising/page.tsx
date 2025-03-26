import { Metadata } from "next";
import AcademicAdvisingSection from "@/components/academic-support/advising/AcademicAdvisingSection";

export const metadata: Metadata = {
  title: "Academic Advising | Academic Support",
  description: "Connect with experienced academic advisors to help you plan your academic journey, choose courses, and prepare for your career.",
};

export default function AcademicAdvisingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Academic Advising</h1>
        <p className="text-lg text-muted-foreground">
          Get personalized guidance from experienced academic advisors to help you make informed decisions about your education and career path.
        </p>
      </div>
      <AcademicAdvisingSection />
    </div>
  );
} 