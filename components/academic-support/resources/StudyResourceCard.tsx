"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Download, Clock, BookOpen } from "lucide-react";
import { format } from "date-fns";

interface StudyResource {
  id: string;
  title: string;
  description: string;
  type: string;
  subjects: string[];
  format: string;
  difficulty: string;
  rating: number;
  downloads: number;
  duration: string;
  dateAdded: string;
  thumbnail: string;
  url: string;
}

interface StudyResourceCardProps {
  resource: StudyResource;
}

export function StudyResourceCard({ resource }: StudyResourceCardProps) {
  const formattedDate = format(new Date(resource.dateAdded), "MMM d, yyyy");

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="w-24 h-24 rounded-lg bg-muted overflow-hidden flex-shrink-0">
            <img
              src={resource.thumbnail}
              alt={resource.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl leading-tight mb-2 line-clamp-2">{resource.title}</CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">{resource.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {resource.downloads.toLocaleString()} downloads
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{resource.type}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {resource.subjects.map((subject) => (
              <Badge key={subject} variant="secondary" className="text-xs">
                {subject}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{resource.duration}</span>
          </div>
          <Badge variant="outline" className="text-xs">{resource.difficulty}</Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{resource.description}</p>

        <div className="flex items-center justify-between pt-2">
          <div className="text-sm text-muted-foreground">
            Added {formattedDate}
          </div>
          <Button asChild size="sm">
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              Download
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 