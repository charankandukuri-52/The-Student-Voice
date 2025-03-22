"use client"

import { Suspense } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Loading from './loading';
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const TEAM_MEMBERS = [
  {
    name: "Charan Kandukuri",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&h=500&fit=crop",
    bio: "Visionary entrepreneur with a passion for educational innovation and student empowerment."
  },
  {
    name: "Priya Sharma",
    role: "Head of Student Success",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop",
    bio: "Educational psychologist specializing in academic performance and student well-being."
  },
  {
    name: "Arjun Reddy",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&h=500&fit=crop",
    bio: "Experienced in building inclusive student communities and fostering meaningful connections."
  },
  {
    name: "Ananya Patel",
    role: "Mental Health Advocate",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop",
    bio: "Licensed therapist focused on student mental health and stress management."
  },
  {
    name: "Rahul Verma",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop",
    bio: "Tech innovator leading our digital transformation and platform development."
  },
  {
    name: "Meera Krishnan",
    role: "Academic Advisor",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=500&fit=crop",
    bio: "Expert in curriculum development and academic planning strategies."
  },
  {
    name: "Aditya Singh",
    role: "Career Counselor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
    bio: "Career development specialist helping students navigate their professional journey."
  },
  {
    name: "Neha Gupta",
    role: "Student Engagement Lead",
    image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=500&h=500&fit=crop",
    bio: "Creating engaging programs to enhance student participation and leadership."
  },
  {
    name: "Vikram Malhotra",
    role: "Research Director",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&h=500&fit=crop",
    bio: "Leading research initiatives to improve student support methodologies."
  },
  {
    name: "Sanjana Iyer",
    role: "Wellness Coordinator",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=500&fit=crop",
    bio: "Promoting holistic wellness through comprehensive health programs."
  },
  {
    name: "Amit Kumar",
    role: "Innovation Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    bio: "Driving innovative solutions for student success and engagement."
  },
  {
    name: "Divya Rajan",
    role: "Program Director",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=500&h=500&fit=crop",
    bio: "Overseeing the development and implementation of student support programs."
  }
];

export default function Home() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="flex flex-col items-center justify-center w-full"
    >
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl mb-6">
              The Student Voice
            </h1>
            <p className="text-muted-foreground sm:text-xl leading-relaxed">
              Your college journey is unique and transformative. We're here to help you navigate academic challenges,
              manage stress, and build meaningful connections while pursuing your educational goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button size="lg" className="min-w-[140px]" asChild>
                <Link href="/resources">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[140px]" asChild>
                <Link href="/support">Get Support</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Cards Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <Suspense fallback={<Loading />}>
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {SUPPORT_CARDS.map((card, index) => (
              <Link href={card.href} key={index} className="transition-transform hover:scale-[1.02] duration-300">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{card.content}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </motion.div>
        </Suspense>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full bg-muted/50">
        <motion.div 
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-4 py-16 md:py-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to supporting your educational journey
              and personal growth.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {TEAM_MEMBERS.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    variants={fadeInUp}
                    className="text-center p-4"
                  >
                    <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full">
        <motion.div 
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-4 py-16 md:py-24"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg mb-8">
              At The Student Voice, we believe every student deserves a supportive environment to thrive academically and personally. Our platform is built on three core principles:
            </p>
            <div className="space-y-6 text-left">
              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <span className="flex-none w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">1</span>
                <div>
                  <h3 className="font-semibold mb-2">Academic Excellence</h3>
                  <p className="text-muted-foreground">Empowering students with resources and tools for academic success, ensuring every student has the support they need to excel.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <span className="flex-none w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">2</span>
                <div>
                  <h3 className="font-semibold mb-2">Mental Well-being</h3>
                  <p className="text-muted-foreground">Creating a supportive community that fosters mental well-being, providing resources and guidance for balanced student life.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <span className="flex-none w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">3</span>
                <div>
                  <h3 className="font-semibold mb-2">Career Development</h3>
                  <p className="text-muted-foreground">Providing personalized guidance for career development, helping students prepare for their future professional journey.</p>
                </div>
              </motion.div>
            </div>
    </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

const SUPPORT_CARDS = [
  {
    title: "Financial Aid",
    description: "Navigate funding opportunities",
    content: "Access scholarships, grants, and expert guidance on student loans and repayment plans.",
    href: "/financial-aid"
  },
  {
    title: "Academic Support",
    description: "Excel in your studies",
    content: "Get resources for course selection, study strategies, and academic planning.",
    href: "/academic-support"
  },
  {
    title: "Mental Health",
    description: "Support for your well-being",
    content: "Access counseling services, stress management techniques, and wellness resources.",
    href: "/mental-health"
  },
  {
    title: "Community Building",
    description: "Connect with peers",
    content: "Join student organizations and participate in campus events to build lasting relationships.",
    href: "/community"
  },
  {
    title: "Career Development",
    description: "Plan your future",
    content: "Explore internships, skill-building workshops, and placement preparation opportunities.",
    href: "/career"
  },
  {
    title: "Campus Safety",
    description: "Stay safe and informed",
    content: "Learn about safety resources, reporting procedures, and campus policies.",
    href: "/safety"
  }
];
