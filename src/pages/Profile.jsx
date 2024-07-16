import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import moviebck from "../assets/moviebck.svg";
import avatar from "../assets/avatar.svg";
import Spinner from '../components/Spinner';


const Profile = () => {
  return (
    <div>
            <Spinner/>

        <Header/>

    <div className=" block lg:flex bg-center bg-cover" style={{ backgroundImage: `url(${moviebck})` }}>
        <Sidebar/>
        
     
        <div className="lg:ml-[50px] m-0 mt-[28px] w-full flex flex-col items-center lg:block  min-h-screen">
          <div className="container xl:px-14 px-3">
          <h2 className='items-center gap-[24px] flex text-[32px] text-white font-bold'><img src={avatar} alt="" />Profile</h2>
          <form action="" className='mt-8 flex flex-col items-center lg:block'>
  <div className="w-[350px]">
    <input
      type="email"
      placeholder="E-posta adresinizi girin"
      className="mb-4 inline-block w-full bg-[#313131E6] outline-none py-3 pl-4 text-white rounded-lg"
    />
  </div>
  <div className="  w-[350px]">
    <input
      type="password"
      placeholder="Şifrenizi girin"
      className="inline-block w-full bg-[#313131E6] outline-none py-3 pl-4 text-white rounded-lg"
    />
  </div>
  <button
    type="submit"
    className="text-white px-8 cursor-pointer text-2xl font-medium py-3 rounded-full bg-[#E13C52] mt-10 hover:bg-[#f46174]"
  >
    Değişiklikleri Kaydet
  </button>
</form>

        </div>
        </div>

        

          </div>
        


        <Footer/>
    </div>
  )
}

export default Profile