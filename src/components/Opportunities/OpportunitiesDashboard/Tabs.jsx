export default function Tabs({ active, setActive }) {
  const tabs = [
    "Source Opportunities",
    "Pipeline Management",
    "My Opportunity"
  ];

  return (
    <div className="flex gap-3 px-6 py-4 bg-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded-xl ${
            active === tab
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
