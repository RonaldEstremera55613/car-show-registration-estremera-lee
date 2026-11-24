function PaymentBadge({ status }) {
  const paymentStyles = {
    Unpaid: "bg-red-100 text-red-800",
    Partial: "bg-amber-100 text-amber-800",
    Paid: "bg-green-100 text-green-800",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        paymentStyles[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {status}
    </span>
  );
}

export default PaymentBadge;