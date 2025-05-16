export interface Gate {
  id: string;
  number: string;
  terminal: string;
  concourse: string;
  status: 'boarding' | 'on-time' | 'delayed' | 'closed' | 'departed';
  airline: string;
  flight: string;
  destination: string;
  departureTime: string;
  walkingTime: number; // in minutes
  amenities: string[];
}

export interface FilterOptions {
  terminal: string;
  concourse: string;
  airline: string;
  status: string;
  searchQuery: string;
}

interface AirportMapProps {
  gates: Gate[];
  selectedGate: Gate | null;
  onGateClick: (gate: Gate) => void;
}

