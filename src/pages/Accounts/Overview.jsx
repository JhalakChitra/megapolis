import { useState } from "react";
import Sidebar from "../../components/Accounts/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import OverviewHeader from "../../components/Accounts/AccountsHeader";
import AccountOverviewForm from "../../components/Accounts/Overview/AccountOverviewForm";
import OverviewRecentActivity from "../../components/Accounts/Overview/OverviewRecentActivity";
import OverviewStats from "../../components/Accounts/Overview/OverviewStats";
import AccountsTabs from "../../components/Accounts/AccountsTabs";



const Overview = () => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

 

  return (
    // <div className="flex min-h-screen bg-gray-50">
    //   {/* Sidebar */}
    //   {isSidebarOpen && (
    //     <Sidebar />
    //   )}

    //   {/* Main content */}
    //   <div className="flex-1 flex flex-col">
    //     {/* Header with toggle */}
    //     <DashboardHeader onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

    //     {/* Breadcrumb */}
    //     {/* <div className="p-4 text-sm text-gray-500">
    //       Dashboard / <span className="font-semibold text-gray-700">Organization Details</span>
    //     </div> */} 
    //                 <OverviewHeader/>
    //                 <AccountsTabs/>
                    
    //     {/* Page Content */}
    //     <div className="flex flex-col lg:flex-row gap-4 px-4">
    //       <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
    //         <h2 className="text-xl font-semibold mb-4">
              
    //         </h2>
    //         <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
    //           <AccountOverviewForm />
    //         </div>
    //       </div>

    //       <OverviewStats />
    //     </div>

    //     {/* Table Section */}
    //     <div className="px-4 py-6">
    //       <OverviewRecentActivity />
    //     </div>
    //   </div>
    // </div>

      <>Overview</>


  );
};

export default Overview;
