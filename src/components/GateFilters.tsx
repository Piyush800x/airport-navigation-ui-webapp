import type { FilterOptions } from "@/types/airport";
import { Filter, Search, X } from "lucide-react";
import {
  getUniqueTerminals,
  getUniqueConcourses,
  getUniqueAirlines,
  getUniqueStatuses,
} from "../data/mockData";

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
    value: string
  ) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
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
        <div className="relative flex-grow w-full md:w-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search gates, flights, destinations..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            value={filters.searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="flex gap-2 items-center w-full md:w-auto justify-end">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
              isAnyFilterActive
                ? "bg-blue-50 text-blue-700 border-blue-200"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            <Filter className="h-4 w-4" />
            <span>Filter</span>
            {isAnyFilterActive && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-blue-500 rounded-full">
                {
                  Object.values(filters).filter(
                    (val) => val && val !== filters.searchQuery
                  ).length
                }
              </span>
            )}
          </button>

          {isAnyFilterActive && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <X className="h-4 w-4" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      {isFilterOpen && (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-4 animate-fadeIn">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Terminal
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={filters.terminal}
              onChange={(e) => handleFilterChange("terminal", e.target.value)}
            >
              <option value="">Any Terminal</option>
              {terminals.map((terminal) => (
                <option key={terminal} value={terminal}>
                  {terminal}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Concourse
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={filters.concourse}
              onChange={(e) => handleFilterChange("concourse", e.target.value)}
            >
              <option value="">Any Concourse</option>
              {concourses.map((concourse) => (
                <option key={concourse} value={concourse}>
                  Concourse {concourse}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Airline
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={filters.airline}
              onChange={(e) => handleFilterChange("airline", e.target.value)}
            >
              <option value="">Any Airline</option>
              {airlines.map((airline) => (
                <option key={airline} value={airline}>
                  {airline}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={filters.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <option value="">Any Status</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
