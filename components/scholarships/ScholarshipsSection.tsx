"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  GraduationCap, 
  Users, 
  IndianRupee, 
  Calendar,
  FileText,
  Building2,
  GraduationCap as EducationIcon,
  Globe,
  Search,
  ExternalLink,
  CalendarDays
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { MOCK_SCHOLARSHIPS, type Scholarship } from "./ScholarshipData";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SCHOLARSHIP_TYPES = [
  { value: 'all', label: 'All Scholarships' },
  { value: 'government', label: 'Government' },
  { value: 'private', label: 'Private' },
  { value: 'international', label: 'International' }
] as const;

export default function ScholarshipsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<'all' | 'government' | 'private' | 'international'>('all');

  const filteredScholarships = MOCK_SCHOLARSHIPS.filter(scholarship => {
    const matchesSearch = 
      scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'all' || scholarship.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  const renderScholarshipCard = (scholarship: Scholarship) => (
    <div key={scholarship.id} className="h-full">
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted h-full flex flex-col">
        <CardHeader className="flex-none">
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="text-xl">{scholarship.name}</CardTitle>
            <Badge 
              variant={
                scholarship.type === 'government' ? 'default' :
                scholarship.type === 'private' ? 'secondary' :
                'outline'
              }
              className="shrink-0"
            >
              {scholarship.category}
            </Badge>
          </div>
          <CardDescription className="text-base mt-2">
            {scholarship.provider}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-4 sm:p-6 md:p-8">
              <DialogHeader className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <DialogTitle className="pr-8 sm:pr-12">{scholarship.name}</DialogTitle>
                  <Badge variant="outline" className="w-fit text-xs sm:text-sm">
                    {scholarship.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">{scholarship.provider}</span>
                </div>
              </DialogHeader>

              <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                    <h4 className="flex items-center gap-2 font-medium">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                      Eligibility Criteria
                    </h4>
                    <ul className="ml-6 list-disc space-y-2 text-sm sm:text-base text-muted-foreground">
                      {scholarship.eligibilityCriteria.map((criteria, index) => (
                        <li key={index}>{criteria}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                    <h4 className="flex items-center gap-2 font-medium">
                      <IndianRupee className="h-4 w-4 sm:h-5 sm:w-5" />
                      Scholarship Amount
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">{scholarship.amount}</p>
                  </div>
                </div>

                <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                  <h4 className="flex items-center gap-2 font-medium">
                    <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />
                    Application Deadline
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">{scholarship.deadline}</p>
                </div>

                <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                  <h4 className="flex items-center gap-2 font-medium">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                    Required Documents
                  </h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm sm:text-base text-muted-foreground">
                    {scholarship.requiredDocuments.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end">
                  <Button asChild>
                    <a href={scholarship.applicationLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Apply Now
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );

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
            Available Scholarships
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Explore government, private, and international scholarships available for Indian students.
          </p>
        </motion.div>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-96">
              <Label htmlFor="search" className="sr-only">Search scholarships</Label>
              <Input
                id="search"
                placeholder="Search scholarships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select
              value={selectedType}
              onValueChange={(value: typeof selectedType) => setSelectedType(value)}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                {SCHOLARSHIP_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredScholarships.length > 0 ? (
              filteredScholarships.map(renderScholarshipCard)
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No scholarships found matching your criteria.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 