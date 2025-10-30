// import { useState } from "react";
import Header from "../components/Header";
import CreateOrganizationForm from "../components/CreateOrganizationForm";

const CreateOrganization=()=> {
//   const [formData, setFormData] = useState({
//     companyWebsite: "",
//     organizationName: "",
//     address1: "",
//     address2: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Organization Created Successfully!");
//     console.log(formData);
//   };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
        <Header/>

      {/* Back Button */}
  <div className="w-full max-w-3xl mb-6 ml-[60px] mt-[20px]">
  <nav className="text-sm text-gray-500">
    <ul className="flex items-center space-x-2">
      <li>
        <a href="" className="text-gray-400 hover:text-gray-600 font-medium">
          Sign-in
        </a>
      </li>
      <li>/</li>
      <li className="text-gray-600 font-semibold">Create Organization</li>
    </ul>
  </nav>
</div>


      {/* Form Section */}
       <CreateOrganizationForm/>
    </div>
  );
}

/* ✅ Reusable Input Component */
// function InputField({ label, name, type = "text", value, onChange, placeholder, required }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium mb-1">
//         {label}
//         {required && <span className="text-red-500">*</span>}
//       </label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500 outline-none"
//       />
//     </div>
//   );
// }


export default CreateOrganization;