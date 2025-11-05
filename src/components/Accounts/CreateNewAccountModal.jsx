import { useState } from "react";
import { X } from "lucide-react"; // for close icon


const CreateNewAccountModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    website: "",
    clientName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    contact: "",
    email: "",
    sector: "",
    clientType: "",
    office: "",
    msa: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account Created:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/40 bg-opacity-40 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white mt-12 rounded-2xl shadow-xl w-full max-w-2xl p-5 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Create New Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Website and Client Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company Website*</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="xyz.com"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Client Name*</label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                placeholder="Megapolis"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="address1"
              placeholder="Address 1"
              value={formData.address1}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              name="address2"
              placeholder="Address 2"
              value={formData.address2}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* City, State, Zip */}
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="contact"
              placeholder="Primary Contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Dropdowns */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Client Market Sector</option>
              <option value="Tech">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Retail">Retail</option>
            </select>
            <select
              name="clientType"
              value={formData.clientType}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Client Type</option>
              <option value="Enterprise">Enterprise</option>
              <option value="SMB">SMB</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="office"
              value={formData.office}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Housing Area/Office</option>
              <option value="NYC">New York</option>
              <option value="LA">Los Angeles</option>
            </select>
            <select
              name="msa"
              value={formData.msa}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">MSA in Place</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0A0E3F] text-white rounded-lg hover:bg-[#12185f]"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewAccountModal;
