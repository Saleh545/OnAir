  import React from "react";
  import { Link } from "react-router-dom";
  import Spinner from "../components/Spinner";
  import onair from "../assets/onair.svg";

  const Login = () => {
    return (
      <>
            <Spinner/>

        <div className="w-full min-h-screen flex items-center justify-center flex-col " style={{ backgroundImage: "url('./src/assets/login.svg')", backgroundPosition: "center" }}>
          <div className="container max-w-screen-lg mx-auto flex items-center justify-center flex-col">
            <div className="logo flex justify-center mb-6">
              <Link to="/" className="inline-block">
                <img src={onair} alt="On Air" />
              </Link>
            </div>
            <div className="login-box rounded-[23px] flex flex-col items-center justify-center bg-[#00000099] pt-[26px] px-[95px] pb-[50px] mx-[25px]">
              <h2 className="text-[24px] text-white text-center">Login to get started</h2>
              <form action="" className="mt-[22px] mb-[37px] flex flex-col items-center justify-center">
                <input type="text" placeholder="Please enter Email address" className="block w-[300px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
                <input type="text" placeholder="Password" className="block w-[300px] mt-[11px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
                <button type="submit" className="text-white px-[34px] cursor-pointer text-2xl font-medium py-[10px] rounded-full bg-[#E13C52] mt-[70px] hover:bg-[#f46174]">Sign in</button>
              </form>
              <Link className="text-[#838199] hover:text-white" >Forgot password?</Link>
              <Link className="text-[#838199] hover:text-white mt-4" to="/signup">Don't you have an account??</Link>

            </div>
            <div className="mt-6 flex justify-center">
              <Link to="/" className="text-[24px] text-white">Back to website</Link>
            </div>
          </div>

        </div>
      </>
    );
  };

  export default Login;
