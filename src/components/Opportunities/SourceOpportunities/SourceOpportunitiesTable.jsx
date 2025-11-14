import TableRow from "./TableRow";

export default function SourceOpportunitiesTable() {
  const data = [
    {
      name: "Metro Transit Expansion",
      state: "Arizona",
      sector: "Transportation",
      match: "89%",
      value: "$2.4M",
      deadline: "2025-04-25",
      desc: "Major BRT implementation project..."
    },
    {
      name: "Metro Transit Expansion",
      state: "Arizona",
      sector: "Transportation",
      match: "89%",
      value: "$2.4M",
      deadline: "2025-04-25",
      desc: "Major BRT implementation project..."
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mx-6 mt-4 overflow-auto">
      <h2 className="font-semibold text-lg mb-4">AI Discovered Opportunities</h2>

      <table className="w-full min-w-[900px]">
        <thead>
          <tr className="border-b text-left">
            <th className="py-3">Name</th>
            <th>State</th>
            <th>Sector</th>
            <th>Match</th>
            <th>Value</th>
            <th>Deadline</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <TableRow key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
