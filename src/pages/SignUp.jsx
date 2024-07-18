import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
import onair from "../assets/onair.svg";

const SignUp = () => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const existingUser = await axios.get("http://localhost:3000/users", {
        params: {
          email: formData.email,
          phone: formData.phone
        }
      });

      if (existingUser.data.length > 0) {
        setError("A user with this email or phone number already exists");
        return;
      }

      // Kullanıcıyı kaydet
      const response = await axios.post("http://localhost:3000/users", formData);
      console.log(response.data);
      // Başarılı bir şekilde kayıt olundu, ana sayfaya yönlendirme yap
      navigate("/");
    } catch (error) {
      console.error("Error creating account:", error);
      setError("An error occurred while creating the account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="w-full min-h-screen flex items-center justify-center flex-col" style={{ backgroundImage: "url('./src/assets/login.svg')", backgroundPosition: "center" }}>
        <div className="container max-w-screen-lg mx-auto flex items-center justify-center my-[40px] flex-col">
          <div className="logo flex justify-center mb-6">
            <Link to="/" className="inline-block">
              <img src={onair} alt="On Air" />
            </Link>
          </div>
          <div className="login-box rounded-[23px] flex flex-col items-center justify-center bg-[#00000099] pt-[26px] px-[95px] pb-[50px] mx-[25px]">
            <h2 className="text-[24px] text-white text-center">
              Login to get started
            </h2>

            <form onSubmit={handleSubmit} className="mt-[22px] mb-[37px] flex flex-col items-center justify-center">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="block w-[300px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
              <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} className="block w-[300px] mt-[11px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="block w-[300px] mt-[11px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="block w-[300px] mt-[11px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
              <input type="password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} className="block w-[300px] mt-[11px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
              <label className="label-container mt-[44px] mb-[18px] cursor-pointer flex items-center gap-[7px]">
                <input type="checkbox" className="hidden" checked={isTermsAccepted} onChange={handleCheckboxChange} />
                <span className="checkmark bg-transparent border border-gray-300 rounded w-5 h-5 inline-block relative"></span>
                <p className="text-[#8D8D8D] text-[15px]">
                  By Signing up, you agree to the{" "}
                  <span className="text-[#E13C52]">Terms of Use</span> &{" "}
                  <span className="text-[#E13C52]">Privacy Policy.</span>
                </p>
              </label>

              <button type="submit" className={`text-white flex flex-col items-center justify-center px-[34px] cursor-pointer text-2xl font-medium py-[10px] rounded-full mt-[34px] ${ isTermsAccepted ? "bg-[#E13C52] hover:bg-[#f46174]" : "bg-gray-500 cursor-not-allowed" }`} disabled={!isTermsAccepted}>Register</button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
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
