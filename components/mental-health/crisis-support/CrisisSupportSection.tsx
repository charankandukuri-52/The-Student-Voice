"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Heart, Shield, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CRISIS_RESOURCES = [
  {
    title: "24/7 Crisis Helpline",
    description: "Immediate support from trained professionals",
    icon: Phone,
    gradient: "from-red-500 to-orange-500",
    contact: "1-800-273-8255",
    hours: "24/7",
  },
  {
    title: "Crisis Text Line",
    description: "Free 24/7 text support with a crisis counselor",
    icon: MessageCircle,
    gradient: "from-blue-500 to-purple-500",
    contact: "Text HOME to 741741",
    hours: "24/7",
  },
  {
    title: "Emergency Services",
    description: "Immediate emergency response for life-threatening situations",
    icon: Shield,
    gradient: "from-green-500 to-teal-500",
    contact: "911",
    hours: "24/7",
  },
];

const SAFETY_PLAN = [
  {
    title: "Identify Warning Signs",
    description: "Recognize early signs of crisis",
    icon: Clock,
  },
  {
    title: "Coping Strategies",
    description: "Practice healthy coping mechanisms",
    icon: Heart,
  },
  {
    title: "Support Network",
    description: "Connect with trusted individuals",
    icon: MessageCircle,
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CrisisSupportSection() {
  return (
    <section className="py-12">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeIn} className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Crisis Support
          </h1>
          <p className="text-lg text-muted-foreground">
            Immediate help and resources for mental health crises
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CRISIS_RESOURCES.map((resource, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="p-6 bg-card border-muted hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center mb-4">
                  <div
                    className={cn(
                      "p-3 rounded-full bg-gradient-to-br text-white mr-4",
                      resource.gradient
                    )}
                  >
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{resource.title}</h3>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-medium">{resource.contact}</p>
                  <p className="text-sm text-muted-foreground">Available: {resource.hours}</p>
                </div>
                <Button className="w-full mt-4" variant="destructive">
                  Call Now
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Safety Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Steps to help you through difficult times
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAFETY_PLAN.map((step, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="p-6 bg-card border-muted hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 