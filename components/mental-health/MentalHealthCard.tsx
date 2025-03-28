"use client";

import { type MentalHealthService } from "./MentalHealthData";
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

interface MentalHealthCardProps {
  service: MentalHealthService;
}

export function MentalHealthCard({ service }: MentalHealthCardProps) {
  return (
    <div className="h-full">
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-muted h-full flex flex-col">
        <CardHeader className="flex-none">
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="text-xl">{service.name}</CardTitle>
            <Badge 
              variant={
                service.type === 'counseling' ? 'default' :
                service.type === 'wellness' ? 'secondary' :
                'outline'
              }
              className="shrink-0"
            >
              {service.type}
            </Badge>
          </div>
          <CardDescription className="text-base mt-2">
            {service.provider}
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
                  <DialogTitle className="pr-8 sm:pr-12">{service.name}</DialogTitle>
                  <Badge variant="outline" className="w-fit text-xs sm:text-sm">
                    {service.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">{service.provider}</span>
                </div>
              </DialogHeader>

              <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                    <h4 className="flex items-center gap-2 font-medium">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                      Facilitator Information
                    </h4>
                    <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                      <p><strong>Name:</strong> {service.facilitator.name}</p>
                      <p><strong>Credentials:</strong> {service.facilitator.credentials}</p>
                      <p><strong>Experience:</strong> {service.facilitator.experience}</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{service.facilitator.rating} ({service.facilitator.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                    <h4 className="flex items-center gap-2 font-medium">
                      <IndianRupee className="h-4 w-4 sm:h-5 sm:w-5" />
                      Pricing & Duration
                    </h4>
                    <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                      <p><strong>Price:</strong> {service.price.amount}</p>
                      <p><strong>Duration:</strong> {service.duration}</p>
                      <p><strong>Schedule:</strong> {service.schedule.type}</p>
                      {service.price.insurance && (
                        <p><strong>Insurance:</strong> {service.price.insurance.join(", ")}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                  <h4 className="flex items-center gap-2 font-medium">
                    <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />
                    Schedule
                  </h4>
                  <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p><strong>Days:</strong> {service.schedule.days.join(", ")}</p>
                    <p><strong>Time:</strong> {service.schedule.time}</p>
                    <p><strong>Next Available:</strong> {new Date(service.schedule.nextAvailable).toLocaleString()}</p>
                    {service.maxParticipants && (
                      <p><strong>Group Size:</strong> {service.currentParticipants}/{service.maxParticipants} participants</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                  <h4 className="flex items-center gap-2 font-medium">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    Location
                  </h4>
                  <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p><strong>Type:</strong> {service.location.type}</p>
                    {service.location.address && (
                      <p><strong>Address:</strong> {service.location.address}</p>
                    )}
                    {service.location.room && (
                      <p><strong>Room:</strong> {service.location.room}</p>
                    )}
                    {service.location.meetingLink && (
                      <p><strong>Meeting Link:</strong> {service.location.meetingLink}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                  <h4 className="flex items-center gap-2 font-medium">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                    Required Documents
                  </h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm sm:text-base text-muted-foreground">
                    {service.requiredDocuments.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>

                {service.emergencyContact && (
                  <div className="space-y-3 rounded-lg bg-red-50 p-4">
                    <h4 className="flex items-center gap-2 font-medium text-red-700">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                      Emergency Contact
                    </h4>
                    <p className="text-sm sm:text-base text-red-600">
                      {service.emergencyContact}
                    </p>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button asChild>
                    <a href={service.registrationLink} className="flex items-center gap-2">
                      Register Now
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