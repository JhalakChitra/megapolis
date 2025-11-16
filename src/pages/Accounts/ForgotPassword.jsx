import ForgotPasswordForm from "../../components/Accounts/ForgotPasswordForm";
import RightSidePortion from "../../components/Accounts/RightSidePortion";
import { Link } from "react-router-dom";



const ForgotPassword = () => {
    return (
        <div className="min-h-screen flex">
            {/* Left side - Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8 rounded-md">
                    <button className="text-sm text-gray-600 cursor-pointer mb-6 inline-flex items-center">
                        <span className="mr-2">&larr; </span> Back to Sign In
                    </button> 

                    <ForgotPasswordForm />
                </div>
            </div>

            {/* Right side - Branding */}


            <RightSidePortion />




        </div>
    );
};

export default ForgotPassword;
