const Header=()=>{
    return(
         <header className="flex flex-wrap items-center justify-between p-4 md:p-5 border-b-1 border-b-gray-300 bg-white">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <img className="w-8 md:w-10" src="src/assets/logo.png" alt="Logo" />
          <div>
            <h1 className="font-semibold text-base md:text-lg">Megapolis</h1>
            <p className="text-gray-500 text-xs md:text-sm">Advisory</p>
          </div>
        </div>

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
    )
}

export default Header;