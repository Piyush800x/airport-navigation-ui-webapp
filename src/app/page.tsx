"use client";
// import AirportMap from "@/components/AirportMap";
import NavBar from "@/components/NavBar";
import type { Gate } from "@/types/airport";
import { useState } from "react";
import { gates } from "@/data/mockData";
import dynamic from "next/dynamic";

const AirportMap = dynamic(() => import("@/components/AirportMap"), {
  ssr: false,
});

export default function Home() {
  const [filteredGates, setFilteredGates] = useState<Gate[]>(gates);
  const [selectedGate, setSelectedGate] = useState<Gate | null>(null);

  const handleGateClick = (gate: Gate) => {
    setSelectedGate(gate);
  };

  const handleCloseDetail = () => {
    setSelectedGate(null);
  };

  return (
    <main>
      <NavBar />
      <AirportMap
        gates={filteredGates}
        selectedGate={selectedGate}
        onGateClick={handleGateClick}
      />
    </main>
  );
}
