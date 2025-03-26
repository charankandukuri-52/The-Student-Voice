"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Tutor {
  id: string;
  name: string;
  subjects: string[];
  experience: number;
  rating: number;
  availability: string[];
  hourlyRate: number;
  image: string;
  bio: string;
}

interface TutoringCardProps {
  tutor: Tutor;
}

export function TutoringCard({ tutor }: TutoringCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl">{tutor.name}</CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">{tutor.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {tutor.experience} years experience
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Subjects</h4>
            <div className="flex flex-wrap gap-2">
              {tutor.subjects.map((subject) => (
                <Badge key={subject} variant="secondary">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Availability</h4>
            <div className="flex flex-wrap gap-2">
              {tutor.availability.map((time) => (
                <Badge key={time} variant="outline">
                  {time}
                </Badge>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">{tutor.bio}</p>

          <div className="flex items-center justify-between pt-4">
            <div className="text-lg font-semibold">
              ₹{tutor.hourlyRate}/hour
            </div>
            <Button>Book Session</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 