"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, Trophy, Target, Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const INNOVATION_CATEGORIES = [
  {
    title: "Project Showcases",
    description: "Display and explore innovative student projects and initiatives",
    icon: Lightbulb,
    href: "/community/innovation/projects",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
    projects: [
      {
        title: "AI Research Project",
        members: 8,
        status: "In Progress",
        category: "Technology",
        lastUpdated: "2024-03-20",
      },
      {
        title: "Sustainable Campus",
        members: 12,
        status: "Planning",
        category: "Environment",
        lastUpdated: "2024-03-18",
      },
      {
        title: "Health Tech App",
        members: 6,
        status: "Completed",
        category: "Healthcare",
        lastUpdated: "2024-03-15",
      },
    ],
  },
  {
    title: "Idea Sharing",
    description: "Share and discuss innovative ideas with the community",
    icon: Target,
    href: "/community/innovation/ideas",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
    projects: [
      {
        title: "Smart Campus Solutions",
        members: 15,
        status: "Open",
        category: "Technology",
        lastUpdated: "2024-03-19",
      },
      {
        title: "Educational Innovation",
        members: 10,
        status: "Open",
        category: "Education",
        lastUpdated: "2024-03-17",
      },
      {
        title: "Social Impact Ideas",
        members: 20,
        status: "Open",
        category: "Social",
        lastUpdated: "2024-03-16",
      },
    ],
  },
  {
    title: "Collaboration",
    description: "Find partners and opportunities for collaborative projects",
    icon: Users,
    href: "/community/innovation/collaboration",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
    projects: [
      {
        title: "Cross-Disciplinary Team",
        members: 5,
        status: "Open",
        category: "Research",
        lastUpdated: "2024-03-21",
      },
      {
        title: "Startup Incubator",
        members: 25,
        status: "Open",
        category: "Business",
        lastUpdated: "2024-03-19",
      },
      {
        title: "Innovation Lab",
        members: 18,
        status: "Open",
        category: "Technology",
        lastUpdated: "2024-03-18",
      },
    ],
  },
  {
    title: "Innovation Challenges",
    description: "Participate in exciting innovation competitions and challenges",
    icon: Trophy,
    href: "/community/innovation/challenges",
    gradient: "from-orange-500/20 to-red-500/20",
    iconClass: "text-orange-500",
    projects: [
      {
        title: "Hackathon 2024",
        members: 50,
        status: "Upcoming",
        category: "Technology",
        lastUpdated: "2024-03-20",
      },
      {
        title: "Design Challenge",
        members: 30,
        status: "Active",
        category: "Design",
        lastUpdated: "2024-03-17",
      },
      {
        title: "Business Pitch",
        members: 40,
        status: "Registration",
        category: "Business",
        lastUpdated: "2024-03-16",
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

export function InnovationHubSection() {
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
            Innovation Hub
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Share and explore innovative ideas, showcase your projects, and find
            collaboration opportunities in our vibrant innovation community.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search innovations..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Share Idea
            </Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {INNOVATION_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      category.gradient
                    )}>
                      <category.icon className={cn(
                        "w-6 h-6",
                        category.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Featured Items</h3>
                      <ul className="space-y-4">
                        {category.projects.map((project, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{project.title}</span>
                              <span className={cn(
                                "text-sm px-2 py-1 rounded-full",
                                project.status === "Open" || project.status === "Active" ? "bg-green-100 text-green-700" :
                                project.status === "Upcoming" ? "bg-blue-100 text-blue-700" :
                                project.status === "Completed" ? "bg-gray-100 text-gray-700" :
                                "bg-yellow-100 text-yellow-700"
                              )}>
                                {project.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{project.members} members</span>
                              <span>•</span>
                              <span>{project.category}</span>
                              <span>•</span>
                              <span>Updated {project.lastUpdated}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href={category.href}>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                        size="lg"
                      >
                        Explore {category.title}
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