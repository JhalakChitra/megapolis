import { useState } from "react";
import AccountOverview from "../../pages/Accounts/AccountsOverview";

const AccountsTabs = () => {
  // currentTab stores the active tab index or name
  const [currentTab, setCurrentTab] = useState("jobs");

  const tabs = [
    { id: "Overview", label: "Overview" },
    { id: "applications", label: "My Applications" },
    { id: "profile", label: "Profile" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition
              ${
                currentTab === tab.id
                  ? "bg-[#0A0E3F] text-white"
                  : "text-gray-600 hover:text-blue-600"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
          
         {currentTab === "Overview" && <AccountOverview />}
        {/* {currentTab === "applications" && <Applications />} */}
         {/* {currentTab === "profile" && <Profile />} */}


    </div>
  );
};

export default AccountsTabs;
