"use client";

import type { FilterOptions } from "@/types/airport";
import { Filter, Search, X } from "lucide-react";
import {
  getUniqueTerminals,
  getUniqueConcourses,
  getUniqueAirlines,
  getUniqueStatuses,
} from "../data/mockData";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GateFiltersProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  isFilterOpen: boolean;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GateFilters({
  filters,
  setFilters,
  isFilterOpen,
  setIsFilterOpen,
}: GateFiltersProps) {
  const terminals = getUniqueTerminals();
  const concourses = getUniqueConcourses();
  const airlines = getUniqueAirlines();
  const statuses = getUniqueStatuses();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, searchQuery: e.target.value }));
  };

  const handleFilterChange = (
    filterType: keyof FilterOptions,
    value: string | undefined
  ) => {
    setFilters((prev) => ({ ...prev, [filterType]: value ?? "" }));
  };

  const resetFilters = () => {
    setFilters({
      terminal: "",
      concourse: "",
      airline: "",
      status: "",
      searchQuery: "",
    });
  };

  const isAnyFilterActive =
    filters.terminal || filters.concourse || filters.airline || filters.status;

  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
        <div className="relative w-full mt-4">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search gates, flights, destinations..."
            value={filters.searchQuery}
            onChange={handleSearchChange}
            className="pl-9 w-full bg-white border-gray-200 focus:ring-2 focus:ring-blue-100 shadow-sm"
          />
        </div>

        <div className="flex gap-2 items-center w-full md:w-auto justify-end mt-4">
          <Button
            variant={isAnyFilterActive ? "secondary" : "outline"}
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="gap-2 cursor-pointer"
          >
            <Filter className="h-4 w-4" />
            Filter
            {isAnyFilterActive && (
              <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {
                  Object.values(filters).filter(
                    (val) => val && val !== filters.searchQuery
                  ).length
                }
              </span>
            )}
          </Button>

          {isAnyFilterActive && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="gap-2"
            >
              <X className="h-4 w-4" />
              Clear
            </Button>
          )}
        </div>
      </div>

      {isFilterOpen && (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
          {/* Terminal */}
          <div className="flex items-center gap-3">
            <label className="w-24 text-sm font-medium text-gray-700">
              Terminal
            </label>
            <Select
              value={filters.terminal || undefined}
              onValueChange={(val) => handleFilterChange("terminal", val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Terminal" />
              </SelectTrigger>
              <SelectContent className="z-50">
                {terminals.map((terminal) => (
                  <SelectItem key={terminal} value={terminal}>
                    {terminal}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Concourse */}
          <div className="flex items-center gap-3">
            <label className="w-24 text-sm font-medium text-gray-700">
              Concourse
            </label>
            <Select
              value={filters.concourse || undefined}
              onValueChange={(val) => handleFilterChange("concourse", val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Concourse" />
              </SelectTrigger>
              <SelectContent className="z-50">
                {concourses.map((concourse) => (
                  <SelectItem key={concourse} value={concourse}>
                    Concourse {concourse}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Airline */}
          <div className="flex items-center gap-3">
            <label className="w-24 text-sm font-medium text-gray-700">
              Airline
            </label>
            <Select
              value={filters.airline || undefined}
              onValueChange={(val) => handleFilterChange("airline", val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Airline" />
              </SelectTrigger>
              <SelectContent className="z-50">
                {airlines.map((airline) => (
                  <SelectItem key={airline} value={airline}>
                    {airline}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3">
            <label className="w-24 text-sm font-medium text-gray-700">
              Status
            </label>
            <Select
              value={filters.status || undefined}
              onValueChange={(val) => handleFilterChange("status", val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Status" />
              </SelectTrigger>
              <SelectContent className="z-50">
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
}
