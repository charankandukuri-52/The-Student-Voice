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

const ANXIETY_COPING_STRATEGIES = [
  {
    title: "Cognitive Techniques",
    description: "Learn to manage anxious thoughts and patterns",
    icon: Brain,
    content: [
      "Thought challenging exercises",
      "Cognitive restructuring",
      "Mindfulness practices",
      "Positive self-talk",
    ],
    tips: [
      "Identify negative thought patterns",
      "Practice thought reframing",
      "Stay present in the moment",
      "Use affirmations daily",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
  },
  {
    title: "Emotional Regulation",
    description: "Techniques for managing emotional responses",
    icon: Heart,
    content: [
      "Emotion awareness practice",
      "Grounding techniques",
      "Self-soothing methods",
      "Emotional journaling",
    ],
    tips: [
      "Name and validate your emotions",
      "Use the 5-4-3-2-1 technique",
      "Practice self-compassion",
      "Create an emotional toolkit",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
  },
  {
    title: "Physical Coping",
    description: "Body-based techniques for anxiety relief",
    icon: Activity,
    content: [
      "Deep breathing exercises",
      "Progressive muscle relaxation",
      "Physical exercise routines",
      "Body scan meditation",
    ],
    tips: [
      "Practice diaphragmatic breathing",
      "Release physical tension",
      "Stay active regularly",
      "Listen to your body",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
  },
  {
    title: "Lifestyle Support",
    description: "Daily habits to support anxiety management",
    icon: Coffee,
    content: [
      "Sleep hygiene practices",
      "Nutritional support",
      "Stress management",
      "Social connection",
    ],
    tips: [
      "Maintain regular sleep schedule",
      "Eat anxiety-reducing foods",
      "Practice time management",
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

export function AnxietyCopingGuide() {
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
            Anxiety Coping Strategies
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover effective strategies and techniques to manage anxiety and improve your mental well-being.
            Each section provides practical exercises and tips you can use in your daily life.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {ANXIETY_COPING_STRATEGIES.map((strategy) => (
            <motion.div
              key={strategy.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      strategy.gradient
                    )}>
                      <strategy.icon className={cn(
                        "w-6 h-6",
                        strategy.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{strategy.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Key Strategies</h3>
                      <ul className="space-y-3">
                        {strategy.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              strategy.iconClass
                            )} />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Practical Tips</h3>
                      <ul className="space-y-3">
                        {strategy.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              strategy.iconClass
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