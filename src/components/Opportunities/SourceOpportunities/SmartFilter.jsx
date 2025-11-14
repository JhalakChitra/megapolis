export default function SmartFilter() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mx-6 mt-4">
      <h2 className="font-semibold text-lg mb-4">Smart Search Filter</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <select className="border p-2 rounded-lg">
          <option>All Sector</option>
        </select>

        <select className="border p-2 rounded-lg">
          <option>All Clients</option>
        </select>

        <select className="border p-2 rounded-lg">
          <option>Any Value</option>
        </select>

        <select className="border p-2 rounded-lg">
          <option>All Services</option>
        </select>

        <select className="border p-2 rounded-lg">
          <option>Any Timeline</option>
        </select>
      </div>

      <div className="flex gap-4 mt-6">
        <button className="px-4 py-2 border rounded-lg">Clear Filter</button>
        <button className="px-4 py-2 bg-blue-900 text-white rounded-lg">
          Apply Filter
        </button>
      </div>
    </div>
  );
}
