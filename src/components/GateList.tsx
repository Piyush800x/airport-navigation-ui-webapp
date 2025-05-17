import type { Gate } from "@/types/airport";
import GateCard from "./GateCard";
import { motion } from "framer-motion";

interface GateListProps {
  gates: Gate[];
  onGateClick: (gate: Gate) => void;
}

export default function GateList({ gates, onGateClick }: GateListProps) {
  if (gates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200 p-8">
        <svg
          className="w-16 h-16 text-gray-300 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
        <h3 className="text-lg font-medium text-gray-700 mb-1">
          No gates found
        </h3>
        <p className="text-gray-500 text-center">
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {gates.map((gate) => (
        <motion.div
          key={gate.id}
          className="bg-white rounded-lg shadow-md border border-gray-100 p-4 transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
          onClick={() => onGateClick(gate)}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <GateCard gate={gate} onClick={onGateClick} />
        </motion.div>
      ))}
    </motion.div>
  );
}
