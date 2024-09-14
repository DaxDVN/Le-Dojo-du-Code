import { Button } from "flowbite-react";
import google_icon from "../../../../assets/images/google.svg";

export default function LoginPage() {
  return (
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-center text-2xl font-semibold text-black text-4xl m-8">Login</h1>
          <form className="space-y-4">
            <input
                type="text"
                className="text-black bg-[#E9ECEF] w-full h-[60px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500 mb-2"
                placeholder="Phone number or email"
            />
            <input
                type="password"
                className="text-black bg-[#E9ECEF] w-full h-[60px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
                placeholder="Password"
            />

            <div className="flex items-center">
              <input type="checkbox" className="mr-2"/>
              <span className="text-[#495057]">Remember me</span>
            </div>
            <Button pill className="w-full bg-[#D96E48]">
              Log in
            </Button>
            <p className="text-center text-black mt-2">Or Login Using</p>
            <Button color="#D96E48" pill className="w-full p-0 flex items-center bg-[#E9ECEF] justify-center">
              <img src={google_icon} alt="Google icon" className="mr-1 h-10 w-10" />
              <span className="text-[#000000] flex items-center">Continue with Google</span>
            </Button>
          </form>
          <p className="text-center mt-6">
            <a href="#" className="text-blue-500 hover:underline text-[#495057]">
              Forgot password?
            </a>
          </p>
          <p className="text-center mt-6 mb-4">
            <span className="text-black">Don't have an account?</span> <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
  );
}
