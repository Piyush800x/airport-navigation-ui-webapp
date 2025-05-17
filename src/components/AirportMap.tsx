"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { AirportMapProps, Gate } from "@/types/airport";
import L from "leaflet";

if ("_getIconUrl" in L.Icon.Default.prototype) {
  delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
}
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapUpdaterProps {
  selectedGate: Gate | null;
}

const MapUpdater = ({ selectedGate }: MapUpdaterProps) => {
  const map = useMap();

  useEffect(() => {
    if (selectedGate) {
      const gateCoords = getGateCoordinates(selectedGate);
      map.setView(gateCoords, 18, { animate: true });
    }
  }, [selectedGate, map]);

  return null;
};

const getGateCoordinates = (gate: Gate): [number, number] => {
  const baseLatitude = 22.6547; // CCU airport coords
  const baseLongitude = 88.4467;

  // Generate slight offsets based on terminal and gate numbers
  const terminalOffset =
    parseInt(gate.terminal.replace("Terminal ", "")) * 0.001;
  const gateOffset = parseInt(gate.number.replace(/[A-Z]/g, "")) * 0.0002;

  return [baseLatitude + terminalOffset, baseLongitude + gateOffset];
};

export default function AirportMap({
  gates,
  selectedGate,
  onGateClick,
}: AirportMapProps) {
  const getMarkerColor = (status: Gate["status"]) => {
    switch (status) {
      case "boarding":
        return "green";
      case "delayed":
        return "orange";
      case "closed":
        return "red";
      case "departed":
        return "gray";
      default:
        return "blue";
    }
  };

  return (
    <div className="mx-auto my-8 z-0 max-w-7xl transition-all duration-300 ease-in-out animate-fade-in">
      <div
        className="h-[400px] w-full rounded-xl overflow-hidden shadow-xl border border-gray-200 p-4 
        bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50
        hover:shadow-2xl transition-all duration-300 ease-in-out"
      >
        <MapContainer
          center={[22.6547, 88.4467]} // CCU Airport coordinates
          zoom={16}
          className="h-full w-full rounded-lg z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {gates.map((gate) => {
            const coords = getGateCoordinates(gate);
            const isSelected = selectedGate?.id === gate.id;

            return (
              <Marker
                key={gate.id}
                position={coords}
                eventHandlers={{
                  click: () => onGateClick(gate),
                }}
                icon={
                  new L.DivIcon({
                    className: "custom-div-icon",
                    html: `
                    <div class="
                        w-6 h-6 rounded-full flex items-center justify-center text-blue-950 text-xs font-bold
                        ${isSelected ? "ring-2 ring-white ring-offset-2" : ""}
                        bg-${getMarkerColor(gate.status)}-500
                    ">
                        ${gate.number}
                    </div>
                    `,
                    iconSize: [24, 24],
                  })
                }
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold">Gate {gate.number}</h3>
                    <p className="text-sm">{gate.airline}</p>
                    <p className="text-sm">
                      {gate.flight} to {gate.destination}
                    </p>
                  </div>
                </Popup>
              </Marker>
            );
          })}

          <MapUpdater selectedGate={selectedGate} />
        </MapContainer>
      </div>
    </div>
  );
}
