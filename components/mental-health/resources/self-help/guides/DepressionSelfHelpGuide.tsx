"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Activity, Coffee } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DEPRESSION_SELF_HELP = [
  {
    title: "Understanding Depression",
    description: "Learn about depression and its impact on daily life",
    icon: Brain,
    content: [
      "Common symptoms and signs",
      "Understanding triggers",
      "Recognizing patterns",
      "Self-assessment tools",
    ],
    tips: [
      "Track your mood daily",
      "Identify warning signs",
      "Understand your triggers",
      "Practice self-awareness",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
  },
  {
    title: "Emotional Support",
    description: "Techniques for managing emotional well-being",
    icon: Heart,
    content: [
      "Emotional expression exercises",
      "Self-compassion practices",
      "Positive activity scheduling",
      "Gratitude exercises",
    ],
    tips: [
      "Express feelings safely",
      "Practice self-kindness",
      "Plan enjoyable activities",
      "Focus on small wins",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
  },
  {
    title: "Daily Activities",
    description: "Structured activities to improve mood and energy",
    icon: Activity,
    content: [
      "Physical exercise routines",
      "Social engagement activities",
      "Creative expression",
      "Routine building",
    ],
    tips: [
      "Start with small steps",
      "Build a daily routine",
      "Stay connected with others",
      "Engage in hobbies",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
  },
  {
    title: "Lifestyle Support",
    description: "Daily habits to support mental well-being",
    icon: Coffee,
    content: [
      "Sleep hygiene practices",
      "Nutritional support",
      "Stress management",
      "Social connection",
    ],
    tips: [
      "Maintain regular sleep schedule",
      "Eat mood-boosting foods",
      "Practice stress reduction",
      "Stay connected with others",
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

export function DepressionSelfHelpGuide() {
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
            Depression Self-Help Resources
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Access comprehensive resources and strategies to support your journey with depression.
            Each section provides practical tools and techniques you can use in your daily life.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {DEPRESSION_SELF_HELP.map((resource) => (
            <motion.div
              key={resource.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      resource.gradient
                    )}>
                      <resource.icon className={cn(
                        "w-6 h-6",
                        resource.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{resource.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Key Resources</h3>
                      <ul className="space-y-3">
                        {resource.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              resource.iconClass
                            )} />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Practical Tips</h3>
                      <ul className="space-y-3">
                        {resource.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              resource.iconClass
                            )} />
                            <span className="text-sm text-muted-foreground">{tip}</span>
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
                      Access Resources
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