import SignUpForm from "../../components/Accounts/SignUpForm";
import RightSidePortion from "../../components/Accounts/RightSidePortion";


const SignUp = () => {
  return (
  
    <div className="min-h-screen flex">
       
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded-md">
          <button className="text-sm text-gray-600 mb-6 inline-flex items-center">
            <span className="mr-2">&larr; </span> Back to dashboard
          </button>

          <SignUpForm />
        </div>
      </div>

      {/* Right side - Branding */}


      <RightSidePortion />




    </div>
  );
};

export default SignUp;
