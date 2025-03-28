"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Calendar, BarChart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MENTAL_HEALTH_TOOLS = [
  {
    title: "Mood Tracking App",
    description: "Track your daily mood and emotional patterns",
    icon: Brain,
    content: [
      "Daily mood logging",
      "Emotion pattern analysis",
      "Mood history visualization",
      "Personalized insights",
    ],
    features: [
      "Real-time tracking",
      "Data visualization",
      "Progress reports",
      "Privacy focused",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
  },
  {
    title: "Meditation Timer",
    description: "Customizable meditation and mindfulness timer",
    icon: Activity,
    content: [
      "Guided meditation sessions",
      "Custom timer settings",
      "Ambient sound library",
      "Session statistics",
    ],
    features: [
      "Multiple meditation styles",
      "Background sounds",
      "Progress tracking",
      "Offline access",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
  },
  {
    title: "Wellness Planner",
    description: "Plan and organize your wellness activities",
    icon: Calendar,
    content: [
      "Activity scheduling",
      "Goal setting",
      "Reminder system",
      "Progress tracking",
    ],
    features: [
      "Calendar integration",
      "Custom reminders",
      "Activity templates",
      "Progress visualization",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
  },
  {
    title: "Stress Assessment Tool",
    description: "Monitor and manage your stress levels",
    icon: BarChart,
    content: [
      "Stress level tracking",
      "Trigger identification",
      "Coping strategy library",
      "Progress monitoring",
    ],
    features: [
      "Real-time assessment",
      "Personalized recommendations",
      "Data analytics",
      "Resource library",
    ],
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

export function MentalHealthToolsSection() {
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
            Mental Health Tools
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Access our collection of digital tools designed to support your mental well-being journey.
            Track, monitor, and improve your mental health with these interactive applications.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {MENTAL_HEALTH_TOOLS.map((tool) => (
            <motion.div
              key={tool.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      tool.gradient
                    )}>
                      <tool.icon className={cn(
                        "w-6 h-6",
                        tool.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{tool.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Key Features</h3>
                      <ul className="space-y-3">
                        {tool.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              tool.iconClass
                            )} />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Technical Features</h3>
                      <ul className="space-y-3">
                        {tool.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              tool.iconClass
                            )} />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                      size="lg"
                    >
                      Launch Tool
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