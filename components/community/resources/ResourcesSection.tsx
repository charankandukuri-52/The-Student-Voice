"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, LifeBuoy, Link as LinkIcon, Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const RESOURCE_CATEGORIES = [
  {
    title: "Study Materials",
    description: "Access comprehensive study resources and learning materials",
    icon: BookOpen,
    href: "/community/resources/study",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
    resources: [
      {
        title: "Subject Notes",
        count: 150,
        type: "PDF",
        contributors: 45,
        lastUpdated: "2024-03-20",
      },
      {
        title: "Practice Problems",
        count: 200,
        type: "Interactive",
        contributors: 60,
        lastUpdated: "2024-03-18",
      },
      {
        title: "Video Lectures",
        count: 75,
        type: "Video",
        contributors: 30,
        lastUpdated: "2024-03-15",
      },
    ],
  },
  {
    title: "Career Resources",
    description: "Find resources for career development and professional growth",
    icon: Briefcase,
    href: "/community/resources/career",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
    resources: [
      {
        title: "Resume Templates",
        count: 25,
        type: "Template",
        contributors: 15,
        lastUpdated: "2024-03-19",
      },
      {
        title: "Interview Guides",
        count: 40,
        type: "Guide",
        contributors: 25,
        lastUpdated: "2024-03-17",
      },
      {
        title: "Industry Reports",
        count: 30,
        type: "PDF",
        contributors: 20,
        lastUpdated: "2024-03-16",
      },
    ],
  },
  {
    title: "Life Skills Guides",
    description: "Learn essential life skills and personal development resources",
    icon: LifeBuoy,
    href: "/community/resources/life-skills",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
    resources: [
      {
        title: "Time Management",
        count: 20,
        type: "Guide",
        contributors: 12,
        lastUpdated: "2024-03-21",
      },
      {
        title: "Financial Planning",
        count: 15,
        type: "Tool",
        contributors: 10,
        lastUpdated: "2024-03-19",
      },
      {
        title: "Stress Management",
        count: 25,
        type: "Guide",
        contributors: 18,
        lastUpdated: "2024-03-18",
      },
    ],
  },
  {
    title: "External Links",
    description: "Access curated external resources and helpful websites",
    icon: LinkIcon,
    href: "/community/resources/external",
    gradient: "from-orange-500/20 to-red-500/20",
    iconClass: "text-orange-500",
    resources: [
      {
        title: "Educational Sites",
        count: 50,
        type: "Link",
        contributors: 35,
        lastUpdated: "2024-03-20",
      },
      {
        title: "Research Databases",
        count: 30,
        type: "Link",
        contributors: 20,
        lastUpdated: "2024-03-17",
      },
      {
        title: "Learning Platforms",
        count: 40,
        type: "Link",
        contributors: 25,
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

export function ResourcesSection() {
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
            Community Resources
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Access a wide range of community-curated resources to support your academic
            and personal growth. Find study materials, career resources, and more.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {RESOURCE_CATEGORIES.map((category) => (
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
                      <h3 className="font-medium mb-2">Available Resources</h3>
                      <ul className="space-y-4">
                        {category.resources.map((resource, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{resource.title}</span>
                              <span className="text-sm px-2 py-1 rounded-full bg-primary/10 text-primary">
                                {resource.type}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{resource.count} items</span>
                              <span>•</span>
                              <span>{resource.contributors} contributors</span>
                              <span>•</span>
                              <span>Updated {resource.lastUpdated}</span>
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
                        Browse Resources
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