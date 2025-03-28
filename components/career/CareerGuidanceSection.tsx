"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Target, Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CAREER_CATEGORIES = [
  {
    title: "Career Resources",
    description: "Access comprehensive career planning and development resources",
    icon: GraduationCap,
    href: "/career/resources",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
    resources: [
      {
        title: "Career Assessment Tools",
        type: "Assessment",
        lastUpdated: "2024-03-20",
        views: 245,
        status: "Active",
      },
      {
        title: "Resume Building Guide",
        type: "Guide",
        lastUpdated: "2024-03-18",
        views: 189,
        status: "Active",
      },
      {
        title: "Interview Preparation",
        type: "Workshop",
        lastUpdated: "2024-03-15",
        views: 312,
        status: "Active",
      },
    ],
  },
  {
    title: "Job Opportunities",
    description: "Explore internships, part-time jobs, and career opportunities",
    icon: Briefcase,
    href: "/career/jobs",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
    resources: [
      {
        title: "Tech Internships",
        type: "Internship",
        lastUpdated: "2024-03-21",
        views: 456,
        status: "New",
      },
      {
        title: "Research Positions",
        type: "Research",
        lastUpdated: "2024-03-19",
        views: 234,
        status: "Active",
      },
      {
        title: "Part-time Roles",
        type: "Part-time",
        lastUpdated: "2024-03-17",
        views: 345,
        status: "Active",
      },
    ],
  },
  {
    title: "Professional Development",
    description: "Enhance your skills and professional growth",
    icon: Target,
    href: "/career/development",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
    resources: [
      {
        title: "Leadership Training",
        type: "Workshop",
        lastUpdated: "2024-03-20",
        views: 278,
        status: "Upcoming",
      },
      {
        title: "Skill Development",
        type: "Course",
        lastUpdated: "2024-03-18",
        views: 423,
        status: "Active",
      },
      {
        title: "Networking Events",
        type: "Event",
        lastUpdated: "2024-03-16",
        views: 567,
        status: "Active",
      },
    ],
  },
  {
    title: "Mentorship Programs",
    description: "Connect with industry professionals and mentors",
    icon: Users,
    href: "/career/mentorship",
    gradient: "from-orange-500/20 to-red-500/20",
    iconClass: "text-orange-500",
    resources: [
      {
        title: "Industry Mentors",
        type: "Program",
        lastUpdated: "2024-03-21",
        views: 189,
        status: "Active",
      },
      {
        title: "Alumni Network",
        type: "Network",
        lastUpdated: "2024-03-19",
        views: 345,
        status: "Active",
      },
      {
        title: "Career Coaching",
        type: "Service",
        lastUpdated: "2024-03-17",
        views: 234,
        status: "Active",
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

export function CareerGuidanceSection() {
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
            Career Guidance
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Access comprehensive career resources, job opportunities, and professional
            development tools to help you plan and advance your career.
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {CAREER_CATEGORIES.map((category) => (
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
                      <h3 className="font-medium mb-2">Featured Resources</h3>
                      <ul className="space-y-4">
                        {category.resources.map((resource, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{resource.title}</span>
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
                        View All Resources
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