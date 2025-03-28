"use client";

import { motion } from "framer-motion";
import { Video, Brain, GraduationCap, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const VIDEO_RESOURCES = [
  {
    title: "Mindfulness Meditation Series",
    description: "Guided meditation videos for mental well-being",
    icon: Brain,
    content: [
      "Introduction to mindfulness",
      "Guided breathing exercises",
      "Body scan meditation",
      "Mindful movement practices",
    ],
    duration: "10-20 minutes per video",
    instructor: "Dr. Sarah Johnson",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
  },
  {
    title: "Expert Mental Health Talks",
    description: "Educational lectures by mental health professionals",
    icon: GraduationCap,
    content: [
      "Understanding anxiety and depression",
      "Building emotional resilience",
      "Managing academic stress",
      "Healthy relationships",
    ],
    duration: "30-45 minutes per talk",
    instructor: "Various Mental Health Experts",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
  },
  {
    title: "Guided Relaxation Sessions",
    description: "Calming videos for stress relief",
    icon: Heart,
    content: [
      "Progressive muscle relaxation",
      "Visualization exercises",
      "Stress relief techniques",
      "Sleep meditation",
    ],
    duration: "15-25 minutes per session",
    instructor: "Prof. Michael Chen",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
  },
  {
    title: "Mental Health Awareness Series",
    description: "Educational videos about mental health topics",
    icon: Video,
    content: [
      "Mental health basics",
      "Recognizing warning signs",
      "Supporting peers",
      "Seeking professional help",
    ],
    duration: "20-30 minutes per video",
    instructor: "Mental Health Awareness Team",
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

export function VideoResourcesSection() {
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
            Video Resources
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Access our collection of educational videos and guided sessions designed to support your mental well-being.
            Learn from experts and practice mindfulness techniques at your own pace.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {VIDEO_RESOURCES.map((resource) => (
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
                  <div className="space-y-4">
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
                    <div className="text-sm text-muted-foreground">
                      <p><strong>Duration:</strong> {resource.duration}</p>
                      <p><strong>Instructor:</strong> {resource.instructor}</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                      size="lg"
                    >
                      Watch Videos
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