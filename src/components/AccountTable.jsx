export default function AccountTable() {
  const accounts = [
    {
      name: "Los Angeles County Metro",
      city: "Los Angeles",
      area: "West Coast Office",
      type: "Transportation",
      contact: "David Rodriguez",
      tier: "Tier 1",
      score: "92%",
      risk: "Low",
      value: "$2.4M",
    },
    {
      name: "Los Angeles County Metro",
      city: "Los Angeles",
      area: "West Coast Office",
      type: "Transportation",
      contact: "David Rodriguez",
      tier: "Tier 1",
      score: "92%",
      risk: "Low",
      value: "$2.4M",
    },
  ];

  return (
    <div className="bg-white rounded-xl border p-4 mt-6 shadow-sm overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search or type command..."
          className="border rounded-lg px-4 py-2 w-64 text-sm"
        />
        <div className="flex gap-2">
          <button className="border px-3 py-2 rounded-lg text-sm">All Accounts</button>
          <button className="border px-3 py-2 rounded-lg text-sm">Actions</button>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead className="border-b bg-gray-50 text-gray-600">
          <tr>
            <th className="text-left p-3">Account Name</th>
            <th className="text-left p-3">City</th>
            <th className="text-left p-3">Hosting Area</th>
            <th className="text-left p-3">Type</th>
            <th className="text-left p-3">Contact</th>
            <th className="text-left p-3">Tier Type</th>
            <th className="text-left p-3">Health Score</th>
            <th className="text-left p-3">Risk</th>
            <th className="text-left p-3">Total Value</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-3">{acc.name}</td>
              <td className="p-3">{acc.city}</td>
              <td className="p-3">{acc.area}</td>
              <td className="p-3">{acc.type}</td>
              <td className="p-3">{acc.contact}</td>
              <td className="p-3">{acc.tier}</td>
              <td className="p-3 text-green-600">{acc.score}</td>
              <td className="p-3 text-green-600">{acc.risk}</td>
              <td className="p-3">{acc.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
