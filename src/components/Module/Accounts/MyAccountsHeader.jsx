import { FileText, Plus } from "lucide-react";
import { useState } from "react";
import CreateNewAccountModal from "./CreateNewAccountModal";


const MyAccountsHeader = () => {
    const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full  p-4 ">
      {/* Left side - Breadcrumb & Title */}
      <div>
        <nav className="text-xs text-gray-500 mb-1">
          <span>Dashboard</span>
          <span className="mx-1">/</span>
          <span>Organization details</span>
        </nav>
        <h1 className="text-lg font-semibold text-gray-900">My Accounts</h1>
      </div>

      {/* Right side - Buttons */}
      <div className="flex items-center gap-2 mt-3 sm:mt-0">
        <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition text-sm">
          <FileText size={16} />
          Client Survey
        </button>
        <button          onClick={() => setOpenModal(true)}
 className="flex items-center gap-2 bg-[#0A0E3F] text-white px-3 py-2 rounded-lg hover:bg-[#12185f] transition text-sm">
          <Plus size={16} />
          Create Account
        </button>
         <CreateNewAccountModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
      </div>
    </div>
  );
};

export default MyAccountsHeader;
