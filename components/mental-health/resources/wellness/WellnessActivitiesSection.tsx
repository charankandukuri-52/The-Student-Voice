"use client";

import { motion } from "framer-motion";
import { Activity, Target, Trophy, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WELLNESS_ACTIVITIES = [
  {
    title: "Daily Wellness Challenges",
    description: "Engage in daily activities to boost your mental well-being",
    icon: Activity,
    content: [
      "Mindful morning routine",
      "Gratitude practice",
      "Physical activity goals",
      "Digital detox challenges",
    ],
    duration: "5-15 minutes daily",
    difficulty: "Beginner",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
  },
  {
    title: "Goal Setting Workshops",
    description: "Learn to set and achieve meaningful wellness goals",
    icon: Target,
    content: [
      "SMART goal planning",
      "Progress tracking",
      "Milestone celebrations",
      "Accountability strategies",
    ],
    duration: "30-45 minutes",
    difficulty: "Intermediate",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
  },
  {
    title: "Achievement Programs",
    description: "Structured programs to build healthy habits",
    icon: Trophy,
    content: [
      "21-day wellness challenge",
      "Habit formation trackers",
      "Reward systems",
      "Progress visualization",
    ],
    duration: "Ongoing",
    difficulty: "Advanced",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
  },
  {
    title: "Group Activities",
    description: "Connect with others in wellness-focused activities",
    icon: Users,
    content: [
      "Group meditation sessions",
      "Wellness workshops",
      "Peer support circles",
      "Community challenges",
    ],
    duration: "45-60 minutes",
    difficulty: "All Levels",
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

export function WellnessActivitiesSection() {
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
            Wellness Activities
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Engage in interactive wellness activities designed to support your mental well-being.
            Choose from a variety of challenges, workshops, and programs that fit your needs.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {WELLNESS_ACTIVITIES.map((activity) => (
            <motion.div
              key={activity.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      activity.gradient
                    )}>
                      <activity.icon className={cn(
                        "w-6 h-6",
                        activity.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{activity.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{activity.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-4">
                    <ul className="space-y-3">
                      {activity.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={cn(
                            "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                            activity.iconClass
                          )} />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm text-muted-foreground">
                      <p><strong>Duration:</strong> {activity.duration}</p>
                      <p><strong>Difficulty:</strong> {activity.difficulty}</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                      size="lg"
                    >
                      Start Activity
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