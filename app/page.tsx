import { Suspense, lazy } from 'react';
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Loading from './loading';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto py-12 md:py-16 lg:py-24">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-6 text-center px-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                The Student Voice
              </h1>
              <p className="max-w-[42rem] text-muted-foreground sm:text-xl leading-relaxed">
                Your college journey is unique and transformative. We're here to help you navigate academic challenges,
                manage stress, and build meaningful connections while pursuing your educational goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="min-w-[140px]" asChild>
                  <Link href="/resources">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="min-w-[140px]" asChild>
                  <Link href="/support">Get Support</Link>
                </Button>
              </div>
            </div>

            <Suspense fallback={<Loading />}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 md:px-6">
                {SUPPORT_CARDS.map((card, index) => (
                  <Link href={card.href} key={index} className="transition-transform hover:scale-[1.02]">
                    <Card className="flex h-full flex-col">
                      <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{card.content}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}

const SUPPORT_CARDS = [
  {
    title: "Financial Aid",
    description: "Navigate funding opportunities",
    content: "Access scholarships, grants, and expert guidance on student loans and repayment plans.",
    href: "/financial-aid"
  },
  {
    title: "Academic Support",
    description: "Excel in your studies",
    content: "Get resources for course selection, study strategies, and academic planning.",
    href: "/academic-support"
  },
  {
    title: "Mental Health",
    description: "Support for your well-being",
    content: "Access counseling services, stress management techniques, and wellness resources.",
    href: "/mental-health"
  },
  {
    title: "Community Building",
    description: "Connect with peers",
    content: "Join student organizations and participate in campus events to build lasting relationships.",
    href: "/community"
  },
  {
    title: "Career Development",
    description: "Plan your future",
    content: "Explore internships, skill-building workshops, and placement preparation opportunities.",
    href: "/career"
  },
  {
    title: "Campus Safety",
    description: "Stay safe and informed",
    content: "Learn about safety resources, reporting procedures, and campus policies.",
    href: "/safety"
  }
];
