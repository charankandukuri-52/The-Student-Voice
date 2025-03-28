"use client";

import { motion } from "framer-motion";
import { GraduationCap, FileText, Users, Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CAREER_RESOURCES = [
  {
    title: "Career Assessment Tools",
    description: "Evaluate your skills, interests, and career preferences",
    icon: GraduationCap,
    type: "Assessment",
    lastUpdated: "2024-03-20",
    views: 245,
    status: "Active",
    content: [
      {
        title: "Skills Assessment",
        description: "Identify your core competencies and areas for growth",
        duration: "30 mins",
        format: "Interactive Quiz",
      },
      {
        title: "Career Interest Profiler",
        description: "Discover career paths aligned with your interests",
        duration: "45 mins",
        format: "Assessment Tool",
      },
      {
        title: "Personality Type Analysis",
        description: "Understand how your personality influences career choices",
        duration: "60 mins",
        format: "Comprehensive Test",
      },
    ],
  },
  {
    title: "Resume Building Guide",
    description: "Create a professional and impactful resume",
    icon: FileText,
    type: "Guide",
    lastUpdated: "2024-03-18",
    views: 189,
    status: "Active",
    content: [
      {
        title: "Resume Templates",
        description: "Professional templates for different industries",
        duration: "Downloadable",
        format: "PDF Templates",
      },
      {
        title: "Writing Tips",
        description: "Best practices for resume content and formatting",
        duration: "30 mins",
        format: "Guide",
      },
      {
        title: "Cover Letter Guide",
        description: "Create compelling cover letters",
        duration: "45 mins",
        format: "Tutorial",
      },
    ],
  },
  {
    title: "Interview Preparation",
    description: "Prepare for job interviews with confidence",
    icon: Users,
    type: "Workshop",
    lastUpdated: "2024-03-15",
    views: 312,
    status: "Active",
    content: [
      {
        title: "Common Questions",
        description: "Practice with frequently asked interview questions",
        duration: "60 mins",
        format: "Practice Session",
      },
      {
        title: "Mock Interviews",
        description: "Simulate real interview scenarios",
        duration: "90 mins",
        format: "Interactive",
      },
      {
        title: "Body Language Guide",
        description: "Learn effective non-verbal communication",
        duration: "45 mins",
        format: "Video Guide",
      },
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

export function CareerResourcesSection() {
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
            Career Resources
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Access comprehensive career planning and development resources to help you
            make informed decisions about your career path.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search career resources..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Resource
            </Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8"
        >
          {CAREER_RESOURCES.map((resource) => (
            <motion.div
              key={resource.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <resource.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold">{resource.title}</CardTitle>
                      <CardDescription className="text-base">{resource.description}</CardDescription>
                    </div>
                    <span className={cn(
                      "text-sm px-2 py-1 rounded-full",
                      resource.status === "Active" ? "bg-green-100 text-green-700" :
                      resource.status === "New" ? "bg-blue-100 text-blue-700" :
                      resource.status === "Upcoming" ? "bg-purple-100 text-purple-700" :
                      "bg-yellow-100 text-yellow-700"
                    )}>
                      {resource.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{resource.type}</span>
                    <span>•</span>
                    <span>{resource.views} views</span>
                    <span>•</span>
                    <span>Updated {resource.lastUpdated}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Available Resources</h3>
                      <ul className="space-y-4">
                        {resource.content.map((item, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{item.title}</span>
                              <span className="text-sm text-muted-foreground">
                                {item.duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{item.description}</span>
                              <span>•</span>
                              <span>{item.format}</span>
                            </div>
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