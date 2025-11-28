import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";

const SignUpForm = () => {
      
    const navigate = useNavigate();

     const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/auth/login`,
  { email, password },
  { withCredentials: true }
);



        // Save token
        localStorage.setItem("token", response.data.access_token);

        // Navigate to next page
        navigate("/CreateOrganization");

    } catch (error) {
        alert("Invalid email or password");
    }
};




    return (
        <div className="bg-[#F9F9F9] p-5 border border-gray-200 rounded-xl">
            <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
            <p className="text-gray-500 mb-6">Enter your email and password to sign in!</p>

            <form  onSubmit={handleSubmit}>
                <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Enter your name<span className="text-red-500">*</span></label>
                    <InputField
                        type="name"
                           value={name}
                         onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        // className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    <label className="block text-sm font-medium mb-1">Email address<span className="text-red-500">*</span></label>
                    <InputField
                        type="email"
                           value={email}
                         onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        // className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password<span className="text-red-500">*</span></label>
                    <InputField
                         type="password"
                            value={password}
                         onChange={(e) => setPassword(e.target.value)}
                        // className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="flex items-center justify-between mb-4">
                    <label className="inline-flex items-center text-sm">
                        <InputField type="checkbox" className="mr-2" />
                        Keep me logged in
                    </label>
                    <a href="/SignIn" className="text-sm text-blue-600 hover:underline cursor-pointer">Sign In</a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#161950] hover:bg-[#1a1a6e] cursor-pointer text-white py-2 rounded-md transition"
                >
                    Sign Up
                </button>
            </form>

            <p className="text-sm text-gray-600 mt-6">
                Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Contact Us</a>
            </p>
        </div>
    )
}


export default SignUpForm;



