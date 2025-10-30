export default function StatsPanel() {
  return (
    <div className="bg-white rounded-xl border p-6 shadow-sm w-full md:w-64 space-y-4">
      <div>
        <p className="text-gray-500 text-sm">Total Accounts</p>
        <p className="text-2xl font-bold">15</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm">AI Health Score</p>
        <p className="text-lg font-semibold text-orange-500">78% Average</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm">High Risk</p>
        <p className="text-lg font-semibold text-red-500">3</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm">Total Value</p>
        <p className="text-xl font-bold text-gray-800">$92.6M Portfolio</p>
      </div>
    </div>
  );
}
