"use client";

import NavBar from "@/components/NavBar";
import type { Gate, FilterOptions } from "@/types/airport";
import { useState, useEffect } from "react";
import { gates } from "@/data/mockData";
import dynamic from "next/dynamic";
import GateFilters from "@/components/GateFilters";
import GateList from "@/components/GateList";
import GateDetails from "@/components/GateDetails";

const AirportMap = dynamic(() => import("@/components/AirportMap"), {
  ssr: false,
});

export default function Home() {
  const [filteredGates, setFilteredGates] = useState<Gate[]>(gates);
  const [selectedGate, setSelectedGate] = useState<Gate | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    terminal: "",
    concourse: "",
    airline: "",
    status: "",
    searchQuery: "",
  });

  const handleGateClick = (gate: Gate) => {
    setSelectedGate(gate);
  };

  const handleCloseDetail = () => {
    setSelectedGate(null);
  };

  useEffect(() => {
    const applyFilters = () => {
      let result = [...gates];

      // Apply terminal filter
      if (filters.terminal) {
        result = result.filter((gate) => gate.terminal === filters.terminal);
      }

      // Apply concourse filter
      if (filters.concourse) {
        result = result.filter((gate) => gate.concourse === filters.concourse);
      }

      // Apply airline filter
      if (filters.airline) {
        result = result.filter((gate) => gate.airline === filters.airline);
      }

      // Apply status filter
      if (filters.status) {
        result = result.filter((gate) => gate.status === filters.status);
      }

      // Apply search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        result = result.filter(
          (gate) =>
            gate.number.toLowerCase().includes(query) ||
            gate.airline.toLowerCase().includes(query) ||
            gate.flight.toLowerCase().includes(query) ||
            gate.destination.toLowerCase().includes(query)
        );
      }

      setFilteredGates(result);
    };

    applyFilters();
  }, [filters]);

  return (
    <div>
      <NavBar />
      <main className="container mx-auto px-4">
        {/* Conditional Rendering */}
        {selectedGate ? (
          // Show Map and GateDetails when a gate is selected
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="sticky top-20 h-[calc(100vh-8rem)] transition-all duration-300 ease-in-out animate-fade-in">
              <AirportMap
                gates={filteredGates}
                selectedGate={selectedGate}
                onGateClick={handleGateClick}
              />
            </div>
            <div className="animate-slide-in mt-8">
              <GateDetails gate={selectedGate} onClose={handleCloseDetail} />
            </div>
          </div>
        ) : (
          // Show Filters, Map, and GateList when no gate is selected
          <>
            <div className="w-full transition-all duration-300 ease-in-out">
              <AirportMap
                gates={filteredGates}
                selectedGate={selectedGate}
                onGateClick={handleGateClick}
              />
            </div>

            <GateFilters
              filters={filters}
              setFilters={setFilters}
              isFilterOpen={isFilterOpen}
              setIsFilterOpen={setIsFilterOpen}
            />

            <div className="transition-all duration-300 ease-in-out">
              <GateList gates={filteredGates} onGateClick={handleGateClick} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}
