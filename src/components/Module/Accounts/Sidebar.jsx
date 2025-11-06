import {
  Briefcase,
  User,
  FileText,
  BookOpen,
  FileSignature,
  Folder,
  DollarSign,
  ShoppingCart,
  BarChart3,
  LogOut,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: "Opportunities", icon: <Briefcase size={18} /> },
    { name: "Accounts", icon: <User size={18} /> },
    { name: "Proposals", icon: <FileText size={18} /> },
    { name: "Resources", icon: <BookOpen size={18} /> },
    { name: "Contracts", icon: <FileSignature size={18} /> },
    { name: "Projects", icon: <Folder size={18} /> },
    { name: "Finance", icon: <DollarSign size={18} /> },
    { name: "Procurements", icon: <ShoppingCart size={18} /> },
    { name: "KPIs", icon: <BarChart3 size={18} /> },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col justify-between transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <div>
          {/* Logo */}
          <div className="flex p-6 items-center space-x-2 mb-2">
            <img className="w-8 md:w-10" src="src/assets/logo.png" alt="Logo" />
            <div>
              <h1 className="font-semibold text-base md:text-lg">Megapolis</h1>
              <p className="text-gray-500 text-xs md:text-sm">Advisory</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex flex-col gap-1 px-4 text-gray-700">
            {menuItems.map(({ name, icon }) => (
              <a
                key={name}
                href="#"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-gray-100 ${
                  name === "Accounts"
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : ""
                }`}
                onClick={() => setIsOpen(false)} // close sidebar when a link is clicked
              >
                {icon}
                <span className="text-sm md:text-base">{name}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Log-out Button */}
        <button className="m-4 mt-16 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <LogOut size={18} />
          <span className="text-sm md:text-base font-medium">Log-out</span>
        </button>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
