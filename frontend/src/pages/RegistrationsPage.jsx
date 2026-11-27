import { useCallback, useEffect, useState } from "react";

import {
  getRegistrations,
  getSummary,
} from "../api/registrationsApi";

import KpiCards from "../components/KpiCards";
import RegistrationFilters from "../components/RegistrationFilters";
import RegistrationTable from "../components/RegistrationTable";
import Pagination from "../components/Pagination";

function RegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);
  const [summary, setSummary] = useState(null);

  const [participantName, setParticipantName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  const fetchDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const [registrationData, summaryData] = await Promise.all([
        getRegistrations({
          participantName,
          type,
          status,
          page,
          pageSize,
        }),
        getSummary(),
      ]);

      setRegistrations(registrationData.items);
      setTotalCount(registrationData.totalCount);
      setTotalPages(registrationData.totalPages);
      setSummary(summaryData);
    } catch (err) {
      const message =
        err.message === "Failed to fetch"
          ? "Cannot reach the API. Please check that the backend is running and try again."
          : err.message || "Cannot load registrations. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  }, [participantName, type, status, page, pageSize]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData, retry]);

  const handleParticipantNameChange = useCallback((value) => {
    setParticipantName(value);
    setPage(1);
  }, []);

  const handleTypeChange = (value) => {
    setType(value);
    setPage(1);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setPage(1);
  };

  const handleClearFilters = () => {
    setParticipantName("");
    setType("");
    setStatus("");
    setPage(1);
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    setPage(1);
  };

  const handleRetry = () => {
    setRetry((previous) => previous + 1);
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Dashboard Header */}
        <header>
          <h1 className="text-3xl font-bold text-gray-900">
            Car Show Registration Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            AutoVista Events - Car Show 2027
          </p>
        </header>

        {/* KPI Cards */}
        <KpiCards summary={summary} />

        {/* Registration Filters */}
        <RegistrationFilters
          participantName={participantName}
          type={type}
          status={status}
          onParticipantNameChange={handleParticipantNameChange}
          onTypeChange={handleTypeChange}
          onStatusChange={handleStatusChange}
          onClear={handleClearFilters}
        />

        {/* Registration Table */}
        <section className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 px-4 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Registrations
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              View and manage car show registrations.
            </p>
          </div>

          {loading ? (
            <div className="p-8 text-center text-sm text-gray-500">
              Loading registrations...
            </div>
          ) : error ? (
            <div className="p-8 text-center">
              <p className="mb-4 text-sm text-red-600">
                {error}
              </p>
              <button
                type="button"
                onClick={handleRetry}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Try again
              </button>
            </div>
          ) : registrations.length === 0 ? (
            <div className="p-8 text-center">
              <p className="mb-4 text-sm text-gray-500">
                No registrations match your filters.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <RegistrationTable registrations={registrations} />

              <Pagination
                page={page}
                pageSize={pageSize}
                totalCount={totalCount}
                totalPages={totalPages}
                onPageChange={setPage}
                onPageSizeChange={handlePageSizeChange}
                loading={loading}
              />
            </>
          )}
        </section>

      </div>
    </main>
  );
}

export default RegistrationsPage;