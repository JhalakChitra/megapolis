import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import AccountsHeader from "../components/Accounts/AccountsHeader";
// import AccountOverviewForm from "../../components/Accounts/Overview/AccountOverviewForm";
// import OverviewRecentActivity from "../../components/Accounts/Overview/OverviewRecentActivity";
// import OverviewStats from "../../components/Accounts/Overview/OverviewStats";
import AccountsTabs from "../components/Accounts/AccountsTabs";
import Sidebar from "../components/Accounts/Sidebar";
import AccountsDashboard from "./Accounts/AccountsDashboard";
import OpportunityPreviewPage from "./Opportunities/OpportunityPreview/OpportunityPreviewPage";
import OpportunitiesDashboard from "./Opportunities/OpportunitiesDashboard/OpportunitiesDashboard";

const MenuDashboard = () => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Opportunities");

    // Switch between components based on selection
  const renderContent = () => {
    switch (selected) {
      case "Accounts":
        return <AccountsDashboard/>;
      case "Proposals":
        return <ProposalsPage />;
      case "Opportunities":
      default:
        return <OpportunitiesDashboard />;
    }
  };

 

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
    { isSidebarOpen &&(<Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selected={selected}
        setSelected={setSelected}
      />)}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header with toggle */}
        <DashboardHeader onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Breadcrumb */}
        {/* <div className="p-4 text-sm text-gray-500">
          Dashboard / <span className="font-semibold text-gray-700">Organization Details</span>
        </div> */} 
                    {/* <AccountsHeader/> */}
                    {/* <AccountsTabs/> */}
                 {/* Main Content Area */}
      <main className="flex-1 p-6">{renderContent()}</main>   

      </div>
    </div>
  );
};

export default MenuDashboard;
