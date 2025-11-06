import { useState } from "react";
import Sidebar from "../../components/Accounts/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import AccountsHeader from "../../components/Accounts/AccountsHeader";
import AccountOverviewForm from "../../components/Accounts/Overview/AccountOverviewForm";
import OverviewRecentActivity from "../../components/Accounts/Overview/OverviewRecentActivity";
import OverviewStats from "../../components/Accounts/Overview/OverviewStats";
import AccountsTabs from "../../components/Accounts/AccountsTabs";



const AccountsDashboard = () => {


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
                    <AccountsHeader/>
                    <AccountsTabs/>
                    

      </div>
    </div>
  );
};

export default AccountsDashboard;
