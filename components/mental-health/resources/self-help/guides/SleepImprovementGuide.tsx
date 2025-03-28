"use client";

import { motion } from "framer-motion";
import { Moon, Coffee, Activity, Brain } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLEEP_IMPROVEMENT_GUIDES = [
  {
    title: "Sleep Hygiene",
    description: "Learn essential sleep hygiene practices for better rest",
    icon: Moon,
    content: [
      "Bedroom environment setup",
      "Sleep schedule management",
      "Pre-sleep routines",
      "Digital device management",
    ],
    tips: [
      "Create a dark, quiet bedroom",
      "Maintain consistent sleep times",
      "Develop a relaxing bedtime routine",
      "Limit screen time before bed",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
  },
  {
    title: "Lifestyle Factors",
    description: "Daily habits that impact sleep quality",
    icon: Coffee,
    content: [
      "Diet and nutrition",
      "Exercise timing",
      "Caffeine management",
      "Stress reduction",
    ],
    tips: [
      "Avoid heavy meals before bed",
      "Exercise earlier in the day",
      "Limit caffeine intake",
      "Practice relaxation techniques",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
  },
  {
    title: "Physical Activity",
    description: "Exercise and movement for better sleep",
    icon: Activity,
    content: [
      "Exercise routines",
      "Stretching exercises",
      "Relaxation techniques",
      "Movement patterns",
    ],
    tips: [
      "Regular moderate exercise",
      "Gentle stretching before bed",
      "Progressive muscle relaxation",
      "Mindful movement practices",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
  },
  {
    title: "Mental Preparation",
    description: "Techniques for mental relaxation and sleep",
    icon: Brain,
    content: [
      "Mindfulness practices",
      "Thought management",
      "Stress reduction",
      "Sleep meditation",
    ],
    tips: [
      "Practice mindfulness daily",
      "Manage racing thoughts",
      "Reduce stress levels",
      "Use guided sleep meditation",
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

export function SleepImprovementGuide() {
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
            Sleep Improvement Guides
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover effective strategies and techniques to improve your sleep quality.
            Each section provides practical tips and exercises to help you develop healthy sleep habits.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SLEEP_IMPROVEMENT_GUIDES.map((guide) => (
            <motion.div
              key={guide.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      guide.gradient
                    )}>
                      <guide.icon className={cn(
                        "w-6 h-6",
                        guide.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{guide.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{guide.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Key Areas</h3>
                      <ul className="space-y-3">
                        {guide.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              guide.iconClass
                            )} />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Practical Tips</h3>
                      <ul className="space-y-3">
                        {guide.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              guide.iconClass
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