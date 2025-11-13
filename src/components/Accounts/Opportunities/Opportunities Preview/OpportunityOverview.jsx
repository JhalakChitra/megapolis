const OpportunityOverview = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Southwest Regional Transit Authority - Bus Rapid Transit
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Major BRT implementation project matching your transportation infrastructure expertise
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm">
            <div><span className="font-semibold">State:</span> Arizona</div>
            <div><span className="font-semibold">Sector:</span> Transportation</div>
            <div><span className="font-semibold">Deadline:</span> 2025-04-25</div>
            <div><span className="font-semibold">Source:</span> Govt Procurement Portal</div>
          </div>
        </div>

        <div className="mt-4 sm:mt-0 text-right">
          <p className="text-gray-400 text-sm">Project Value</p>
          <h3 className="text-2xl font-bold text-green-600">$8.5M</h3>
          <p className="text-sm text-gray-500 mt-2">Match Score: <span className="font-semibold text-blue-500">92%</span></p>
        </div>
      </div>
    </div>
  );
};

export default OpportunityOverview;
