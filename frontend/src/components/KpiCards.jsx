import KpiCard from "./KpiCard";

function KpiCards({ summary }) {
  if (!summary) return null;

  const cards = [
    {
      title: "Total Registrations",
      value: summary.totalRegistrations,
      format: "number",
    },
    {
      title: "Total Payments",
      value: summary.totalPayments,
      format: "currency",
    },
    {
      title: "Uncollected Payments",
      value: summary.uncollectedPayments,
      format: "currency",
    },
    {
      title: "Confirmed",
      value: summary.confirmed,
      format: "number",
    },
    {
      title: "Checked In",
      value: summary.checkedIn,
      format: "number",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {cards.map((card) => (
        <KpiCard
          key={card.title}
          title={card.title}
          value={card.value}
          format={card.format}
        />
      ))}
    </div>
  );
}

export default KpiCards;