"use client";

import { type Counseling } from "./CounselingData";
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
  Clock,
  FileText,
  Heart,
  IndianRupee,
  MapPin,
  Star,
  Users,
} from "lucide-react";

interface CounselingCardProps {
  counseling: Counseling;
}

export function CounselingCard({ counseling }: CounselingCardProps) {
  return (
    <div className="h-full">
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted h-full flex flex-col">
        <CardHeader className="flex-none">
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="text-xl">{counseling.name}</CardTitle>
            <Badge 
              variant={
                counseling.type === 'individual' ? 'default' :
                counseling.type === 'group' ? 'secondary' :
                counseling.type === 'crisis' ? 'destructive' :
                'outline'
              }
              className="shrink-0"
            >
              {counseling.type}
            </Badge>
          </div>
          <CardDescription className="text-base mt-2">
            {counseling.provider}
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
                  <DialogTitle className="pr-8 sm:pr-12">{counseling.name}</DialogTitle>
                  <Badge variant="outline" className="w-fit text-xs sm:text-sm">
                    {counseling.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">{counseling.provider}</span>
                </div>
              </DialogHeader>

              <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                    <h4 className="flex items-center gap-2 font-medium">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                      Counselor Information
                    </h4>
                    <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                      <p><strong>Name:</strong> {counseling.counselor.name}</p>
                      <p><strong>Credentials:</strong> {counseling.counselor.credentials}</p>
                      <p><strong>Experience:</strong> {counseling.counselor.experience}</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{counseling.counselor.rating} ({counseling.counselor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                    <h4 className="flex items-center gap-2 font-medium">
                      <IndianRupee className="h-4 w-4 sm:h-5 sm:w-5" />
                      Pricing & Duration
                    </h4>
                    <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                      <p><strong>Price:</strong> {counseling.price.amount}</p>
                      <p><strong>Duration:</strong> {counseling.duration}</p>
                      <p><strong>Frequency:</strong> {counseling.frequency}</p>
                      {counseling.price.insurance && (
                        <p><strong>Insurance:</strong> {counseling.price.insurance.join(", ")}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                  <h4 className="flex items-center gap-2 font-medium">
                    <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />
                    Availability
                  </h4>
                  <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p><strong>Schedule:</strong> {counseling.availability.schedule.join(", ")}</p>
                    <p><strong>Next Available:</strong> {new Date(counseling.availability.nextAvailable).toLocaleString()}</p>
                    {counseling.maxParticipants && (
                      <p><strong>Group Size:</strong> {counseling.currentParticipants}/{counseling.maxParticipants} participants</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                  <h4 className="flex items-center gap-2 font-medium">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    Location
                  </h4>
                  <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p><strong>Type:</strong> {counseling.location.type}</p>
                    {counseling.location.address && (
                      <p><strong>Address:</strong> {counseling.location.address}</p>
                    )}
                    {counseling.location.room && (
                      <p><strong>Room:</strong> {counseling.location.room}</p>
                    )}
                    {counseling.location.meetingLink && (
                      <p><strong>Meeting Link:</strong> {counseling.location.meetingLink}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                  <h4 className="flex items-center gap-2 font-medium">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                    Required Documents
                  </h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm sm:text-base text-muted-foreground">
                    {counseling.requiredDocuments.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>

                {counseling.emergencyContact && (
                  <div className="space-y-3 rounded-lg bg-red-50 p-4">
                    <h4 className="flex items-center gap-2 font-medium text-red-700">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                      Emergency Contact
                    </h4>
                    <p className="text-sm sm:text-base text-red-600">
                      {counseling.emergencyContact}
                    </p>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button asChild>
                    <a href={counseling.bookingLink} className="flex items-center gap-2">
                      Book Session
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