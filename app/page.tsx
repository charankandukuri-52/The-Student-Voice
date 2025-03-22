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
import { ArrowDown, Users, Award, BookOpen, Clock, Wallet, GraduationCap, Heart, Users2, Briefcase, Shield, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter: string;
    linkedin: string;
    email: string;
  };
  fullBio: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Charan Kandukuri",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&h=500&fit=crop",
    bio: "Visionary entrepreneur with a passion for educational innovation and student empowerment.",
    social: {
      twitter: "https://twitter.com/charan",
      linkedin: "https://linkedin.com/in/charan",
      email: "charan@studentvoice.com"
    },
    fullBio: "Charan is a visionary leader with over 15 years of experience in educational technology and student support services. He founded The Student Voice with a mission to democratize access to quality education and support services. His innovative approach has helped thousands of students achieve their academic and personal goals."
  },
  {
    name: "Priya Sharma",
    role: "Head of Student Success",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop",
    bio: "Educational psychologist specializing in academic performance and student well-being.",
    social: {
      twitter: "https://twitter.com/priya",
      linkedin: "https://linkedin.com/in/priya",
      email: "priya@studentvoice.com"
    },
    fullBio: "Priya brings over 12 years of experience in educational psychology and student support services. She has developed innovative programs that have significantly improved student retention and success rates."
  },
  {
    name: "Arjun Reddy",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&h=500&fit=crop",
    bio: "Experienced in building inclusive student communities and fostering meaningful connections.",
    social: {
      twitter: "https://twitter.com/arjun",
      linkedin: "https://linkedin.com/in/arjun",
      email: "arjun@studentvoice.com"
    },
    fullBio: "Arjun has successfully built and managed student communities across multiple institutions. His expertise in community engagement has helped create supportive environments for thousands of students."
  },
  {
    name: "Ananya Patel",
    role: "Mental Health Advocate",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop",
    bio: "Licensed therapist focused on student mental health and stress management.",
    social: {
      twitter: "https://twitter.com/ananya",
      linkedin: "https://linkedin.com/in/ananya",
      email: "ananya@studentvoice.com"
    },
    fullBio: "Ananya is a licensed therapist with expertise in student mental health and well-being. She has developed comprehensive mental health programs that have helped thousands of students manage stress and maintain emotional well-being."
  },
  {
    name: "Rahul Verma",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop",
    bio: "Tech innovator leading our digital transformation and platform development.",
    social: {
      twitter: "https://twitter.com/rahul",
      linkedin: "https://linkedin.com/in/rahul",
      email: "rahul@studentvoice.com"
    },
    fullBio: "Rahul leads our technical initiatives with over 10 years of experience in educational technology. He has spearheaded the development of our digital platform, ensuring it meets the evolving needs of students."
  },
  {
    name: "Meera Krishnan",
    role: "Academic Advisor",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=500&fit=crop",
    bio: "Expert in curriculum development and academic planning strategies.",
    social: {
      twitter: "https://twitter.com/meera",
      linkedin: "https://linkedin.com/in/meera",
      email: "meera@studentvoice.com"
    },
    fullBio: "Meera has extensive experience in academic advising and curriculum development. She has helped thousands of students create effective academic plans and achieve their educational goals."
  },
  {
    name: "Aditya Singh",
    role: "Career Counselor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
    bio: "Career development specialist helping students navigate their professional journey.",
    social: {
      twitter: "https://twitter.com/aditya",
      linkedin: "https://linkedin.com/in/aditya",
      email: "aditya@studentvoice.com"
    },
    fullBio: "Aditya specializes in career counseling and professional development. He has helped numerous students identify their career paths and secure meaningful employment opportunities."
  },
  {
    name: "Neha Gupta",
    role: "Student Engagement Lead",
    image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=500&h=500&fit=crop",
    bio: "Creating engaging programs to enhance student participation and leadership.",
    social: {
      twitter: "https://twitter.com/neha",
      linkedin: "https://linkedin.com/in/neha",
      email: "neha@studentvoice.com"
    },
    fullBio: "Neha is passionate about student engagement and leadership development. She has created numerous programs that have increased student participation and fostered leadership skills."
  },
  {
    name: "Vikram Malhotra",
    role: "Research Director",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&h=500&fit=crop",
    bio: "Leading research initiatives to improve student support methodologies.",
    social: {
      twitter: "https://twitter.com/vikram",
      linkedin: "https://linkedin.com/in/vikram",
      email: "vikram@studentvoice.com"
    },
    fullBio: "Vikram leads our research initiatives, focusing on improving student support methodologies. His research has contributed to the development of more effective student support programs."
  },
  {
    name: "Sanjana Iyer",
    role: "Wellness Coordinator",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=500&fit=crop",
    bio: "Promoting holistic wellness through comprehensive health programs.",
    social: {
      twitter: "https://twitter.com/sanjana",
      linkedin: "https://linkedin.com/in/sanjana",
      email: "sanjana@studentvoice.com"
    },
    fullBio: "Sanjana develops and implements comprehensive wellness programs that address students' physical, mental, and emotional well-being. Her initiatives have significantly improved student health outcomes."
  },
  {
    name: "Amit Kumar",
    role: "Innovation Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    bio: "Driving innovative solutions for student success and engagement.",
    social: {
      twitter: "https://twitter.com/amit",
      linkedin: "https://linkedin.com/in/amit",
      email: "amit@studentvoice.com"
    },
    fullBio: "Amit leads our innovation initiatives, developing new solutions to enhance student success and engagement. His work has introduced several cutting-edge features to our platform."
  },
  {
    name: "Divya Rajan",
    role: "Program Director",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=500&h=500&fit=crop",
    bio: "Overseeing the development and implementation of student support programs.",
    social: {
      twitter: "https://twitter.com/divya",
      linkedin: "https://linkedin.com/in/divya",
      email: "divya@studentvoice.com"
    },
    fullBio: "Divya oversees the development and implementation of all student support programs. Her strategic vision has helped expand our services to reach more students effectively."
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
      <section className="w-full relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            variants={fadeInUp} 
            className="max-w-3xl mx-auto text-center py-24 md:py-32"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl mb-6">
              The Student Voice
            </h1>
            <p className="text-muted-foreground sm:text-xl leading-relaxed mb-8">
              Your college journey is unique and transformative. We're here to help you navigate academic challenges,
              manage stress, and build meaningful connections while pursuing your educational goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="min-w-[140px]" asChild>
                <Link href="/resources">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[140px]" asChild>
                <Link href="/support">Get Support</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <Users className="h-6 w-6 text-primary mb-2" />
                <span className="text-2xl font-bold">10K+</span>
                <span className="text-sm text-muted-foreground">Active Students</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-6 w-6 text-primary mb-2" />
                <span className="text-2xl font-bold">95%</span>
                <span className="text-sm text-muted-foreground">Success Rate</span>
              </div>
              <div className="flex flex-col items-center">
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <span className="text-2xl font-bold">500+</span>
                <span className="text-sm text-muted-foreground">Resources</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-6 w-6 text-primary mb-2" />
                <span className="text-2xl font-bold">24/7</span>
                <span className="text-sm text-muted-foreground">Support</span>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </section>

      {/* Support Cards Section */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">How We Support You</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive support services designed to help you succeed in your academic journey.
            </p>
          </motion.div>
          <Suspense fallback={<Loading />}>
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto place-items-center"
            >
              {SUPPORT_CARDS.map((card, index) => (
                <Link href={card.href} key={index} className="group w-full max-w-sm">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <card.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{card.title}</CardTitle>
                          <CardDescription>{card.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{card.content}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">{card.stats}</span>
                        <ArrowDown className="h-4 w-4 text-muted-foreground group-hover:translate-y-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </motion.div>
          </Suspense>
          <motion.div 
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/support">View All Support Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full bg-background">
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-background cursor-pointer group">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="font-medium">View Profile</span>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{member.name}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 space-y-4">
                          <p className="text-primary font-medium">{member.role}</p>
                          <p className="text-muted-foreground">{member.fullBio}</p>
                          <div className="flex gap-4 justify-center">
                            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                              <Twitter className="h-5 w-5" />
                            </a>
                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                              <Linkedin className="h-5 w-5" />
                            </a>
                            <a href={`mailto:${member.social.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                              <Mail className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                    <div className="flex gap-4 justify-center mt-4">
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
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
    href: "/financial-aid",
    icon: Wallet,
    stats: "500+ Scholarships"
  },
  {
    title: "Academic Support",
    description: "Excel in your studies",
    content: "Get resources for course selection, study strategies, and academic planning.",
    href: "/academic-support",
    icon: GraduationCap,
    stats: "95% Success Rate"
  },
  {
    title: "Mental Health",
    description: "Support for your well-being",
    content: "Access counseling services, stress management techniques, and wellness resources.",
    href: "/mental-health",
    icon: Heart,
    stats: "24/7 Support"
  },
  {
    title: "Community Building",
    description: "Connect with peers",
    content: "Join student organizations and participate in campus events to build lasting relationships.",
    href: "/community",
    icon: Users2,
    stats: "100+ Groups"
  },
  {
    title: "Career Development",
    description: "Plan your future",
    content: "Explore internships, skill-building workshops, and placement preparation opportunities.",
    href: "/career",
    icon: Briefcase,
    stats: "1000+ Placements"
  },
  {
    title: "Campus Safety",
    description: "Stay safe and informed",
    content: "Learn about safety resources, reporting procedures, and campus policies.",
    href: "/safety",
    icon: Shield,
    stats: "24/7 Security"
  }
];
