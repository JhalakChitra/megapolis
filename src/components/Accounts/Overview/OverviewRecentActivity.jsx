const OverviewRecentActivity = () => {
  const activities = [
    { label: "Proposal submitted for metro transit expansion", color: "bg-green-500", time: "2 days ago" },
    { label: "Meeting with Sarah Johnson scheduled", color: "bg-blue-500", time: "1 week ago" },
    { label: "Contract amendment signed", color: "bg-purple-500", time: "2 weeks ago" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
      <ul className="space-y-3">
        {activities.map((a, idx) => (
          <li key={idx} className="flex items-center space-x-3">
            <span className={`w-3 h-3 rounded-full ${a.color}`}></span>
            <div>
              <p className="text-sm font-medium">{a.label}</p>
              <p className="text-xs text-gray-500">{a.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverviewRecentActivity;
