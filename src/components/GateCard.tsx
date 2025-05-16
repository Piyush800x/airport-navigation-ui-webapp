import { Clock, MapPin, Plane, ArrowRight } from "lucide-react";
import type { Gate } from "@/types/airport";
import GateStatusBadge from "./GateStatusBadge";

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
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-900">
            {gate.number}
          </span>
          <span className="ml-2 text-sm text-gray-500">{gate.concourse}</span>
        </div>
        <GateStatusBadge status={gate.status} />
      </div>

      <div className="mb-3">
        <p className="font-semibold text-gray-800">{gate.airline}</p>
        <div className="flex items-center text-gray-600 mt-1">
          <span className="font-medium">{gate.flight}</span>
          <ArrowRight size={14} className="mx-2" />
          <span className="truncate">{gate.destination}</span>
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
