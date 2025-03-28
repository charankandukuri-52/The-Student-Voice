"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Calendar, BookOpen, Heart, Lightbulb, Trophy, Globe } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const COMMUNITY_FEATURES = [
  {
    title: "Discussion Forums",
    description: "Engage in meaningful conversations about various topics",
    icon: MessageSquare,
    href: "/community/forums",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
    features: [
      "Academic discussions",
      "Career guidance",
      "Student life",
      "Resource sharing",
    ],
  },
  {
    title: "Events & Activities",
    description: "Participate in community events and activities",
    icon: Calendar,
    href: "/community/events",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
    features: [
      "Workshops and seminars",
      "Social gatherings",
      "Skill development sessions",
      "Cultural events",
    ],
  },
  {
    title: "Peer Support",
    description: "Connect with peers for support and guidance",
    icon: Users,
    href: "/community/peer-support",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
    features: [
      "Study groups",
      "Mentorship programs",
      "Peer counseling",
      "Success sharing",
    ],
  },
  {
    title: "Resources",
    description: "Access community-curated resources and guides",
    icon: BookOpen,
    href: "/community/resources",
    gradient: "from-orange-500/20 to-red-500/20",
    iconClass: "text-orange-500",
    features: [
      "Study materials",
      "Career resources",
      "Life skills guides",
      "External links",
    ],
  },
  {
    title: "Wellness",
    description: "Focus on physical and mental well-being",
    icon: Heart,
    href: "/community/wellness",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconClass: "text-pink-500",
    features: [
      "Fitness challenges",
      "Mental health support",
      "Stress management",
      "Work-life balance",
    ],
  },
  {
    title: "Innovation Hub",
    description: "Share and explore innovative ideas",
    icon: Lightbulb,
    href: "/community/innovation",
    gradient: "from-yellow-500/20 to-amber-500/20",
    iconClass: "text-yellow-500",
    features: [
      "Project showcases",
      "Idea sharing",
      "Collaboration opportunities",
      "Innovation challenges",
    ],
  },
  {
    title: "Achievements",
    description: "Celebrate student achievements and milestones",
    icon: Trophy,
    href: "/community/achievements",
    gradient: "from-indigo-500/20 to-violet-500/20",
    iconClass: "text-indigo-500",
    features: [
      "Success stories",
      "Awards and recognition",
      "Milestone celebrations",
      "Inspiration sharing",
    ],
  },
  {
    title: "Global Connect",
    description: "Connect with students worldwide",
    icon: Globe,
    href: "/community/global",
    gradient: "from-teal-500/20 to-cyan-500/20",
    iconClass: "text-teal-500",
    features: [
      "International networking",
      "Cultural exchange",
      "Global perspectives",
      "Language practice",
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

export function CommunitySection() {
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
            Student Community
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join our vibrant student community. Connect with peers, share experiences,
            and grow together through various community features and activities.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {COMMUNITY_FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      feature.gradient
                    )}>
                      <feature.icon className={cn(
                        "w-6 h-6",
                        feature.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Features</h3>
                      <ul className="space-y-2">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              feature.iconClass
                            )} />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href={feature.href}>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                        size="lg"
                      >
                        Explore
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