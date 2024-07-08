import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center flex-col " style={{ backgroundImage: "url('./src/assets/login.svg')", backgroundPosition: "center" }}>
        <div className="container max-w-screen-lg mx-auto flex items-center justify-center my-[40px] flex-col">
          <div className="logo flex justify-center mb-6">
            <Link to="/" className="inline-block">
              <img src="./src/assets/onair.svg" alt="On Air" />
            </Link>
          </div>
          <div className="login-box rounded-[23px] flex flex-col items-center justify-center bg-[#00000099] pt-[26px] px-[95px] pb-[50px] mx-[25px]">
            <h2 className="text-[24px] text-white text-center">Login to get started</h2>
            <form action="" className="mt-[22px] mb-[37px] flex flex-col items-center justify-center">
              <input type="text" placeholder="Name" className="block w-[300px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
              <input type="text" placeholder="Phone number" className="block w-[300px] mt-[11px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
              <input type="text" placeholder="Email" className="block w-[300px] mt-[11px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
              <input type="text" placeholder="Password" className="block w-[300px] mt-[11px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
              <input type="text" placeholder="Confirm password" className="block w-[300px] mt-[11px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />

              <label className="label-container mt-[44px] mb-[18px] cursor-pointer flex items-center gap-[7px]">
                <input type="checkbox" className="hidden"/>
                <span className="checkmark bg-transparent border border-gray-300 rounded w-5 h-5 inline-block relative"></span>
                <p className="text-[#8D8D8D] text-[15px] ">By Signing up, you agree to the <span className="text-[#E13C52]">Terms of Use</span> & <span className="text-[#E13C52]">Privacy Policy.</span></p>
              </label>

              <button type="submit" className="text-white flex flex-col items-center justify-center px-[34px] cursor-pointer text-2xl font-medium py-[10px] rounded-full bg-[#E13C52] mt-[34px] hover:bg-[#f46174]">Register</button>
            </form>
          </div>
          <div className="mt-6 flex justify-center">
            <Link to="/" className="text-[24px] text-white">Back to website</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
