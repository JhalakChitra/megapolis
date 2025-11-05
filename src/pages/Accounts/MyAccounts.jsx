import { useState } from "react";
import Sidebar from "../../components/Accounts/Sidebar";
import StatsPanel from "../../components/Accounts/StatsPanel";
// import AccountTable from "../components/AccountTable";
import DashboardHeader from "../../components/DashboardHeader";
import MapView from "../../components/Accounts/MapView";
import AccountTable from "../../components/Accounts/AccountTable";
import MyAccountsHeader from "../../components/Accounts/MyAccountsHeader";

const MyAccounts = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      {isSidebarOpen && (
        <Sidebar />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header with toggle */}
        <DashboardHeader onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Breadcrumb */}
        {/* <div className="p-4 text-sm text-gray-500">
          Dashboard / <span className="font-semibold text-gray-700">Organization Details</span>
        </div> */}
                    <MyAccountsHeader/>
        {/* Page Content */}
        <div className="flex flex-col lg:flex-row gap-4 px-4">
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              AI-Enhanced Geospatial Intelligence
            </h2>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <MapView />
            </div>
          </div>

          <StatsPanel />
        </div>

        {/* Table Section */}
        <div className="px-4 py-6">
          <AccountTable />
        </div>
      </div>
    </div>
  );
};

export default MyAccounts;
