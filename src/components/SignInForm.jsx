import { Link } from "react-router-dom";


const SignInForm = () => {
    return (
        <div className="bg-[#F9F9F9] p-5 border border-gray-200 rounded-xl">
            <h2 className="text-3xl font-bold mb-2">Sign In</h2>
            <p className="text-gray-500 mb-6">Enter your email and password to sign in!</p>

            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email address<span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password<span className="text-red-500">*</span></label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="flex items-center justify-between mb-4">
                    <label className="inline-flex items-center text-sm">
                        <input type="checkbox" className="mr-2" />
                        Keep me logged in
                    </label>
                    <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#161950] hover:bg-[#1a1a6e] text-white py-2 rounded-md transition"
                >
                    Sign In
                </button>
            </form>

            <p className="text-sm text-gray-600 mt-6">
                Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Contact Us</a>
            </p>
        </div>
    )
}


export default SignInForm;
