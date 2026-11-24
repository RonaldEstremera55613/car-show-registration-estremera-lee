import StatusBadge from "./StatusBadge";
import PaymentBadge from "./PaymentBadge";

function RegistrationTable({ registrations = [] }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-PH", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(amount);
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600">
              Registration No.
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600">
              Date
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600">
              Participant
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600">
              Car
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600">
              Status
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-gray-600">
              Fee / Paid
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600">
              Payment
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {registrations.length > 0 ? (
            registrations.map((registration) => (
              <tr key={registration.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                  {registration.registrationNumber}
                </td>

                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
                  {formatDate(registration.registrationDate)}
                </td>

                <td className="px-4 py-3 text-sm">
                  <div className="font-medium text-gray-900">
                    {registration.participantName}
                  </div>
                  <div className="text-xs text-gray-500">
                    {registration.contactNumber || registration.email}
                  </div>
                </td>

                <td className="px-4 py-3 text-sm">
                  <div className="font-medium text-gray-900">
                    {registration.carMakeModel}
                  </div>
                  <div className="text-xs text-gray-500">
                    {registration.plateNumber}
                  </div>
                </td>

                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                  {registration.registrationType}
                </td>

                <td className="whitespace-nowrap px-4 py-3">
                  <StatusBadge status={registration.status} />
                </td>

                <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-700">
                  {formatCurrency(registration.registrationFee)} /{" "}
                  {formatCurrency(registration.amountPaid)}
                </td>

                <td className="whitespace-nowrap px-4 py-3">
                  <PaymentBadge status={registration.paymentStatus} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
                className="px-4 py-8 text-center text-sm text-gray-500"
              >
                No registrations available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RegistrationTable;