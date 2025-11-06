import { Edit2, MoreVertical } from "lucide-react";

const ClientContactTable = () => {
  const contacts = [
    {
      name: "David Rodriguez",
      role: "Primary Contact",
      email: "david.rodriguez@losangelesco@gmail.com",
      phone: "(555) 123-4567",
      tag: "Primary",
      tagColor: "bg-green-100 text-green-600",
    },
    {
      name: "David Rodriguez",
      role: "Primary Contact",
      email: "david.rodriguez@losangelesco@gmail.com",
      phone: "(555) 123-4567",
      tag: "Secondary",
      tagColor: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Client Contact
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="border-b border-gray-200 text-gray-500">
            <tr>
              <th className="py-3 px-4 font-medium">Client Name</th>
              <th className="py-3 px-4 font-medium">Role</th>
              <th className="py-3 px-4 font-medium">Email</th>
              <th className="py-3 px-4 font-medium">Phone</th>
              <th className="py-3 px-4 font-medium">Tags</th>
              <th className="py-3 px-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 whitespace-nowrap">
                  {contact.name}
                </td>
                <td className="py-3 px-4">{contact.role}</td>
                <td className="py-3 px-4 truncate">{contact.email}</td>
                <td className="py-3 px-4">{contact.phone}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${contact.tagColor}`}
                  >
                    {contact.tag}
                  </span>
                </td>
                <td className="py-3 px-6 flex justify-end items-center gap-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Edit2 size={16} />
                  </button>
                 
                </td>
                <td><button className="text-gray-500  px-6 hover:text-gray-700">
                    <MoreVertical size={16} />
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientContactTable;
