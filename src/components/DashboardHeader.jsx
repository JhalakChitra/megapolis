import { Menu } from "lucide-react";

const DashboardHeader = ({ onToggleSidebar }) => {
  return (
    <header className="flex items-center justify-between p-4 md:p-5 border-b border-gray-300 bg-white">
      {/* ✅ Always visible toggle button */}
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none transition"
      >
        <Menu className="w-6 h-6 text-gray-800" />
      </button>

      {/* ✅ Right section */}
      <div className="flex items-center space-x-3 md:space-x-4">
        <button className="relative">
          <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-300 rounded-full"></div>
          <span className="text-gray-700 text-sm md:text-base font-medium">
            Emirhan Boruch
          </span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
