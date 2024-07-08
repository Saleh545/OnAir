import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container ">
        <div className="center flex flex-col items-center w-full justify-center h-screen "style={{ backgroundImage: "url('./src/assets/login.svg')",  backgroundPosition:"center"}}>
          <div className="logo">
            <Link to="/" className="inline-block">
              <img src="./src/assets/onair.svg" alt="On Air" />
            </Link>
          </div>
          <div className="login-box rounded-[23px] flex flex-col items-center justify-center  bg-[#00000099] mt-[53px] mb-[22px] pt-[26px] px-[95px] pb-[50px]   mx-[25px] ">
            <h2 className="text-[24px] text-white text-center">Login to get started</h2>
            <form action="" className="mt-[22px] mb-[37px] flex flex-col items-center justify-center">
              <input type="text"placeholder="Please enter Email address"className="block w-[300px]  bg-[#313131E6] outline-none py-[10px] pl-[21px] w-full text-white"              /> 
              <input type="text" placeholder="Password" className="block w-[300px] mt-[11px]  bg-[#313131E6] outline-none py-[10px] pl-[21px] w-full text-white"/>
              <button type="submit"className="text-white  px-[34px] cursor-pointer text-2xl font-medium py-[10px] rounded-full bg-[#E13C52] mt-[70px] hover:bg-[#f46174] ">Sign in</button>
            </form>
            <Link className="text-[#838199]">Forgot password?</Link>
          </div>
          <Link to="/" className="text-[24px] text-white">Back to website</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
