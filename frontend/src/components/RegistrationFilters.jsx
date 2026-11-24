import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

function RegistrationFilters({
  participantName,
  type,
  status,
  onParticipantNameChange,
  onTypeChange,
  onStatusChange,
  onClear,
}) {
  const [searchValue, setSearchValue] = useState(participantName || "");

  const debouncedSearch = useDebounce(searchValue, 400);

  useEffect(() => {
    onParticipantNameChange(debouncedSearch);
  }, [debouncedSearch, onParticipantNameChange]);

  useEffect(() => {
    setSearchValue(participantName || "");
  }, [participantName]);

  const handleClear = () => {
    setSearchValue("");
    onClear();
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 md:flex-row md:items-end">
      {/* Search Participant */}
      <div className="flex-1">
        <label
          htmlFor="participant-search"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Search Participant
        </label>

        <input
          id="participant-search"
          type="text"
          placeholder="Search participant name..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Registration Type */}
      <div className="w-full md:w-48">
        <label
          htmlFor="registration-type"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Registration Type
        </label>

        <select
          id="registration-type"
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">All Types</option>
          <option value="Exhibitor">Exhibitor</option>
          <option value="Competitor">Competitor</option>
          <option value="VIP">VIP</option>
        </select>
      </div>

      {/* Registration Status */}
      <div className="w-full md:w-48">
        <label
          htmlFor="registration-status"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Status
        </label>

        <select
          id="registration-status"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="CheckedIn">Checked In</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Clear Filters */}
      <button
        type="button"
        onClick={handleClear}
        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default RegistrationFilters;