function KpiCard({ title, value, format = "number" }) {
  const formattedValue =
    format === "currency"
      ? new Intl.NumberFormat("en-PH", {
          style: "currency",
          currency: "PHP",
        }).format(value)
      : new Intl.NumberFormat("en-PH").format(value);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-2xl font-bold text-gray-900">
        {formattedValue}
      </h2>
    </div>
  );
}

export default KpiCard;