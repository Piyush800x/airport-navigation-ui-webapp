import React from "react";
import { Coffee, Clock, Plane, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-white border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center gap-2">
          <Plane className="w-6 h-6 text-sky-600" />
          <h1 className="text-xl font-bold">SkyWay Airport</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* Buttons */}
          <Button
            className="cursor-pointer"
            variant="ghost"
            size="sm"
            onClick={() => {
              toast.info("Please follow the cards for flight info");
            }}
          >
            <Clock className="w-4 h-4 mr-2" />
            Flight Info
          </Button>
          <Button
            className="cursor-pointer"
            variant="ghost"
            size="sm"
            onClick={() => {
              toast.info(
                "You are at Netaji Subhas Chandra Bose International Airport (CCU)."
              );
            }}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Where Am I?
          </Button>
          <Button
            className="cursor-pointer"
            variant="ghost"
            size="sm"
            onClick={() => {
              toast.info(
                "We offer services like cafe, duty free, charging stations etc."
              );
            }}
          >
            <Coffee className="w-4 h-4 mr-2" />
            Services
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
