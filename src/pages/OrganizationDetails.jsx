// import { useState } from "react";
import Header from "../components/Header";
import OrganizationDetailsCard from "../components/OrganizationDetailsCard";
const OrganizationDetails=()=> {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
        <Header/>

      {/* Back Button */}
  <div className="w-full max-w-3xl mb-6 ml-[60px] mt-[20px]">
  <nav className="text-sm text-gray-500">
    <ul className="flex items-center space-x-2">
      <li>
        <a href="" className="text-gray-400 hover:text-gray-600 font-medium">
          Dashboard
        </a>
      </li>
      <li>/</li>
      <li className="text-gray-600 font-semibold">Profile</li>
      <li>/</li>
      <li className="text-gray-600 font-semibold">Organization Details</li>
    </ul>
  </nav>
</div>


      {/* Form Section */}
      <div className="flex justify-center items-start mt-8 px-4 pb-3">
        <OrganizationDetailsCard />
      </div>
    </div>
  );
}



export default OrganizationDetails;