const Sidebar=()=> {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen hidden md:flex flex-col justify-between">
      <div>
        <div className="p-6 text-xl font-bold">Megapolis</div>
        <nav className="flex flex-col gap-2 px-4 text-gray-600">
          {[
            "Opportunities",
            "Accounts",
            "Proposals",
            "Resources",
            "Contracts",
            "Projects",
            "Finance",
            "Procurements",
            "KPIs",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className={`px-3 py-2 rounded-lg hover:bg-gray-100 ${
                item === "Accounts" ? "bg-blue-50 text-blue-600 font-semibold" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      <button className="m-4 px-4 py-2 bg-gray-100 rounded-lg">Log-out</button>
    </aside>
  );
}


export default Sidebar;