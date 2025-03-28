"use client";

import { motion } from "framer-motion";
import { Book, Video, Activity, Brain } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const RESOURCE_OPTIONS = [
  {
    title: "Self-Help Guides",
    description: "Access comprehensive self-help guides and materials",
    icon: Book,
    details: [
      {
        text: "Stress management techniques",
        href: "/mental-health/resources/self-help/stress-management"
      },
      {
        text: "Anxiety coping strategies",
        href: "/mental-health/resources/self-help/anxiety"
      },
      {
        text: "Depression self-help resources",
        href: "/mental-health/resources/self-help/depression"
      },
      {
        text: "Sleep improvement guides",
        href: "/mental-health/resources/self-help/sleep"
      },
    ],
    cta: "View Guides",
    href: "/mental-health/resources/self-help",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
  },
  {
    title: "Video Resources",
    description: "Watch educational videos and guided sessions",
    icon: Video,
    details: [
      {
        text: "Mindfulness meditation series",
        href: "/mental-health/resources/videos/meditation"
      },
      {
        text: "Expert mental health talks",
        href: "/mental-health/resources/videos/expert-talks"
      },
      {
        text: "Guided relaxation sessions",
        href: "/mental-health/resources/videos/relaxation"
      },
      {
        text: "Mental health awareness content",
        href: "/mental-health/resources/videos/awareness"
      },
    ],
    cta: "Watch Videos",
    href: "/mental-health/resources/videos",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
  },
  {
    title: "Wellness Activities",
    description: "Engage in interactive wellness activities",
    icon: Activity,
    details: [
      {
        text: "Interactive exercises",
        href: "/mental-health/resources/wellness/exercises"
      },
      {
        text: "Wellness challenges",
        href: "/mental-health/resources/wellness/challenges"
      },
      {
        text: "Progress tracking",
        href: "/mental-health/resources/wellness/progress"
      },
      {
        text: "Personalized activities",
        href: "/mental-health/resources/wellness/personalized"
      },
    ],
    cta: "Start Activities",
    href: "/mental-health/resources/wellness",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
  },
  {
    title: "Mental Health Tools",
    description: "Access digital tools for mental well-being",
    icon: Brain,
    details: [
      {
        text: "Mood tracking tools",
        href: "/mental-health/resources/tools/mood-tracker"
      },
      {
        text: "Meditation apps",
        href: "/mental-health/resources/tools/meditation"
      },
      {
        text: "Stress assessment tools",
        href: "/mental-health/resources/tools/stress-assessment"
      },
      {
        text: "Wellness planners",
        href: "/mental-health/resources/tools/wellness-planner"
      },
    ],
    cta: "Explore Tools",
    href: "/mental-health/resources/tools",
    gradient: "from-orange-500/20 to-red-500/20",
    iconClass: "text-orange-500",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function MentalHealthResourcesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Mental Health Resources
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Access our comprehensive collection of mental health resources designed to support your well-being journey.
            From self-help guides to interactive tools, find what works best for you.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {RESOURCE_OPTIONS.map((option) => (
            <motion.div
              key={option.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      option.gradient
                    )}>
                      <option.icon className={cn(
                        "w-6 h-6",
                        option.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{option.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <ul className="space-y-3 mb-6">
                    {option.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={cn(
                          "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                          option.iconClass
                        )} />
                        <Link 
                          href={detail.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {detail.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                      size="lg"
                    >
                      <Link href={option.href}>{option.cta}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 