import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import moviebck from "../assets/moviebck.svg";

const Profile = () => {
  return (
    <div>
        <Header/>

<div className="flex bg-center bg-cover" style={{ backgroundImage: `url(${moviebck})` }}>

        <Sidebar/>

        <p className="text-white">        profile page</p>
</div>
        


        <Footer/>
    </div>
  )
}

export default Profile