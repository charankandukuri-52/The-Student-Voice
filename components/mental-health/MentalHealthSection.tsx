"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Users, BookOpen, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MENTAL_HEALTH_SECTIONS = [
  {
    title: "Professional Counseling",
    description: "Connect with licensed counselors and mental health professionals",
    icon: Brain,
    link: "/counseling",
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconClass: "text-blue-500",
    features: [
      "One-on-one counseling sessions",
      "Group therapy options",
      "Crisis support",
      "Specialized counseling",
    ],
  },
  {
    title: "Peer Support Groups",
    description: "Join supportive communities and share experiences with peers",
    icon: Users,
    link: "/community/peer-support",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
    features: [
      "Student-led support groups",
      "Topic-specific discussions",
      "Anonymous sharing",
      "Regular meetups",
    ],
  },
  {
    title: "Self-Help Resources",
    description: "Access guides, tools, and techniques for self-improvement",
    icon: BookOpen,
    link: "/mental-health/resources",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
    features: [
      "Self-help guides",
      "Meditation resources",
      "Stress management tips",
      "Wellness worksheets",
    ],
  },
  {
    title: "Wellness Events",
    description: "Participate in workshops and activities for mental well-being",
    icon: Calendar,
    link: "/community/wellness",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconClass: "text-orange-500",
    features: [
      "Mindfulness workshops",
      "Yoga sessions",
      "Art therapy",
      "Wellness challenges",
    ],
  },
  {
    title: "Crisis Support",
    description: "Immediate help and resources for mental health emergencies",
    icon: Heart,
    link: "/mental-health/crisis-support",
    gradient: "from-red-500/20 to-rose-500/20",
    iconClass: "text-red-500",
    features: [
      "24/7 helpline",
      "Emergency contacts",
      "Crisis resources",
      "Safety planning",
    ],
  },
  {
    title: "Community Forums",
    description: "Engage in discussions and share experiences with others",
    icon: MessageSquare,
    link: "/community/forums",
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconClass: "text-cyan-500",
    features: [
      "Topic-based discussions",
      "Anonymous posting",
      "Moderated spaces",
      "Resource sharing",
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

export default function MentalHealthSection() {
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
            Mental Health Support
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Access comprehensive mental health resources, professional counseling,
            peer support, and wellness activities to support your well-being.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {MENTAL_HEALTH_SECTIONS.map((section) => (
            <motion.div
              key={section.title}
              variants={fadeInUp}
              className="flex"
            >
              <Link href={section.link} className="w-full">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className={cn(
                        "p-3 rounded-xl bg-gradient-to-br",
                        section.gradient
                      )}>
                        <section.icon className={cn("w-6 h-6", section.iconClass)} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-semibold">{section.title}</CardTitle>
                        <CardDescription className="text-base">{section.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                      size="lg"
                    >
                      Explore {section.title}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 