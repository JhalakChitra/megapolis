const AccountsTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    "Overview",
    "Contacts",
    "Team",
    "Opportunities",
    "Experience",
    "Performance",
    "Notes",
    "Financial",
  ];

  return (
    <div className="bg-gray-50 border rounded-xl overflow-x-auto">
      <div className="flex min-w-max sm:min-w-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-colors
              ${
                activeTab === tab
                  ? "bg-indigo-900 text-white rounded-l-lg sm:rounded-md"
                  : "text-gray-600 hover:text-indigo-800"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AccountsTabs;
