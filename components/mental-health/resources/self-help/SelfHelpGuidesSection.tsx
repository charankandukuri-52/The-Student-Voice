"use client";

import { motion } from "framer-motion";
import { Book, Brain, Heart, Moon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SELF_HELP_GUIDES = [
  {
    title: "Stress Management Guide",
    description: "Learn effective techniques to manage and reduce stress",
    icon: Brain,
    content: [
      "Understanding stress triggers",
      "Breathing exercises and relaxation techniques",
      "Time management strategies",
      "Building resilience",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
  },
  {
    title: "Anxiety Coping Strategies",
    description: "Practical strategies to cope with anxiety and panic",
    icon: Heart,
    content: [
      "Identifying anxiety symptoms",
      "Grounding techniques",
      "Progressive muscle relaxation",
      "Cognitive restructuring exercises",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
  },
  {
    title: "Depression Self-Help",
    description: "Resources and techniques for managing depression",
    icon: Book,
    content: [
      "Daily mood tracking",
      "Activity scheduling",
      "Negative thought challenging",
      "Self-care practices",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
  },
  {
    title: "Sleep Improvement Guide",
    description: "Tips and techniques for better sleep quality",
    icon: Moon,
    content: [
      "Sleep hygiene practices",
      "Bedtime routine optimization",
      "Relaxation techniques for sleep",
      "Managing sleep anxiety",
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

export function SelfHelpGuidesSection() {
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
            Self-Help Guides
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Access our comprehensive collection of self-help guides designed to support your mental well-being.
            Each guide provides practical strategies and evidence-based techniques.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SELF_HELP_GUIDES.map((guide) => (
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
                  <ul className="space-y-3 mb-6">
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
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                      size="lg"
                    >
                      Read Guide
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