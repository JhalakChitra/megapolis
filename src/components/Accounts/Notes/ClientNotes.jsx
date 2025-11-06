import { useState } from "react";
import { Eye, Plus, MoreVertical } from "lucide-react";
import AddNotesModal from "./AddNotesModal"; // ✅ Import modal

const ClientNotes = () => {
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState([
    {
      date: "12, Sep 2025",
      category: "Transportation",
      title: "Smart Traffic Management System",
      content:
        "City of Austin expressing interest in Smart Traffic Management System",
    },
    {
      date: "12, Sep 2025",
      category: "Transportation",
      title: "Smart Traffic Management System",
      content:
        "City of Austin expressing interest in Smart Traffic Management System",
    },
  ]);

  // Save new note
  const handleSaveNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Client Notes</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          <Plus size={16} className="mr-1" /> Add Notes
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="border-b border-gray-200 text-gray-500">
            <tr>
              <th className="py-3 px-4 font-medium">Date</th>
              <th className="py-3 px-4 font-medium">Category</th>
              <th className="py-3 px-4 font-medium">Title</th>
              <th className="py-3 px-4 font-medium">Content</th>
              <th className="py-3 px-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 whitespace-nowrap">{note.date}</td>
                <td className="py-3 px-4">{note.category}</td>
                <td className="py-3 px-4">{note.title}</td>
                <td className="py-3 px-4 truncate">{note.content}</td>
                <td className="py-3 px-4 flex justify-end items-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                    <Eye size={16} className="mr-1" /> View Notes
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

      {/* Add Notes Modal */}
      <AddNotesModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveNote}
      />
    </div>
  );
};

export default ClientNotes;
