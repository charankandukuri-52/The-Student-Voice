"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Heart, Coffee } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STRESS_MANAGEMENT_TECHNIQUES = [
  {
    title: "Mindfulness & Meditation",
    description: "Learn mindfulness techniques to reduce stress and anxiety",
    icon: Brain,
    content: [
      "Deep breathing exercises",
      "Body scan meditation",
      "Mindful walking",
      "Present moment awareness",
    ],
    tips: [
      "Practice for 5-10 minutes daily",
      "Find a quiet, comfortable space",
      "Focus on your breath",
      "Be patient with yourself",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
  },
  {
    title: "Physical Activity",
    description: "Exercise and movement-based stress relief techniques",
    icon: Activity,
    content: [
      "Regular exercise routine",
      "Stretching exercises",
      "Yoga poses",
      "Progressive muscle relaxation",
    ],
    tips: [
      "Start with 10-15 minutes daily",
      "Choose activities you enjoy",
      "Stay consistent",
      "Listen to your body",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
  },
  {
    title: "Emotional Well-being",
    description: "Techniques for managing emotional stress",
    icon: Heart,
    content: [
      "Journaling exercises",
      "Emotional awareness practice",
      "Positive self-talk",
      "Gratitude practice",
    ],
    tips: [
      "Write daily reflections",
      "Identify emotional triggers",
      "Practice self-compassion",
      "Celebrate small wins",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
  },
  {
    title: "Lifestyle Changes",
    description: "Daily habits and routines for stress management",
    icon: Coffee,
    content: [
      "Sleep hygiene practices",
      "Healthy eating habits",
      "Time management skills",
      "Social connection activities",
    ],
    tips: [
      "Maintain regular sleep schedule",
      "Eat balanced meals",
      "Set realistic goals",
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

export function StressManagementGuide() {
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
            Stress Management Techniques
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover effective techniques and strategies to manage stress and improve your overall well-being.
            Each section provides practical exercises and tips you can incorporate into your daily life.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {STRESS_MANAGEMENT_TECHNIQUES.map((technique) => (
            <motion.div
              key={technique.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      technique.gradient
                    )}>
                      <technique.icon className={cn(
                        "w-6 h-6",
                        technique.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{technique.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{technique.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Key Techniques</h3>
                      <ul className="space-y-3">
                        {technique.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              technique.iconClass
                            )} />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Practical Tips</h3>
                      <ul className="space-y-3">
                        {technique.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              technique.iconClass
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
                      Start Practice
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