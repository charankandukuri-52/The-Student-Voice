"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase, Microscope, Clock, Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { JobFilters, type JobFilters as JobFiltersType } from "./JobFilters";
import { PostJobDialog } from "./PostJobDialog";

const JOB_OPPORTUNITIES = [
  {
    title: "Tech Internships",
    description: "Exciting internship opportunities in technology and software development",
    icon: Briefcase,
    type: "internship",
    lastUpdated: "2024-03-21",
    views: 456,
    status: "New",
    opportunities: [
      {
        title: "Software Development Intern",
        company: "Tech Solutions Inc.",
        location: "remote",
        duration: "3-months",
        requirements: "Python, React, Git",
      },
      {
        title: "Data Science Intern",
        company: "AI Research Lab",
        location: "hybrid",
        duration: "6-months",
        requirements: "Python, Machine Learning",
      },
      {
        title: "Product Management Intern",
        company: "Innovation Tech",
        location: "on-site",
        duration: "4-months",
        requirements: "Business Analysis, Agile",
      },
    ],
  },
  {
    title: "Research Positions",
    description: "Academic and industry research opportunities",
    icon: Microscope,
    type: "research",
    lastUpdated: "2024-03-19",
    views: 234,
    status: "Active",
    opportunities: [
      {
        title: "Research Assistant",
        company: "University Research Lab",
        location: "on-site",
        duration: "12-months",
        requirements: "Research Methods, Data Analysis",
      },
      {
        title: "Lab Technician",
        company: "Biotech Research Center",
        location: "on-site",
        duration: "6-months",
        requirements: "Lab Experience, Safety Protocols",
      },
      {
        title: "Research Intern",
        company: "Environmental Institute",
        location: "hybrid",
        duration: "3-months",
        requirements: "Environmental Science, Field Work",
      },
    ],
  },
  {
    title: "Part-time Roles",
    description: "Flexible part-time job opportunities for students",
    icon: Clock,
    type: "part-time",
    lastUpdated: "2024-03-17",
    views: 345,
    status: "Active",
    opportunities: [
      {
        title: "Content Writer",
        company: "Digital Media Co.",
        location: "remote",
        duration: "flexible",
        requirements: "Writing, SEO",
      },
      {
        title: "Tutor",
        company: "Education Platform",
        location: "remote",
        duration: "flexible",
        requirements: "Teaching, Subject Expertise",
      },
      {
        title: "Social Media Manager",
        company: "Startup",
        location: "hybrid",
        duration: "flexible",
        requirements: "Social Media, Content Creation",
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

export function JobOpportunitiesSection() {
  const [filters, setFilters] = useState<JobFiltersType>({
    searchTerm: "",
    type: "all",
    location: "all",
    duration: "all",
    sortBy: "newest",
  });

  const filteredOpportunities = useMemo(() => {
    return JOB_OPPORTUNITIES.filter((category) => {
      // Filter by type
      if (filters.type !== "all" && category.type !== filters.type) {
        return false;
      }

      // Filter opportunities within category
      const filteredJobs = category.opportunities.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          job.requirements.toLowerCase().includes(filters.searchTerm.toLowerCase());

        const matchesLocation = filters.location === "all" || job.location === filters.location;
        const matchesDuration = filters.duration === "all" || job.duration === filters.duration;

        return matchesSearch && matchesLocation && matchesDuration;
      });

      return filteredJobs.length > 0;
    });
  }, [filters]);

  const handlePostJob = (data: any) => {
    // TODO: Implement job posting functionality
    console.log("New job posted:", data);
  };

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
            Job Opportunities
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore internships, research positions, and part-time job opportunities
            to kickstart your career journey.
          </p>
        </motion.div>

        <div className="mb-8">
          <JobFilters
            filters={filters}
            onFiltersChange={setFilters}
            filteredCount={filteredOpportunities.reduce(
              (acc, category) => acc + category.opportunities.length,
              0
            )}
            onPostJob={() => {}}
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8"
        >
          {filteredOpportunities.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                      <category.icon className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                      <CardDescription className="text-base">{category.description}</CardDescription>
                    </div>
                    <span className={cn(
                      "text-sm px-2 py-1 rounded-full",
                      category.status === "Active" ? "bg-green-100 text-green-700" :
                      category.status === "New" ? "bg-blue-100 text-blue-700" :
                      category.status === "Upcoming" ? "bg-purple-100 text-purple-700" :
                      "bg-yellow-100 text-yellow-700"
                    )}>
                      {category.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="capitalize">{category.type}</span>
                    <span>•</span>
                    <span>{category.views} views</span>
                    <span>•</span>
                    <span>Updated {category.lastUpdated}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Available Positions</h3>
                      <ul className="space-y-4">
                        {category.opportunities.map((job, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{job.title}</span>
                              <span className="text-sm text-muted-foreground capitalize">
                                {job.duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{job.company}</span>
                              <span>•</span>
                              <span className="capitalize">{job.location}</span>
                              <span>•</span>
                              <span>{job.requirements}</span>
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
                      View All Positions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <PostJobDialog onPostJob={handlePostJob} />
      </div>
    </section>
  );
} 