import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Clock,
  MapPin,
  Plane,
  ArrowLeft,
  Wifi,
  Coffee,
  ShoppingBag,
  Info,
} from "lucide-react";
import type { Gate } from "@/types/airport";
import GateStatusBadge from "./GateStatusBadge";
import Image from "next/image";

interface GateDetailsProps {
  gate: Gate | null;
  onClose: () => void;
}

export const airlineLogos: Record<string, string> = {
  "Air India":
    "https://logos-world.net/wp-content/uploads/2023/02/Air-India-Logo.png",
  IndiGo: "https://logos-world.net/wp-content/uploads/2023/01/IndiGo-Logo.png",
  Vistara:
    "https://logos-world.net/wp-content/uploads/2023/06/Vistara-Logo.png",
  SpiceJet:
    "https://logos-world.net/wp-content/uploads/2023/01/SpiceJet-Logo.png",
  "Air Asia":
    "https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo.png",
  "Singapore Airlines":
    "https://logos-world.net/wp-content/uploads/2023/01/Singapore-Airlines-Logo.png",
  Emirates:
    "https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo.png",
  "Thai Airways":
    "https://logos-world.net/wp-content/uploads/2023/01/Thai-Airways-International-Logo.png",
  "Malaysia Airlines":
    "https://logos-world.net/wp-content/uploads/2023/01/Malaysia-Airlines-Logo.png",
};

export default function GateDetails({ gate, onClose }: GateDetailsProps) {
  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes("Charging")) return <Wifi className="h-4 w-4" />;
    if (amenity.includes("Restroom")) return <Info className="h-4 w-4" />;
    if (amenity.includes("Dining")) return <Coffee className="h-4 w-4" />;
    if (amenity.includes("Shopping"))
      return <ShoppingBag className="h-4 w-4" />;
    return <Info className="h-4 w-4" />;
  };

  if (!gate) return null;

  return (
    <Card className="overflow-hidden bg-white shadow-lg border transition-all duration-300 ease-in-out hover:shadow-xl animate-slide-in">
      <CardHeader className="pb-4 space-y-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to gates
          </Button>
        </div>
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <div>
              <CardTitle className="text-3xl font-bold">
                Gate {gate.number}
              </CardTitle>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                {gate.terminal} • {gate.concourse}
              </p>
            </div>
            <span className="text-base font-medium text-gray-600">
              {gate.airline}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-28">
                <Image
                  src={airlineLogos[gate.airline]}
                  alt={`${gate.airline} logo`}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
              <GateStatusBadge status={gate.status} />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-8 p-6">
        {/* Flight Details */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
            Flight Details
          </h3>
          <div className="p-4 bg-gray-50 rounded-lg space-y-3">
            <div className="flex items-center gap-3">
              <Plane className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">{gate.flight}</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-lg">{gate.destination}</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              {gate.airline}
            </p>
          </div>
        </div>

        {/* Time Information */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
            Time Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Departure</p>
                <p className="font-semibold">{gate.departureTime}</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Walking Time</p>
                <p className="font-semibold">{gate.walkingTime} minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
            Nearby Amenities
          </h3>
          <div className="flex flex-wrap gap-2">
            {gate.amenities.map((amenity) => (
              <Badge
                key={amenity}
                variant="secondary"
                className="px-3 py-1.5 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {getAmenityIcon(amenity)}
                <span className="ml-1.5">{amenity}</span>
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
