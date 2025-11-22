import { Calendar, MoreVertical, Edit3, Shield } from "lucide-react";

const OrganizationDetailsCard=()=> {
 const [orgData, setOrgData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const response = await fetch("http://localhost:8000/organizations/1"); // example: fetch org with id=1
        const data = await response.json();
        setOrgData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch organization:", error);
        setLoading(false);
      }
    };

    fetchOrganization();
  }, []);

  if (loading) {
    return <p>Loading organization details...</p>;
  }

  if (!orgData) {
    return <p>No organization data available</p>;
  }



  return (
   <>
           
      {/* Main Card */}
      <div className="bg-white max-w-xl rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {orgData.organizationName}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <span className="text-xs font-medium px-3 py-1.5 bg-green-100 text-green-700 rounded-full">
                Active Organization
              </span>
              <span className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full">
                <Shield className="w-3 h-3" />
                Administration
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Created on</span>
              <span className="ml-2 text-gray-900 font-medium">
                August 24, 2025
              </span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Organization Details
            </h2>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500">Company Website</p>
                <a
                  href="https://your-company.com"
                  className="text-blue-600 hover:underline"
                >
                {orgData.companyWebsite}
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500">Email address</p>
                  <p className="text-gray-900">{orgData.email}</p>
                </div>
                <div>
                  <p className="text-gray-500">Phone</p>
                <p className="text-gray-900">{orgData.phone}</p>
                </div>
              </div>

              <div>
                <p className="text-gray-500">Address</p>
              <p className="text-gray-900">{orgData.address1}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500">City/State</p>
 <p className="text-gray-900">
                  {orgData.city}, {orgData.state}
                </p>                </div>
                <div>
                  <p className="text-gray-500">Postal Code</p>
                <p className="text-gray-900">{orgData.zipCode}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 h-fit">
            <h3 className="text-base font-semibold text-gray-800 mb-4 border-b pb-2">
              Quick Actions
            </h3>
            <div className="flex flex-col space-y-3">
              <button className="text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm text-left">
                View Accounts
              </button>
              <button className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm text-left flex items-center gap-2">
                <Edit3 className="w-4 h-4" /> Manage Setting
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default OrganizationDetailsCard;