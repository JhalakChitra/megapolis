import InputField from "../InputField";

const CreateOrganizationForm=()=>{
    return(
          <div className="flex justify-center items-center flex-grow p-4 md:p-6">
        <div className="bg-gray-50 w-full max-w-2xl rounded-xl shadow-sm p-6 sm:p-8 md:p-10 border border-gray-200">
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-2">
            Create Your Organization
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
            Set up your organization to get started with the platform. You need
            an organization to access all features and collaborate with your team.
          </p>

          <form
        //    onSubmit={handleSubmit} 
          className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              label="Company Website"
              name="companyWebsite"
              placeholder="xyz.com"
            //   value={formData.companyWebsite}
            //   onChange={handleChange}
              required
            />
            <InputField
              label="Organization Name"
              name="organizationName"
              placeholder="Megapolis"
            //   value={formData.organizationName}
            //   onChange={handleChange}
              required

            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              label="Address 1"
              name="address1"
              placeholder="45, Street"
            //   value={formData.address1}
            //   onChange={handleChange}

              required
            />
            <InputField
              label="Address 2"
              name="address2"
              placeholder="Address (optional)"
            //   value={formData.address2}
            //   onChange={handleChange}

            />
          </div>

          {/* Row 3 - City, State, Zip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <InputField
              label="City"
              name="city"
              placeholder="City name"

            //   value={formData.city}
            //   onChange={handleChange}
              required
            />
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                State<span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                // value={formData.state}
                // onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
                <option value="NY">New York</option>
                <option value="FL">Florida</option>
              </select>
            </div>
            <InputField
              label="Zip Code"
              name="zipCode"
              placeholder="Postal code"
            //   value={formData.zipCode}
            //   onChange={handleChange}
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
            //   value={formData.email}
            //   onChange={handleChange}
              required

            />
            <InputField
              label="Phone"
              type="tel"
              name="phone"
              placeholder="(555) 123 4567"
            //   value={formData.phone}
            //   onChange={handleChange}

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
    )
}

export default CreateOrganizationForm;