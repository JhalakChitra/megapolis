import { useState } from "react";
import { Eye, Plus, Trash2, MoreVertical } from "lucide-react";
import AddDocumentModal from "./AddDocumentModal";

const ClientDocuments = () => {
  const [showModal, setShowModal] = useState(false);

  const documents = [
    {
      date: "12, Sep 2025",
      category: "Transportation",
      name: "Smart Traffic Management System",
    },
    {
      date: "12, Sep 2025",
      category: "Transportation",
      name: "Smart Traffic Management System",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Client Document</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          <Plus size={16} className="mr-1" /> Add Documents
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="border-b border-gray-200 text-gray-500">
            <tr>
              <th className="py-3 px-4 font-medium">Date</th>
              <th className="py-3 px-4 font-medium">Category</th>
              <th className="py-3 px-4 font-medium">Name</th>
              <th className="py-3 px-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 whitespace-nowrap">{doc.date}</td>
                <td className="py-3 px-4">{doc.category}</td>
                <td className="py-3 px-4">{doc.name}</td>
                <td className="py-3 px-4 flex justify-end items-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                    <Eye size={16} className="mr-1" /> View Document
                  </button>
                  <button className="text-red-500 hover:text-red-700 flex items-center text-sm font-medium">
                    <Trash2 size={16} className="mr-1" /> Delete
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <AddDocumentModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ClientDocuments;
