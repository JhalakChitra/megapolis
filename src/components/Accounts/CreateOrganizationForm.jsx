import InputField from "../InputField";
import React, { useState, useEffect } from "react";


// ----------------------------------------------------------
// STATE MAP (India + USA + Canada + Australia)
// ----------------------------------------------------------
const STATE_MAP = {
  // India
  "andhra pradesh": "AP",
  "arunachal pradesh": "AR",
  "assam": "AS",
  "bihar": "BR",
  "chhattisgarh": "CG",
  "goa": "GA",
  "gujarat": "GJ",
  "haryana": "HR",
  "himachal pradesh": "HP",
  "jharkhand": "JH",
  "karnataka": "KA",
  "kerala": "KL",
  "madhya pradesh": "MP",
  "maharashtra": "MH",
  "manipur": "MN",
  "meghalaya": "ML",
  "mizoram": "MZ",
  "nagaland": "NL",
  "odisha": "OD",
  "punjab": "PB",
  "rajasthan": "RJ",
  "sikkim": "SK",
  "tamil nadu": "TN",
  "telangana": "TS",
  "tripura": "TR",
  "uttar pradesh": "UP",
  "uttarakhand": "UK",
  "west bengal": "WB",
  "delhi": "DL",

  // Union Territories
  "andaman and nicobar islands": "AN",
  "chandigarh": "CH",
  "dadra and nagar haveli": "DNHDD",
  "daman and diu": "DNHDD",
  "jammu and kashmir": "JK",
  "ladakh": "LA",
  "lakshadweep": "LD",
  "puducherry": "PY",

  // USA
  "california": "CA",
  "new york": "NY",
  "texas": "TX",
  "florida": "FL",
  "washington": "WA",
  "illinois": "IL",

  // Canada
  "ontario": "ON",
  "quebec": "QC",
  "british columbia": "BC",
  "alberta": "AB",

  // Australia
  "new south wales": "NSW",
  "victoria": "VIC",
  "queensland": "QLD",
};


// New AI enhanced badge element - DEFINED GLOBALLY TO PREVENT REFERENCE ERROR
const AiBadge = (
  <div className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 shadow-sm">
      AI enhanced
  </div>
);


const CreateOrganizationForm = () => {
  const [formData, setFormData] = useState({
    companyWebsite: "",
    organizationName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
  });

  // Generic change handler for normal inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  // ----------------------------------------------------------
  //  SCRAPER CALL — UPDATED WITH STATE MAPPING
  // ----------------------------------------------------------
  const handleWebsiteChange = async (e) => {
  const value = e.target.value;
  setFormData({ ...formData, companyWebsite: value });

  if (value.includes(".") && value.length > 5) {
    try {
      const res = await fetch("http://localhost:8000/organization/scrape-website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: value }),
      });

      const data = await res.json();
      console.log("SCRAPED DATA:", data);

      // Convert scraped state → dropdown code
      let finalState = "";
      if (data.state) {
        const key = data.state.toLowerCase().trim();
        finalState = STATE_MAP[key] || "";      // <-- Mapping to state code
      }

      // Clean address into address1 + address2
      let address1 = data.address1 || "";
      let address2 = "";

      if (address1.includes(",")) {
        const parts = address1.split(",");
        if (parts.length > 1) {
          address1 = parts[0].trim();
          address2 = parts.slice(1).join(", ").trim();
        }
      }

      setFormData((prev) => ({
        ...prev,
        organizationName: data.organizationName || prev.organizationName,
        email: data.email || prev.email,
        phone: data.phone || prev.phone,

        // Address
        address1: address1 || prev.address1,
        address2: address2 || prev.address2,

        // Location fields
        city: data.city || prev.city,
        state: finalState || prev.state,
        zipCode: data.zipCode || prev.zipCode,
      }));

    } catch (err) {
      console.error("Error scraping website:", err);
    }
  }
};




  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/organizations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response from backend:", data);
      alert("Organization created successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create organization");
    }
  };




  return (
    <div className="flex justify-center items-center flex-grow p-4 md:p-6">
      <div className="bg-gray-50 w-full max-w-2xl rounded-xl shadow-sm p-6 sm:p-8 md:p-10 border border-gray-200">
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-2">
          Create Your Organization
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
          Set up your organization to get started with the platform. You need
          an organization to access all features and collaborate with your team.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              label="Company Website"
              name="companyWebsite"
              placeholder="xyz.com"
              value={formData.companyWebsite}
              onChange={handleWebsiteChange}
              required
              badge={AiBadge}

            />
            <InputField
              label="Organization Name"
              name="organizationName"
              placeholder="Megapolis"
              value={formData.organizationName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              label="Address 1"
              name="address1"
              placeholder="45, Street"
              value={formData.address1}
              onChange={handleChange}
              required
            />
            <InputField
              label="Address 2"
              name="address2"
              placeholder="Address (optional)"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <InputField
              label="City"
              name="city"
              placeholder="City name"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                State<span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Select state</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CG">Chhattisgarh</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OD">Odisha</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TS">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UK">Uttarakhand</option>
                <option value="WB">West Bengal</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="CH">Chandigarh</option>
                <option value="DNHDD">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="PY">Puducherry</option>
              </select>
            </div>

            <InputField
              label="Zip Code"
              name="zipCode"
              placeholder="Postal code"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              label="Email Address"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputField
              label="Phone"
              type="tel"
              name="phone"
              placeholder="(555) 123 4567"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-[#161950] text-[#161950] font-medium hover:bg-indigo-50 transition"
            >
              Back to Sign-in
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#161950] text-white font-medium hover:bg-indigo-800 transition"
            >
              Create Organization
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateOrganizationForm;
