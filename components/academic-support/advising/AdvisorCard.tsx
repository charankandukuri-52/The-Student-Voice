"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Calendar, Briefcase, GraduationCap, Clock } from "lucide-react";

interface Advisor {
  id: string;
  name: string;
  title: string;
  department: string;
  specializations: string[];
  experience: string;
  rating: number;
  reviews: number;
  availability: string;
  bio: string;
  image: string;
  email: string;
}

interface AdvisorCardProps {
  advisor: Advisor;
}

export function AdvisorCard({ advisor }: AdvisorCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="w-24 h-24 rounded-full bg-muted overflow-hidden flex-shrink-0">
            <img
              src={advisor.image}
              alt={advisor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl leading-tight mb-1">{advisor.name}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="w-4 h-4" />
              <span>{advisor.title}</span>
              <span>•</span>
              <span>{advisor.department}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">{advisor.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({advisor.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{advisor.experience}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {advisor.specializations.map((spec) => (
              <Badge key={spec} variant="secondary" className="text-xs">
                {spec}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{advisor.availability}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>30 min sessions</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{advisor.bio}</p>

        <div className="flex items-center justify-between pt-2">
          <Button variant="outline" size="sm" asChild>
            <a href={`mailto:${advisor.email}`}>
              Contact
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={`/academic-support/advising/schedule/${advisor.id}`}>
              Schedule Meeting
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 