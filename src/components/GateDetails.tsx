import type { Gate } from "@/types/airport";
import {
  X,
  Clock,
  MapPin,
  Plane,
  Info,
  Wifi,
  Coffee,
  ShoppingBag,
} from "lucide-react";
import GateStatusBadge from "./GateStatusBadge";

interface GateDetailsProps {
  gate: Gate | null;
  onClose: () => void;
}

export default function GateDetails({ gate, onClose }: GateDetailsProps) {
  if (!gate) return null;

  //   const getAmenityIcon = (amenity: string) => {
  //     if (amenity.includes("Charging")) return <Wifi className="w-4 h-4 mr-2" />;
  //     if (amenity.includes("Restroom")) return <Info className="w-4 h-4 mr-2" />;
  //     if (amenity.includes("Dining")) return <Coffee className="w-4 h-4 mr-2" />;
  //     if (amenity.includes("Shopping"))
  //       return <ShoppingBag className="w-4 h-4 mr-2" />;
  //     return <Info className="w-4 h-4 mr-2" />;
  //   };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gate {gate.number}</h2>
          <p className="text-gray-600">
            {gate.terminal} • {gate.concourse}
          </p>
        </div>
        <GateStatusBadge status={gate.status} />
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-700">Flight Details</h3>
          <p className="text-lg">
            {gate.flight} to {gate.destination}
          </p>
          <p className="text-gray-600">{gate.airline}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Time Information</h3>
          <p>Departure: {gate.departureTime}</p>
          <p>Walking time: {gate.walkingTime} minutes</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Amenities</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {gate.amenities.map((amenity) => (
              <span
                key={amenity}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
