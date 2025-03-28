"use client";

import { motion } from "framer-motion";
import { Calendar, Users, BookOpen, Music, Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const UPCOMING_EVENTS = [
  {
    title: "Workshops & Seminars",
    description: "Enhance your skills through interactive workshops and informative seminars",
    icon: BookOpen,
    href: "/community/events/workshops",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
    events: [
      {
        title: "Time Management Workshop",
        date: "2024-03-25",
        time: "2:00 PM",
        participants: 45,
        location: "Virtual",
      },
      {
        title: "Public Speaking Seminar",
        date: "2024-03-28",
        time: "3:30 PM",
        participants: 60,
        location: "Room 301",
      },
      {
        title: "Study Skills Workshop",
        date: "2024-04-02",
        time: "1:00 PM",
        participants: 30,
        location: "Library Hall",
      },
    ],
  },
  {
    title: "Social Gatherings",
    description: "Connect with fellow students in fun and engaging social events",
    icon: Users,
    href: "/community/events/social",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
    events: [
      {
        title: "Campus Movie Night",
        date: "2024-03-26",
        time: "7:00 PM",
        participants: 100,
        location: "Student Center",
      },
      {
        title: "Game Night",
        date: "2024-03-29",
        time: "6:00 PM",
        participants: 50,
        location: "Common Room",
      },
      {
        title: "Cultural Festival",
        date: "2024-04-05",
        time: "4:00 PM",
        participants: 200,
        location: "Main Hall",
      },
    ],
  },
  {
    title: "Skill Development",
    description: "Learn new skills and develop your talents through specialized sessions",
    icon: Calendar,
    href: "/community/events/skills",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
    events: [
      {
        title: "Photography Basics",
        date: "2024-03-27",
        time: "2:30 PM",
        participants: 25,
        location: "Art Studio",
      },
      {
        title: "Coding Workshop",
        date: "2024-03-30",
        time: "10:00 AM",
        participants: 40,
        location: "Computer Lab",
      },
      {
        title: "Creative Writing",
        date: "2024-04-03",
        time: "3:00 PM",
        participants: 35,
        location: "Writing Center",
      },
    ],
  },
  {
    title: "Cultural Events",
    description: "Celebrate diversity and cultural exchange through various events",
    icon: Music,
    href: "/community/events/cultural",
    gradient: "from-orange-500/20 to-red-500/20",
    iconClass: "text-orange-500",
    events: [
      {
        title: "International Food Fair",
        date: "2024-03-31",
        time: "12:00 PM",
        participants: 150,
        location: "Cafeteria",
      },
      {
        title: "Dance Performance",
        date: "2024-04-01",
        time: "5:00 PM",
        participants: 80,
        location: "Auditorium",
      },
      {
        title: "Art Exhibition",
        date: "2024-04-04",
        time: "2:00 PM",
        participants: 120,
        location: "Gallery",
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

export function EventsSection() {
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
            Events & Activities
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join our exciting community events and activities. From workshops to social gatherings,
            there's something for everyone to participate in and enjoy.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Event
            </Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {UPCOMING_EVENTS.map((category) => (
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
                      <h3 className="font-medium mb-2">Upcoming Events</h3>
                      <ul className="space-y-4">
                        {category.events.map((event, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{event.title}</span>
                              <span className="text-sm text-muted-foreground">{event.participants} participants</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{event.date}</span>
                              <span>•</span>
                              <span>{event.time}</span>
                              <span>•</span>
                              <span>{event.location}</span>
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
                        View All Events
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