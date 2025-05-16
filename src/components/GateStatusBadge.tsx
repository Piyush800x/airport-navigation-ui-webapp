import type { Gate } from "@/types/airport";

interface GateStatusBadgeProps {
  status: Gate["status"];
}

export default function GateStatusBadge({ status }: GateStatusBadgeProps) {
  const getStatusColors = () => {
    switch (status) {
      case "boarding":
        return "bg-green-100 text-green-800 border-green-200";
      case "on-time":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "delayed":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "closed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "departed":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "boarding":
        return "Boarding";
      case "on-time":
        return "On Time";
      case "delayed":
        return "Delayed";
      case "closed":
        return "Closed";
      case "departed":
        return "Departed";
      default:
        return status;
    }
  };

  return (
    <span
      className={`px-2.5 py-1 text-xs font-medium rounded-full border ${getStatusColors()} transition-colors duration-200`}
    >
      {getStatusText()}
    </span>
  );
}
