import { Users, Activity, AlertTriangle, DollarSign } from "lucide-react";

export default function StatsPanel() {
  return (
    <div className="bg-white rounded-xl  p-6 shadow-sm w-full md:w-64 space-y-6">
      {/* Total Accounts */}
      <div className="flex items-center justify-between">
         <Users className="w-10 h-10 text-gray-800 bg-gray-200 p-2 rounded" />
        <div>
          <p className="text-gray-500 text-sm">Total Accounts</p>
          <p className="text-2xl font-bold">15</p>
        </div>
       
      </div>

      {/* AI Health Score */}
      <div className="flex items-center justify-between">
                <Activity className="w-10 h-10 text-gray-800 bg-gray-200 p-2 rounded" />

        <div>
          <p className="text-gray-500 text-sm">AI Health Score</p>
          <p className="text-lg font-semibold text-orange-500">78% Average</p>
        </div>
      </div>

      {/* High Risk */}
      <div className="flex items-center justify-between">
                <AlertTriangle className="w-10 h-10 text-gray-800 bg-gray-200 p-2 rounded" />

        <div>
          <p className="text-gray-500 text-sm">High Risk</p>
          <p className="text-lg font-semibold text-red-500">3</p>
        </div>
      </div>

      {/* Total Value */}
      <div className="flex items-center justify-between">
                <DollarSign className="w-10 h-10 text-gray-800 bg-gray-200 p-2 rounded" />

        <div>
          <p className="text-gray-500 text-sm">Total Value</p>
          <p className="text-xl font-bold text-gray-800">$92.6M Portfolio</p>
        </div>
      </div>
    </div>
  );
}
