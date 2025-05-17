import { Gate } from "@/types/airport";

export const gates: Gate[] = [
  {
    id: '1',
    number: '1A',
    terminal: 'Terminal 2',
    concourse: 'A',
    status: 'boarding',
    airline: 'Air India',
    flight: 'AI676',
    destination: 'Mumbai (BOM)',
    departureTime: '10:30 AM',
    walkingTime: 5,
    amenities: ['Charging Stations', 'Restrooms Nearby']
  },
  {
    id: '2',
    number: '2A',
    terminal: 'Terminal 2',
    concourse: 'A',
    status: 'on-time',
    airline: 'IndiGo',
    flight: '6E293',
    destination: 'Delhi (DEL)',
    departureTime: '11:45 AM',
    walkingTime: 7,
    amenities: ['Charging Stations', 'Dining']
  },
  {
    id: '3',
    number: '3B',
    terminal: 'Terminal 2',
    concourse: 'B',
    status: 'delayed',
    airline: 'Vistara',
    flight: 'UK747',
    destination: 'Bangalore (BLR)',
    departureTime: '1:15 PM',
    walkingTime: 10,
    amenities: ['Restrooms Nearby', 'Shopping']
  },
  {
    id: '4',
    number: '4B',
    terminal: 'Terminal 2',
    concourse: 'B',
    status: 'on-time',
    airline: 'SpiceJet',
    flight: 'SG438',
    destination: 'Chennai (MAA)',
    departureTime: '2:30 PM',
    walkingTime: 12,
    amenities: ['Charging Stations', 'Family Restroom']
  },
  {
    id: '5',
    number: '5C',
    terminal: 'Terminal 2',
    concourse: 'C',
    status: 'departed',
    airline: 'Air Asia',
    flight: 'I5772',
    destination: 'Bangkok (BKK)',
    departureTime: '9:00 AM',
    walkingTime: 8,
    amenities: ['Duty Free', 'Shopping']
  },
  {
    id: '6',
    number: '6C',
    terminal: 'Terminal 2',
    concourse: 'C',
    status: 'boarding',
    airline: 'Singapore Airlines',
    flight: 'SQ519',
    destination: 'Singapore (SIN)',
    departureTime: '3:45 PM',
    walkingTime: 9,
    amenities: ['Currency Exchange', 'Dining']
  },
  {
    id: '7',
    number: '7D',
    terminal: 'Terminal 2',
    concourse: 'D',
    status: 'on-time',
    airline: 'Emirates',
    flight: 'EK573',
    destination: 'Dubai (DXB)',
    departureTime: '4:15 PM',
    walkingTime: 15,
    amenities: ['Premium Lounge', 'Shopping']
  },
  {
    id: '8',
    number: '8D',
    terminal: 'Terminal 2',
    concourse: 'D',
    status: 'closed',
    airline: 'Thai Airways',
    flight: 'TG314',
    destination: 'Bangkok (BKK)',
    departureTime: '6:30 PM',
    walkingTime: 18,
    amenities: ['Charging Stations', 'Dining']
  },
  {
    id: '9',
    number: '9E',
    terminal: 'Terminal 2',
    concourse: 'E',
    status: 'on-time',
    airline: 'Malaysia Airlines',
    flight: 'MH194',
    destination: 'Kuala Lumpur (KUL)',
    departureTime: '5:15 PM',
    walkingTime: 11,
    amenities: ['Prayer Room', 'Dining']
  },
  {
    id: '10',
    number: '10E',
    terminal: 'Terminal 2',
    concourse: 'E',
    status: 'delayed',
    airline: 'IndiGo',
    flight: '6E127',
    destination: 'Hyderabad (HYD)',
    departureTime: '7:45 PM',
    walkingTime: 14,
    amenities: ['Charging Stations', 'Shopping']
  },
  {
    id: '11',
    number: '11F',
    terminal: 'Terminal 2',
    concourse: 'F',
    status: 'on-time',
    airline: 'Air India',
    flight: 'AI736',
    destination: 'Port Blair (IXZ)',
    departureTime: '8:30 PM',
    walkingTime: 16,
    amenities: ['Restrooms Nearby', 'Food Court']
  },
  {
    id: '12',
    number: '12F',
    terminal: 'Terminal 2',
    concourse: 'F',
    status: 'boarding',
    airline: 'Vistara',
    flight: 'UK778',
    destination: 'Guwahati (GAU)',
    departureTime: '9:15 PM',
    walkingTime: 20,
    amenities: ['Charging Stations', 'Tea Lounge']
  }
];

// ...existing export functions...

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