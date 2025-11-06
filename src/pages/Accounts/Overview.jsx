import AccountOverviewForm from "../../components/Accounts/Overview/AccountOverviewForm";
import OverviewRecentActivity from "../../components/Accounts/Overview/OverviewRecentActivity";
import OverviewStats from "../../components/Accounts/Overview/OverviewStats";

const Overview = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 bg-gray-50 min-h-screen">
      {/* Left side — Account Information Form */}
      <div className="flex-1 bg-white rounded-2xl shadow-sm p-6">
        <AccountOverviewForm />
      </div>

      {/* Right side — Stats + Recent Activity */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <OverviewStats />
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <OverviewRecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Overview;
