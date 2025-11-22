// import { Link } from "react-router-dom";

import { useState } from "react";
import axios from "axios";


const ForgotPasswordForm = () => {

 const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


   const handleForgot = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/auth/forgot-password", {
        email,
      });

      setMessage("Email sent! Check your inbox.");
    } catch (err) {
      setMessage("Email not found.");
    }
  };




  return ( <div className="bg-[#F9F9F9] p-5">
    <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Forgot Your Password ?
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your e-mail address and we will send you a link to reset your password
          </p>

          <form className="space-y-5" onSubmit={handleForgot}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span>Keep me logged in</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#161950] text-white py-2 rounded-lg hover:bg-[#1a1a6e] transition cursor-pointer"
            >
              Send Reset Link
            </button>  

             {message && (
          <p className="text-center text-sm text-green-600 mt-2">{message}</p>
            )}

            <p className="text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Contact Us
              </a>
            </p>
          </form>
        
      </div>
  );
};

export default ForgotPasswordForm;
