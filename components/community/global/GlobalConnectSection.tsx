"use client";

import { motion } from "framer-motion";
import { Globe, Users, BookOpen, MessageSquare, Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface BaseActivity {
  title: string;
  participants: number;
  status: string;
  nextEvent: string;
}

interface CountryActivity extends BaseActivity {
  countries: number;
}

interface LanguageActivity extends BaseActivity {
  languages: number;
}

type Activity = CountryActivity | LanguageActivity;

interface GlobalCategory {
  title: string;
  description: string;
  icon: any;
  href: string;
  gradient: string;
  iconClass: string;
  activities: Activity[];
}

const GLOBAL_CATEGORIES: GlobalCategory[] = [
  {
    title: "International Networking",
    description: "Connect with students from different countries and cultures",
    icon: Globe,
    href: "/community/global/networking",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
    activities: [
      {
        title: "Global Mentorship",
        participants: 120,
        countries: 15,
        status: "Active",
        nextEvent: "2024-03-25",
      },
      {
        title: "Virtual Meetups",
        participants: 85,
        countries: 12,
        status: "Weekly",
        nextEvent: "2024-03-28",
      },
      {
        title: "Career Network",
        participants: 200,
        countries: 20,
        status: "Active",
        nextEvent: "2024-03-30",
      },
    ],
  },
  {
    title: "Cultural Exchange",
    description: "Share and learn about different cultures and traditions",
    icon: Users,
    href: "/community/global/cultural",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
    activities: [
      {
        title: "Cultural Festival",
        participants: 150,
        countries: 18,
        status: "Upcoming",
        nextEvent: "2024-04-05",
      },
      {
        title: "Food Exchange",
        participants: 90,
        countries: 10,
        status: "Monthly",
        nextEvent: "2024-04-02",
      },
      {
        title: "Art & Music",
        participants: 75,
        countries: 8,
        status: "Active",
        nextEvent: "2024-03-29",
      },
    ],
  },
  {
    title: "Global Perspectives",
    description: "Gain insights into global issues and diverse viewpoints",
    icon: BookOpen,
    href: "/community/global/perspectives",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
    activities: [
      {
        title: "Global Forum",
        participants: 180,
        countries: 25,
        status: "Active",
        nextEvent: "2024-04-01",
      },
      {
        title: "Research Exchange",
        participants: 95,
        countries: 15,
        status: "Weekly",
        nextEvent: "2024-03-27",
      },
      {
        title: "World Issues",
        participants: 140,
        countries: 20,
        status: "Active",
        nextEvent: "2024-03-26",
      },
    ],
  },
  {
    title: "Language Practice",
    description: "Practice and improve your language skills with native speakers",
    icon: MessageSquare,
    href: "/community/global/language",
    gradient: "from-orange-500/20 to-red-500/20",
    iconClass: "text-orange-500",
    activities: [
      {
        title: "Language Exchange",
        participants: 160,
        languages: 12,
        status: "Active",
        nextEvent: "2024-03-24",
      },
      {
        title: "Conversation Club",
        participants: 100,
        languages: 8,
        status: "Weekly",
        nextEvent: "2024-03-27",
      },
      {
        title: "Writing Practice",
        participants: 80,
        languages: 10,
        status: "Active",
        nextEvent: "2024-03-29",
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

export function GlobalConnectSection() {
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
            Global Connect
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Connect with students worldwide, participate in cultural exchange, and
            gain global perspectives through our international networking platform.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search global activities..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Activity
            </Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {GLOBAL_CATEGORIES.map((category) => (
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
                      <h3 className="font-medium mb-2">Featured Activities</h3>
                      <ul className="space-y-4">
                        {category.activities.map((activity, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{activity.title}</span>
                              <span className={cn(
                                "text-sm px-2 py-1 rounded-full",
                                activity.status === "Active" ? "bg-green-100 text-green-700" :
                                activity.status === "Upcoming" ? "bg-blue-100 text-blue-700" :
                                "bg-yellow-100 text-yellow-700"
                              )}>
                                {activity.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{activity.participants} participants</span>
                              <span>•</span>
                              <span>
                                {'languages' in activity 
                                  ? `${activity.languages} languages` 
                                  : `${activity.countries} countries`}
                              </span>
                              <span>•</span>
                              <span>Next: {activity.nextEvent}</span>
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
                        View All Activities
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