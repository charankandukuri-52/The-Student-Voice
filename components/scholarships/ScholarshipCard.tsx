"use client";

import { type Scholarship } from "./ScholarshipData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Building2,
  CalendarDays,
  FileText,
  GraduationCap,
  IndianRupee,
  ExternalLink,
} from "lucide-react";

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  return (
    <div className="h-full">
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
} 