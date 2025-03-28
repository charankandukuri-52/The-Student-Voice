"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Heart, Scale, Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const WELLNESS_PROGRAMS = [
  {
    title: "Fitness Challenges",
    description: "Stay active and healthy with community fitness programs",
    icon: Activity,
    href: "/community/wellness/fitness",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
    programs: [
      {
        title: "30-Day Workout Challenge",
        participants: 120,
        duration: "30 days",
        level: "All Levels",
        status: "Active",
      },
      {
        title: "Campus Run Club",
        participants: 85,
        duration: "Ongoing",
        level: "Intermediate",
        status: "Active",
      },
      {
        title: "Yoga & Meditation",
        participants: 60,
        duration: "Weekly",
        level: "Beginner",
        status: "Active",
      },
    ],
  },
  {
    title: "Mental Health Support",
    description: "Access resources and support for mental well-being",
    icon: Brain,
    href: "/community/wellness/mental-health",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
    programs: [
      {
        title: "Stress Management",
        participants: 90,
        duration: "Weekly",
        level: "All Levels",
        status: "Active",
      },
      {
        title: "Anxiety Support Group",
        participants: 45,
        duration: "Bi-weekly",
        level: "All Levels",
        status: "Active",
      },
      {
        title: "Mindfulness Sessions",
        participants: 75,
        duration: "Weekly",
        level: "Beginner",
        status: "Active",
      },
    ],
  },
  {
    title: "Work-Life Balance",
    description: "Learn strategies for maintaining a healthy work-life balance",
    icon: Scale,
    href: "/community/wellness/work-life",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
    programs: [
      {
        title: "Time Management",
        participants: 100,
        duration: "Monthly",
        level: "All Levels",
        status: "Active",
      },
      {
        title: "Productivity Workshop",
        participants: 55,
        duration: "Weekly",
        level: "Intermediate",
        status: "Active",
      },
      {
        title: "Study-Life Balance",
        participants: 80,
        duration: "Bi-weekly",
        level: "All Levels",
        status: "Active",
      },
    ],
  },
  {
    title: "Emotional Well-being",
    description: "Focus on emotional health and personal growth",
    icon: Heart,
    href: "/community/wellness/emotional",
    gradient: "from-orange-500/20 to-red-500/20",
    iconClass: "text-orange-500",
    programs: [
      {
        title: "Emotional Intelligence",
        participants: 70,
        duration: "Weekly",
        level: "All Levels",
        status: "Active",
      },
      {
        title: "Self-Care Workshop",
        participants: 50,
        duration: "Monthly",
        level: "Beginner",
        status: "Active",
      },
      {
        title: "Resilience Training",
        participants: 65,
        duration: "Bi-weekly",
        level: "Intermediate",
        status: "Active",
      },
    ],
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

export function WellnessSection() {
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
            Wellness Programs
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Take care of your physical and mental well-being with our comprehensive
            wellness programs. Join fitness challenges, mental health support groups,
            and work-life balance workshops.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search programs..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Program
            </Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {WELLNESS_PROGRAMS.map((program) => (
            <motion.div
              key={program.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      program.gradient
                    )}>
                      <program.icon className={cn(
                        "w-6 h-6",
                        program.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{program.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Available Programs</h3>
                      <ul className="space-y-4">
                        {program.programs.map((item, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{item.title}</span>
                              <span className={cn(
                                "text-sm px-2 py-1 rounded-full",
                                item.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                              )}>
                                {item.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{item.participants} participants</span>
                              <span>•</span>
                              <span>{item.duration}</span>
                              <span>•</span>
                              <span>{item.level}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href={program.href}>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                        size="lg"
                      >
                        View Programs
                      </Button>
                    </Link>
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