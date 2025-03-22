"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const TEAM_MEMBERS = [
  {
    name: "Dr. Sarah Johnson",
    role: "Director of Student Support",
    image: "/team/sarah.jpg",
    bio: "Dr. Johnson has over 15 years of experience in student support services and mental health counseling.",
  },
  {
    name: "Michael Chen",
    role: "Academic Advisor",
    image: "/team/michael.jpg",
    bio: "Michael specializes in helping students navigate their academic journey and career planning.",
  },
  {
    name: "Emily Rodriguez",
    role: "Mental Health Counselor",
    image: "/team/emily.jpg",
    bio: "Emily provides counseling services and leads workshops on stress management and well-being.",
  },
  {
    name: "David Kim",
    role: "Career Development Specialist",
    image: "/team/david.jpg",
    bio: "David helps students explore career opportunities and develop professional skills.",
  },
  {
    name: "Lisa Patel",
    role: "Financial Aid Advisor",
    image: "/team/lisa.jpg",
    bio: "Lisa assists students with financial planning, scholarships, and managing educational expenses.",
  },
  {
    name: "James Wilson",
    role: "Community Engagement Coordinator",
    image: "/team/james.jpg",
    bio: "James organizes student events and fosters a sense of community on campus.",
  },
];

export function TeamSection() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= TEAM_MEMBERS.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.max(0, TEAM_MEMBERS.length - itemsPerPage)
        : prevIndex - itemsPerPage
    );
  };

  const visibleMembers = TEAM_MEMBERS.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const renderTeamMember = (member: typeof TEAM_MEMBERS[0], index: number) => (
    <Dialog key={member.name}>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group relative cursor-pointer"
          role="button"
          aria-label={`View ${member.name}'s profile`}
        >
          <div className="aspect-square relative overflow-hidden rounded-lg bg-background">
            <Image
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              loading={index < 3 ? "eager" : "lazy"}
            />
            <div 
              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-white text-sm font-medium">
                View Profile
              </span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{member.name}</DialogTitle>
          <DialogDescription>{member.role}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-muted-foreground">{member.bio}</p>
        </div>
      </DialogContent>
    </Dialog>
  );

  if (!mounted) {
    return (
      <section className="w-full bg-background" aria-label="Team Members">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground">
              Our dedicated team of professionals is here to support you throughout your academic journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleMembers.map((member, index) => renderTeamMember(member, index))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
              aria-label="Previous team members"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
              aria-label="Next team members"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-background" aria-label="Team Members">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground">
            Our dedicated team of professionals is here to support you throughout your academic journey.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleMembers.map((member, index) => renderTeamMember(member, index))}
          </motion.div>

          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 lg:px-12 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full pointer-events-auto"
              aria-label="Previous team members"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full pointer-events-auto"
              aria-label="Next team members"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 