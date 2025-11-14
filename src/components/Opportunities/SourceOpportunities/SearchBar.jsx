export default function SearchBar() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mx-6 mt-4">
      <div className="flex gap-3">
        <input
          className="w-full p-3 border rounded-lg"
          placeholder='Natural language search: "Find infrastructure projects in California worth over $5M"'
        />
        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
}
