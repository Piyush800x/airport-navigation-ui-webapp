import { Clock, MapPin, Plane, ArrowRight } from "lucide-react";
import type { Gate } from "@/types/airport";
import GateStatusBadge from "./GateStatusBadge";
import Image from "next/image";
import { airlineLogos } from "./GateDetails";

interface GateCardProps {
  gate: Gate;
  onClick: (gate: Gate) => void;
}

export default function GateCard({ gate, onClick }: GateCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md border border-gray-100 p-4 transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
      onClick={() => onClick(gate)}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">{gate.number}</span>
          <span className="text-sm text-gray-500">{gate.terminal}</span>
        </div>
        <GateStatusBadge status={gate.status} />
      </div>

      <div className="mb-4">
        <div className="h-8 relative mb-2">
          <Image
            src={airlineLogos[gate.airline]}
            alt={`${gate.airline} logo`}
            className="object-contain"
            fill
            sizes="200px"
            priority
          />
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="font-medium">{gate.flight}</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span>{gate.destination}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-gray-600">
        <div className="flex items-center">
          <Clock size={14} className="mr-1" />
          <span>{gate.departureTime}</span>
        </div>
        <div className="flex items-center">
          <MapPin size={14} className="mr-1" />
          <span>{gate.terminal}</span>
        </div>
        <div className="flex items-center">
          <Plane size={14} className="mr-1" />
          <span>{gate.walkingTime} min walk</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          {gate.amenities.map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
