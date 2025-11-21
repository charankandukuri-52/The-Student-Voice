import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Support | The Student Voice",
  description: "Access comprehensive academic support services including tutoring, workshops, and resources to enhance your learning experience.",
};

const services = [
  {
    title: "Tutoring Services",
    description: "Connect with experienced tutors for personalized academic support in various subjects.",
    href: "/academic-support/tutoring",
    icon: GraduationCap,
  },
  {
    title: "Study Resources",
    description: "Access a comprehensive collection of study materials, guides, and learning resources.",
    href: "/academic-support/resources",
    icon: BookOpen,
  },
  {
    title: "Academic Advising",
    description: "Get guidance from academic advisors to help you plan your educational journey.",
    href: "/academic-support/advising",
    icon: Users,
  },
  {
    title: "Workshops & Training",
    description: "Enhance your skills through interactive workshops and training programs.",
    href: "/academic-support/workshops",
    icon: Video,
  },
];

export default function AcademicSupportPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Academic Support</h1>
        <p className="text-lg text-muted-foreground">
          Access comprehensive academic support services to enhance your learning experience and achieve your educational goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Link key={service.href} href={service.href}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 