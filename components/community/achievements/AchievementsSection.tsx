"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Calendar, Heart, Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const ACHIEVEMENT_CATEGORIES = [
  {
    title: "Success Stories",
    description: "Read inspiring stories of student achievements and accomplishments",
    icon: Star,
    href: "/community/achievements/stories",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
    stories: [
      {
        title: "Research Publication",
        author: "Sarah Chen",
        date: "2024-03-20",
        category: "Academic",
        likes: 45,
      },
      {
        title: "Startup Success",
        author: "Michael Rodriguez",
        date: "2024-03-18",
        category: "Entrepreneurship",
        likes: 38,
      },
      {
        title: "Community Impact",
        author: "Priya Patel",
        date: "2024-03-15",
        category: "Social",
        likes: 52,
      },
    ],
  },
  {
    title: "Awards & Recognition",
    description: "Celebrate students who have received awards and special recognition",
    icon: Trophy,
    href: "/community/achievements/awards",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
    stories: [
      {
        title: "Best Research Paper",
        author: "David Kim",
        date: "2024-03-19",
        category: "Academic",
        likes: 42,
      },
      {
        title: "Innovation Award",
        author: "Emma Wilson",
        date: "2024-03-17",
        category: "Technology",
        likes: 35,
      },
      {
        title: "Leadership Excellence",
        author: "James Thompson",
        date: "2024-03-16",
        category: "Leadership",
        likes: 48,
      },
    ],
  },
  {
    title: "Milestone Celebrations",
    description: "Share and celebrate important academic and personal milestones",
    icon: Calendar,
    href: "/community/achievements/milestones",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
    stories: [
      {
        title: "Graduation Achievement",
        author: "Lisa Zhang",
        date: "2024-03-21",
        category: "Academic",
        likes: 58,
      },
      {
        title: "Research Milestone",
        author: "Alex Kumar",
        date: "2024-03-19",
        category: "Research",
        likes: 32,
      },
      {
        title: "Project Completion",
        author: "Rachel Brown",
        date: "2024-03-18",
        category: "Project",
        likes: 41,
      },
    ],
  },
  {
    title: "Inspiration Sharing",
    description: "Share motivational content and inspire others in the community",
    icon: Heart,
    href: "/community/achievements/inspiration",
    gradient: "from-orange-500/20 to-red-500/20",
    iconClass: "text-orange-500",
    stories: [
      {
        title: "Overcoming Challenges",
        author: "Tom Anderson",
        date: "2024-03-20",
        category: "Personal",
        likes: 65,
      },
      {
        title: "Career Journey",
        author: "Sophie Chen",
        date: "2024-03-17",
        category: "Career",
        likes: 47,
      },
      {
        title: "Learning Experience",
        author: "Ryan Patel",
        date: "2024-03-16",
        category: "Education",
        likes: 39,
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

export function AchievementsSection() {
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
            Student Achievements
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Celebrate the remarkable achievements of our student community. Share success stories,
            awards, and milestones to inspire others.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search achievements..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Share Achievement
            </Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {ACHIEVEMENT_CATEGORIES.map((category) => (
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
                      <h3 className="font-medium mb-2">Featured Stories</h3>
                      <ul className="space-y-4">
                        {category.stories.map((story, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{story.title}</span>
                              <span className="text-sm text-muted-foreground">
                                {story.likes} likes
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>By {story.author}</span>
                              <span>•</span>
                              <span>{story.category}</span>
                              <span>•</span>
                              <span>{story.date}</span>
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
                        View All Stories
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