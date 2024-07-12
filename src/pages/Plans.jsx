import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import moviebck from "../assets/moviebck.svg";
import avatar from "../assets/avatar.svg";
import freemium from "../assets/freemium.svg";
import channel from "../assets/channel.svg";
import { IoIosClose } from "react-icons/io";

const plans = [
  {
    id: 1,
    name: "OnAir Freemium",
    price: 3500,
    channels: 50,
    description:
      "Stream live TV Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    id: 2,
    name: "OnAir Premium",
    price: 6500,
    channels: 70,
    description: "Watch premium content with no ads.",
  },
  {
    id: 3,
    name: "OnAir Premium 2",
    price: 8500,
    channels: 90,
    description: "Get access to exclusive channels and content.",
  },
];

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [cart, setCart] = useState([]);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleAddToCart = () => {
    if (selectedPlan) {
      setCart([...cart, selectedPlan]);
      setSelectedPlan(null);
    }
  };

  const handleRemoveFromCart = (planToRemove) => {
    setCart(cart.filter((plan) => plan.id !== planToRemove.id));
  };

  const total = cart.reduce((sum, plan) => sum + plan.price, 0);

  return (
    <div>
      <Header />
      <div
        className="flex bg-center bg-cover"
        style={{ backgroundImage: `url(${moviebck})` }}
      >
        <Sidebar />
        <div className="ml-[50px] mt-[28px] w-full flex">
          <div className="container xl:px-14 px-3 flex-1">
            <h2 className="items-center gap-[24px] flex text-[32px] text-white"><img src={avatar} alt="" />Plans</h2>
            <div className="w-full mt-[28px]">
              {plans.map((plan) => (
                <div key={plan.id}className="flex cursor-pointer items-center justify-between bg-[#000000] hover:bg-[#444242] rounded-[20px] px-[38px] py-[14px] mt-[10px]"onClick={() => handlePlanSelect(plan)}>
                  <h4 className="text-white text-[26px]">{plan.name}</h4>
                  <p className="text-white text-[26px]">{`$${plan.price}`}</p>
                </div>
              ))}
            </div>

            <div className="my-[35px] overflow-hidden  bg-[#000000] rounded-[20px] pt-[14px] pb-[30px] pl-[38px] ">
              <div>
                <h5 className="text-[26px] text-white">Upgrade your service</h5>
                <div className=" bg-[#7A7A7A] inline-flex rounded-2xl mt-[45px] ">
                  {plans.map((plan) => (
                    <div key={plan.id} className="flex cursor-pointer items-center justify-between   rounded-[20px] px-[38px] py-[5px] "onClick={() => handlePlanSelect(plan)}>
                      <h4 className="text-[#D9D9D9] text-[14px]">
                        {plan.name}
                      </h4>
                    </div>
                  ))}
                </div>
                <div className="mt-[28px] w-[200px]">
                <img src={freemium} alt="" />
                </div>
              </div>

              <div className="flex justify-between ">
                {selectedPlan && (
                  <div className="plan-details   text-white mt-4 rounded-lg w-full">
                    <p className="text-[26px]">Watch {selectedPlan.channels}   live TV channels</p>
                    <p className="text-20px text-red-400">{selectedPlan.description}</p>

                  <div className="flex">
            <div className=""><img src={channel} alt="" /></div>

              <div className="bg-[#353535] rounded-[20px] pb-[10px] pr-[11px] pt-[22px] pl-[54px]">
                    <p>Price: ${selectedPlan.price}</p>
                    <button className="bg-red-500 p-2 mt-2 rounded"onClick={handleAddToCart}>Add to Cart</button>
                </div>
                  </div>


                  </div>
                )}

                <div className="w-full inline-flex justify-end">
                  <div className="cart  right-0 w-[300px]  p-4 rounded-lg text-white ml-4">
                    <h2 className="text-[24px]">Your Cart</h2>
                    {cart.length === 0 ? (
                      <p>Your cart is empty</p>
                    ) : (
                      <ul>
                        {cart.map((plan) => (
                          <li key={plan.id}className="flex justify-between items-center mt-2">
                            <span>{plan.name}</span>
                            <span>{`$${plan.price}`}</span>
                            <IoIosClose className="text-red-500 cursor-pointer"onClick={() => handleRemoveFromCart(plan)}/>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-4">
                      <h3 className="text-[20px]">Total: ${total}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plans;
