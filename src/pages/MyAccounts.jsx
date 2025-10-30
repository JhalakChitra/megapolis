import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatsPanel from "../components/StatsPanel";
import AccountTable from "../components/AccountTable";

const MyAccounts = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Breadcrumb */}
        <div className="p-4 text-sm text-gray-500">
          Dashboard / <span className="font-semibold text-gray-700">Organization Details</span>
        </div>

        {/* Page Content */}
        <div className="flex flex-col lg:flex-row gap-4 px-4">
          {/* Left Side - Map & Info */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">AI-Enhanced Geospatial Intelligence</h2>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              🌍 Map visualization area
            </div>
          </div>

          {/* Right Side - Stats Panel */}
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
