import { Gate } from "@/types/airport";

export const gates: Gate[] = [
  {
    id: '1',
    number: 'A1',
    terminal: 'Terminal 1',
    concourse: 'A',
    status: 'boarding',
    airline: 'Delta Airlines',
    flight: 'DL1234',
    destination: 'New York (JFK)',
    departureTime: '10:30 AM',
    walkingTime: 5,
    amenities: ['Charging Stations', 'Restrooms Nearby']
  },
  {
    id: '2',
    number: 'A2',
    terminal: 'Terminal 1',
    concourse: 'A',
    status: 'on-time',
    airline: 'American Airlines',
    flight: 'AA5678',
    destination: 'Los Angeles (LAX)',
    departureTime: '11:45 AM',
    walkingTime: 7,
    amenities: ['Charging Stations', 'Dining']
  },
  {
    id: '3',
    number: 'B5',
    terminal: 'Terminal 1',
    concourse: 'B',
    status: 'delayed',
    airline: 'United Airlines',
    flight: 'UA9012',
    destination: 'Chicago (ORD)',
    departureTime: '1:15 PM',
    walkingTime: 10,
    amenities: ['Restrooms Nearby', 'Shopping']
  },
  {
    id: '4',
    number: 'B8',
    terminal: 'Terminal 1',
    concourse: 'B',
    status: 'on-time',
    airline: 'Southwest',
    flight: 'SW3456',
    destination: 'Denver (DEN)',
    departureTime: '2:30 PM',
    walkingTime: 12,
    amenities: ['Charging Stations', 'Family Restroom']
  },
  {
    id: '5',
    number: 'C3',
    terminal: 'Terminal 2',
    concourse: 'C',
    status: 'departed',
    airline: 'JetBlue',
    flight: 'JB7890',
    destination: 'Boston (BOS)',
    departureTime: '9:00 AM',
    walkingTime: 8,
    amenities: ['Dining', 'Shopping']
  },
  {
    id: '6',
    number: 'C7',
    terminal: 'Terminal 2',
    concourse: 'C',
    status: 'boarding',
    airline: 'Delta Airlines',
    flight: 'DL2468',
    destination: 'Seattle (SEA)',
    departureTime: '3:45 PM',
    walkingTime: 9,
    amenities: ['Charging Stations', 'Dining']
  },
  {
    id: '7',
    number: 'D2',
    terminal: 'Terminal 2',
    concourse: 'D',
    status: 'on-time',
    airline: 'American Airlines',
    flight: 'AA1357',
    destination: 'Miami (MIA)',
    departureTime: '4:15 PM',
    walkingTime: 15,
    amenities: ['Restrooms Nearby', 'Shopping']
  },
  {
    id: '8',
    number: 'D6',
    terminal: 'Terminal 2',
    concourse: 'D',
    status: 'closed',
    airline: 'United Airlines',
    flight: 'UA8642',
    destination: 'San Francisco (SFO)',
    departureTime: '6:30 PM',
    walkingTime: 18,
    amenities: ['Charging Stations', 'Dining']
  },
  {
    id: '9',
    number: 'E1',
    terminal: 'Terminal 3',
    concourse: 'E',
    status: 'on-time',
    airline: 'Southwest',
    flight: 'SW4680',
    destination: 'Phoenix (PHX)',
    departureTime: '5:15 PM',
    walkingTime: 11,
    amenities: ['Family Restroom', 'Dining']
  },
  {
    id: '10',
    number: 'E5',
    terminal: 'Terminal 3',
    concourse: 'E',
    status: 'delayed',
    airline: 'JetBlue',
    flight: 'JB5793',
    destination: 'Orlando (MCO)',
    departureTime: '7:45 PM',
    walkingTime: 14,
    amenities: ['Charging Stations', 'Shopping']
  },
  {
    id: '11',
    number: 'F3',
    terminal: 'Terminal 3',
    concourse: 'F',
    status: 'on-time',
    airline: 'Delta Airlines',
    flight: 'DL9753',
    destination: 'Atlanta (ATL)',
    departureTime: '8:30 PM',
    walkingTime: 16,
    amenities: ['Restrooms Nearby', 'Dining']
  },
  {
    id: '12',
    number: 'F7',
    terminal: 'Terminal 3',
    concourse: 'F',
    status: 'boarding',
    airline: 'American Airlines',
    flight: 'AA6420',
    destination: 'Dallas (DFW)',
    departureTime: '9:15 PM',
    walkingTime: 20,
    amenities: ['Charging Stations', 'Shopping']
  }
];

export const getUniqueTerminals = (): string[] => {
  return [...new Set(gates.map(gate => gate.terminal))];
};

export const getUniqueConcourses = (): string[] => {
  return [...new Set(gates.map(gate => gate.concourse))];
};

export const getUniqueAirlines = (): string[] => {
  return [...new Set(gates.map(gate => gate.airline))];
};

export const getUniqueStatuses = (): string[] => {
  return [...new Set(gates.map(gate => gate.status))];
};