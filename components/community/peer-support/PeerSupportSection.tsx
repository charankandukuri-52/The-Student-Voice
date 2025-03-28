"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Heart, MessageSquare, Search, Filter, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PEER_SUPPORT_PROGRAMS = [
  {
    title: "Study Groups",
    description: "Join collaborative study sessions with peers in your field",
    icon: GraduationCap,
    href: "/community/peer-support/study-groups",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
    programs: [
      {
        title: "Engineering Study Group",
        members: 25,
        schedule: "Weekly",
        focus: "Core subjects",
        status: "Open",
      },
      {
        title: "Science Discussion Group",
        members: 30,
        schedule: "Bi-weekly",
        focus: "Research topics",
        status: "Open",
      },
      {
        title: "Business Case Studies",
        members: 20,
        schedule: "Weekly",
        focus: "Case analysis",
        status: "Limited",
      },
    ],
  },
  {
    title: "Mentorship Programs",
    description: "Connect with experienced students for guidance and support",
    icon: Users,
    href: "/community/peer-support/mentorship",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
    programs: [
      {
        title: "Academic Mentoring",
        members: 45,
        schedule: "Flexible",
        focus: "Study strategies",
        status: "Open",
      },
      {
        title: "Career Guidance",
        members: 35,
        schedule: "Monthly",
        focus: "Career planning",
        status: "Open",
      },
      {
        title: "Research Mentoring",
        members: 15,
        schedule: "Bi-weekly",
        focus: "Research skills",
        status: "Limited",
      },
    ],
  },
  {
    title: "Peer Counseling",
    description: "Get emotional support and guidance from trained peer counselors",
    icon: Heart,
    href: "/community/peer-support/counseling",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
    programs: [
      {
        title: "Stress Management",
        members: 40,
        schedule: "Weekly",
        focus: "Coping strategies",
        status: "Open",
      },
      {
        title: "Academic Pressure",
        members: 30,
        schedule: "Bi-weekly",
        focus: "Balance support",
        status: "Open",
      },
      {
        title: "Personal Growth",
        members: 25,
        schedule: "Weekly",
        focus: "Self-development",
        status: "Limited",
      },
    ],
  },
  {
    title: "Success Sharing",
    description: "Learn from and share experiences with successful students",
    icon: MessageSquare,
    href: "/community/peer-support/success",
    gradient: "from-orange-500/20 to-red-500/20",
    iconClass: "text-orange-500",
    programs: [
      {
        title: "Success Stories",
        members: 100,
        schedule: "Monthly",
        focus: "Experience sharing",
        status: "Open",
      },
      {
        title: "Achievement Talks",
        members: 50,
        schedule: "Bi-weekly",
        focus: "Motivation",
        status: "Open",
      },
      {
        title: "Goal Setting",
        members: 35,
        schedule: "Weekly",
        focus: "Planning",
        status: "Limited",
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

export function PeerSupportSection() {
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
            Peer Support Programs
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Connect with fellow students for support, guidance, and shared learning experiences.
            Join study groups, mentorship programs, and peer counseling sessions.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search programs..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Program
            </Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PEER_SUPPORT_PROGRAMS.map((program) => (
            <motion.div
              key={program.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      program.gradient
                    )}>
                      <program.icon className={cn(
                        "w-6 h-6",
                        program.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{program.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Available Programs</h3>
                      <ul className="space-y-4">
                        {program.programs.map((item, i) => (
                          <li key={i} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{item.title}</span>
                              <span className={cn(
                                "text-sm px-2 py-1 rounded-full",
                                item.status === "Open" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                              )}>
                                {item.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{item.members} members</span>
                              <span>•</span>
                              <span>{item.schedule}</span>
                              <span>•</span>
                              <span>{item.focus}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href={program.href}>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                        size="lg"
                      >
                        View Programs
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