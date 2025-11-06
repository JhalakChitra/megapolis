import { useState } from "react";
import Overview from "../../pages/Accounts/Overview";
import Contacts from "../../pages/Accounts/Contacts";
import Team from "../../pages/Accounts/Team";
import Opportunities from "../../pages/Accounts/Opportunities";
import Experience from "../../pages/Accounts/Experience";
import Performance from "../../pages/Accounts/Performance";
import Notes from "../../pages/Accounts/Notes";
import Financial from "../../pages/Accounts/Financial";

const AccountsTabs = () => {
  // currentTab stores the active tab index or name
  const [currentTab, setCurrentTab] = useState("jobs");

  const tabs = [
    { id: "Overview", label: "Overview" },
    { id: "Contacts", label: "Contacts" },
    { id: "Team", label: "Team" },
       { id: "Opportunities", label: "Opportunities" },
              { id: "Experience", label: "Experience" },
                            { id: "Performance", label: "Performance" },
              { id: "Notes", label: "Notes" },
              { id: "Financial", label: "Financial" },



  ];

  return (
    <div className="w-full max-w-9xl mx-auto p-4">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setCurrentTab(tab.id)}
      className={`flex-1 text-center px-4 py-2 text-sm font-medium transition
        ${
          currentTab === tab.id
            ? "bg-[#0A0E3F] text-white rounded-sm"
            : "text-gray-600 hover:text-blue-600"
        }`}
    >
      {tab.label}
    </button>
  ))}
</div>


      {/* Tabs Content */}
          
         {currentTab === "Overview" && <Overview />}
         {currentTab === "Contacts" && <Contacts />}
         {currentTab === "Team" && <Team />}
         {currentTab === "Opportunities" && <Opportunities />}
         {currentTab === "Experience" && <Experience />}
         {currentTab === "Performance" && <Performance />}
         {currentTab === "Notes" && <Notes />}
         {currentTab === "Financial" && <Financial />}




     

    </div>
  );
};

export default AccountsTabs;
