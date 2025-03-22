"use client";

import { motion } from "framer-motion";
import { BadgeIndianRupee, GraduationCap, Briefcase } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const FINANCIAL_AID_OPTIONS = [
  {
    title: "Scholarships",
    description: "National and state-level scholarship opportunities",
    icon: GraduationCap,
    details: [
      "Merit-based scholarships for academic excellence",
      "Caste-based reservations and support",
      "Need-based financial assistance programs",
      "Sports and extracurricular achievement scholarships",
    ],
    cta: "Explore Scholarships",
    href: "/scholarships",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconClass: "text-blue-500",
  },
  {
    title: "Student Loans",
    description: "Understanding loan options for higher education",
    icon: BadgeIndianRupee,
    details: [
      "Low-interest education loans",
      "Flexible repayment plans",
      "Government-backed loan schemes",
      "Private bank education loans",
    ],
    cta: "View Loan Options",
    href: "/loans",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconClass: "text-green-500",
  },
  {
    title: "On-Campus Work",
    description: "Part-time job opportunities for students",
    icon: Briefcase,
    details: [
      "Teaching assistant positions",
      "Library and administrative roles",
      "Research assistant opportunities",
      "Campus ambassador programs",
    ],
    cta: "Find Work Opportunities",
    href: "/work-opportunities",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconClass: "text-purple-500",
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

export default function FinancialAidSection() {
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
            Financial Aid Options
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We understand that financing your education is a crucial decision. 
            Explore our comprehensive range of financial support options designed to help you achieve your academic goals.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FINANCIAL_AID_OPTIONS.map((option, index) => (
            <motion.div
              key={option.title}
              variants={fadeInUp}
              className="flex"
            >
              <Card className="flex flex-col w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      option.gradient
                    )}>
                      <option.icon className={cn(
                        "w-6 h-6",
                        option.iconClass
                      )} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{option.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <ul className="space-y-3 mb-6">
                    {option.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={cn(
                          "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                          option.iconClass
                        )} />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                      size="lg"
                    >
                      <Link href={option.href}>{option.cta}</Link>
                    </Button>
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