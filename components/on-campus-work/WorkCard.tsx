"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Building2, CalendarDays, GraduationCap, IndianRupee, Tag } from "lucide-react";
import { type Work } from "./WorkData";

interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="h-full">
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted h-full flex flex-col">
        <CardHeader className="flex-none">
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="text-xl">{work.name}</CardTitle>
            <Badge 
              variant={
                work.type === 'teaching' ? 'default' :
                work.type === 'research' ? 'secondary' :
                work.type === 'administrative' ? 'outline' :
                work.type === 'library' ? 'destructive' :
                'default'
              }
              className="shrink-0"
            >
              {work.type.charAt(0).toUpperCase() + work.type.slice(1)}
            </Badge>
          </div>
          <CardDescription className="text-base mt-2">
            {work.department}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="gap-1">
                  <Tag className="h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <IndianRupee className="h-4 w-4" />
                <span>{work.stipend}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>Deadline: {work.deadline}</span>
              </div>
              {work.hoursPerWeek && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  <span>{work.hoursPerWeek} hours/week</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex-none">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">View Details</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-4 sm:p-6 md:p-8">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <DialogTitle className="text-2xl">{work.name}</DialogTitle>
                    <DialogDescription className="text-lg mt-2">
                      {work.department}
                    </DialogDescription>
                  </div>
                  <Badge 
                    variant={
                      work.type === 'teaching' ? 'default' :
                      work.type === 'research' ? 'secondary' :
                      work.type === 'administrative' ? 'outline' :
                      work.type === 'library' ? 'destructive' :
                      'default'
                    }
                    className="shrink-0"
                  >
                    {work.type.charAt(0).toUpperCase() + work.type.slice(1)}
                  </Badge>
                </div>
              </DialogHeader>

              <ScrollArea className="h-[calc(100vh-12rem)] mt-6">
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                      <h4 className="flex items-center gap-2 font-medium">
                        <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                        Eligibility Criteria
                      </h4>
                      <ul className="ml-6 list-disc space-y-2 text-sm sm:text-base text-muted-foreground">
                        {work.eligibilityCriteria.map((criteria, index) => (
                          <li key={index}>{criteria}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                      <h4 className="flex items-center gap-2 font-medium">
                        <IndianRupee className="h-4 w-4 sm:h-5 sm:w-5" />
                        Work Details
                      </h4>
                      <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                        <p>Stipend: {work.stipend}</p>
                        <p>Work Status: {work.workStatus.charAt(0).toUpperCase() + work.workStatus.slice(1)}</p>
                        {work.hoursPerWeek && (
                          <p>Hours per Week: {work.hoursPerWeek}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                    <h4 className="flex items-center gap-2 font-medium">
                      <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      Required Documents
                    </h4>
                    <ul className="ml-6 list-disc space-y-2 text-sm sm:text-base text-muted-foreground">
                      {work.requiredDocuments.map((doc, index) => (
                        <li key={index}>{doc}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                    <h4 className="flex items-center gap-2 font-medium">
                      <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />
                      Application Status
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {work.applicationStatus.charAt(0).toUpperCase() + work.applicationStatus.slice(1)}
                    </p>
                  </div>
                </div>
              </ScrollArea>

              <div className="mt-6">
                <Button asChild className="w-full">
                  <a href={work.applicationLink} target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
} 