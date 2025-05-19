# SkyWay Airport Navigation Web App

![Project Screenshot](./public/screenshot.png) <!-- Add your screenshot later -->

A modern web application for navigating Netaji Subhas Chandra Bose International Airport (CCU) with real-time gate information and flight details.

## Features

- 🗺️ Interactive airport map with gate locations
- 🔍 Search and filter gates by terminal, concourse, airline, and status
- ✈️ Detailed gate information with flight details
- 📱 Responsive design for all devices
- 🚀 Smooth animations with Framer Motion
- 🎨 Clean UI with DM Sans and Ubuntu fonts

## Technologies Used

- **Frontend**: 
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Shadcn/ui components
  - Framer Motion (animations)
  - React Leaflet (maps)

- **Backend**: 
  - Static data (can be extended with API integration)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/airport-navigation-ui-webapp.git
   ```

2. Install dependencies

    ```bash
    cd airport-navigation-ui-webapp
    npm install
    ```
3. Run the development server:
    ```bash
    npm run dev
    ```

4. Open http://localhost:3000 in your browser.

### Project Structure
```
src/
├── app/                  # Next.js app router
├── components/           # React components
│   ├── AirportMap.tsx    # Interactive airport map
│   ├── GateCard.tsx      # Individual gate card
│   ├── GateDetails.tsx   # Gate detail view
│   ├── GateFilters.tsx   # Search and filter controls
│   ├── GateList.tsx      # List of all gates
│   ├── GateStatusBadge.tsx # Status indicators
│   ├── NavBar.tsx        # Navigation header
│   └── Footer.tsx        # Page footer
├── types/                # TypeScript types
├── public/               # Static assets
└── styles/  
```
