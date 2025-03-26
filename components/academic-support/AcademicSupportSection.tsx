"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Brain, GraduationCap } from "lucide-react";
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

const ACADEMIC_SUPPORT_OPTIONS = [
  {
    title: "Tutoring Services",
    description: "One-on-one and group tutoring sessions",
    icon: BookOpen,
    details: [
      "Subject-specific tutoring",
      "Peer tutoring programs",
      "Online tutoring sessions",
      "Study group coordination",
    ],
    cta: "Find a Tutor",
    href: "/academic-support/tutoring",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
  },
  {
    title: "Study Resources",
    description: "Comprehensive learning materials and tools",
    icon: Brain,
    details: [
      "Digital library access",
      "Study guides and notes",
      "Practice tests and quizzes",
      "Research databases",
    ],
    cta: "Access Resources",
    href: "/academic-support/resources",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
  },
  {
    title: "Academic Advising",
    description: "Professional guidance for your academic journey",
    icon: Users,
    details: [
      "Course planning assistance",
      "Major selection guidance",
      "Academic progress tracking",
      "Career pathway planning",
    ],
    cta: "Meet an Advisor",
    href: "/academic-support/advising",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
  },
  {
    title: "Workshops & Training",
    description: "Skill development and academic enhancement programs",
    icon: GraduationCap,
    details: [
      "Study skills workshops",
      "Time management training",
      "Research methodology sessions",
      "Academic writing support",
    ],
    cta: "View Workshops",
    href: "/academic-support/workshops",
    gradient: "from-orange-500/20 to-amber-500/20",
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

export default function AcademicSupportSection() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {ACADEMIC_SUPPORT_OPTIONS.map((option) => (
        <motion.div key={option.title} variants={fadeInUp}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "p-3 rounded-lg bg-gradient-to-br",
                    option.gradient
                  )}
                >
                  <option.icon className={cn("w-6 h-6", option.iconClass)} />
                </div>
                <div>
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {option.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href={option.href}>
                <Button className="w-full">{option.cta}</Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
} 