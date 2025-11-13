const stats = [
  { label: "Overall Score", value: "92" },
  { label: "Win Probability", value: "78%" },
  { label: "Strategic Fit", value: "95%" },
  { label: "Risk Level", value: "Medium" },
];

const AnalysisStats = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
    {stats.map((s) => (
      <div key={s.label}>
        <p className="text-gray-500 text-sm">{s.label}</p>
        <p className="text-xl font-semibold text-gray-800">{s.value}</p>
      </div>
    ))}
  </div>
);

export default AnalysisStats;
