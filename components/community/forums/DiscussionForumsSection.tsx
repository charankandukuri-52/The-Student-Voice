"use client";

import { motion } from "framer-motion";
import { MessageSquare, GraduationCap, Briefcase, Users, BookOpen, Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const FORUM_CATEGORIES = [
  {
    title: "Academic Discussions",
    description: "Discuss course materials, study strategies, and academic challenges",
    icon: GraduationCap,
    href: "/community/forums/academic",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
    stats: {
      topics: 156,
      posts: 892,
      members: 234,
    },
    recentTopics: [
      "Tips for effective note-taking",
      "Study group formation",
      "Exam preparation strategies",
    ],
  },
  {
    title: "Career Guidance",
    description: "Share career experiences and get advice on professional development",
    icon: Briefcase,
    href: "/community/forums/career",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
    stats: {
      topics: 98,
      posts: 567,
      members: 189,
    },
    recentTopics: [
      "Internship opportunities",
      "Resume building tips",
      "Interview preparation",
    ],
  },
  {
    title: "Student Life",
    description: "Discuss campus life, activities, and student experiences",
    icon: Users,
    href: "/community/forums/student-life",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
    stats: {
      topics: 145,
      posts: 723,
      members: 312,
    },
    recentTopics: [
      "Campus events",
      "Housing discussions",
      "Student organizations",
    ],
  },
  {
    title: "Resource Sharing",
    description: "Share and discover helpful resources for students",
    icon: BookOpen,
    href: "/community/forums/resources",
    gradient: "from-orange-500/20 to-red-500/20",
    iconClass: "text-orange-500",
    stats: {
      topics: 89,
      posts: 456,
      members: 167,
    },
    recentTopics: [
      "Study materials",
      "Online learning tools",
      "Educational apps",
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

export function DiscussionForumsSection() {
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
            Discussion Forums
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Engage in meaningful conversations with fellow students. Share experiences,
            ask questions, and learn from others in our various forum categories.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search forums..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Topic
            </Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {FORUM_CATEGORIES.map((category) => (
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
                      <h3 className="font-medium mb-2">Recent Topics</h3>
                      <ul className="space-y-2">
                        {category.recentTopics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <MessageSquare className={cn(
                              "h-4 w-4 mt-1 flex-shrink-0",
                              category.iconClass
                            )} />
                            <span className="text-sm text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium">{category.stats.topics}</span>
                        <span className="text-muted-foreground ml-1">Topics</span>
                      </div>
                      <div>
                        <span className="font-medium">{category.stats.posts}</span>
                        <span className="text-muted-foreground ml-1">Posts</span>
                      </div>
                      <div>
                        <span className="font-medium">{category.stats.members}</span>
                        <span className="text-muted-foreground ml-1">Members</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href={category.href}>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                        size="lg"
                      >
                        View Forum
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