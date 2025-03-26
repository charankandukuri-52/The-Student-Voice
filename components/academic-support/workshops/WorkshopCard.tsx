"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Calendar, Clock, Users, MapPin, Video } from "lucide-react";
import { format } from "date-fns";

interface Workshop {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  format: string;
  duration: string;
  date: Date;
  capacity: number;
  enrolled: number;
  location: string;
  instructor: {
    name: string;
    title: string;
    image: string;
  };
  rating: number;
  reviews: number;
  price: number;
  thumbnail: string;
}

interface WorkshopCardProps {
  workshop: Workshop;
}

export function WorkshopCard({ workshop }: WorkshopCardProps) {
  return (
    <div className="h-full">
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted flex flex-col">
        <div className="relative">
          <img
            src={workshop.thumbnail}
            alt={workshop.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm">
            {workshop.format}
          </Badge>
        </div>
        <CardHeader className="flex-none">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-muted overflow-hidden flex-shrink-0">
              <img
                src={workshop.instructor.image}
                alt={workshop.instructor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-xl leading-tight mb-1">{workshop.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{workshop.instructor.name}</span>
                <span>•</span>
                <span>{workshop.instructor.title}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{workshop.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({workshop.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">
                {workshop.category}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {workshop.level}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{workshop.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{format(workshop.date, "MMM d, yyyy")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{workshop.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{workshop.enrolled}/{workshop.capacity} enrolled</span>
              </div>
              {workshop.format !== "Online" && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{workshop.location}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t mt-4">
            <div className="text-lg font-semibold">
              {workshop.price === 0 ? "Free" : `$${workshop.price}`}
            </div>
            <Button size="sm" asChild>
              <a href={`/academic-support/workshops/${workshop.id}`}>
                Learn More
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 