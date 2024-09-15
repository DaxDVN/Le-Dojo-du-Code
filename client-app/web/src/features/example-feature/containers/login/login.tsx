import { Button } from "flowbite-react";
import google_icon from "../../../../assets/images/google.svg";

export default function LoginPage() {
  return (
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-center font-semibold text-black text-4xl m-8">Login</h1>
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
              <input type="checkbox" className="mr-2 "/>
              <span className="text-[#495057] text-sm">Remember me</span>
            </div>
            <Button pill className="w-full border-none bg-[#D96E48] hover:bg-[#f29849] active:bg-[#f29849]">
              Log in
            </Button>
            <div className="flex items-center">
              <span className="flex-grow border-t border-gray-300"></span>
              <p className="text-center text-black text-sm mx-4">Or Login Using</p>
              <span className="flex-grow border-t border-gray-300"></span>
            </div>

            <Button color="#D96E48" pill
                    className="w-full p-0 border-none flex items-center bg-[#E9ECEF] justify-center hover:bg-[#f1f3f5]">
              <img src={google_icon} alt="Google icon" className="mr-1 h-10 w-10"/>
              <span className="text-[#000000] flex items-center">Continue with Google</span>
            </Button>
          </form>
          <p className="text-center mt-6">
            <a href="#" className=" text-[#D96E48] hover:text-[#f29849] hover:no-underline">
              Forgot password?
            </a>
          </p>
          <p className="text-center mt-6 mb-4">
            <span className="text-black">Don't have an account?</span> <a href="#"
                                                                          className="text-[#D96E48] hover:text-[#f29849] hover:no-underline">Sign
            up</a>
          </p>
        </div>
      </div>
  );
}
