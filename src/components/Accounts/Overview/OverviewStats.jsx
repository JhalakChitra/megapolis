const OverviewStats = () => {
  const stats = [
    { label: "Total Value", value: "$8.5M" },
    { label: "Last Contact", value: "2024-12-01" },
    { label: "Opportunities", value: "1" },
    { label: "Client Type", value: "Tier 1" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm grid grid-cols-2 gap-4">
      {stats.map((item, idx) => (
        <div key={idx}>
          <p className="text-sm text-gray-500">{item.label}</p>
          <p className="text-lg font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewStats;
