import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import moviebck from "../assets/moviebck.svg";
import avatar from "../assets/avatar.svg";


const Profile = () => {
  return (
    <div>
        <Header/>

    <div className="flex bg-center bg-cover" style={{ backgroundImage: `url(${moviebck})` }}>
        <Sidebar/>
        
     
        <div className="ml-[50px] mt-[28px] w-full ">
          <div className="container xl:px-14 px-3">
          <h2 className='items-center gap-[24px] flex text-[32px] text-white'><img src={avatar} alt="" />Profile</h2>
          <form action="" className='mt-[32px]'>
            <input type="email" placeholder="Please enter Email address" className=" mb-[14px] block w-[350px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
            <input type="password" placeholder="Please enter Password" className="block w-[350px] bg-[#313131E6] outline-none py-[10px] pl-[21px] text-white" />
            <button type="submit" className="text-white px-[34px] cursor-pointer text-2xl font-medium py-[10px] rounded-full bg-[#E13C52] mt-[70px] hover:bg-[#f46174]">Save Changes </button>

          </form>
        </div>
        </div>

        

          </div>
        


        <Footer/>
    </div>
  )
}

export default Profile