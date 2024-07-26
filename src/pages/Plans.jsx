  import React, { useState } from "react";
  import Header from "../components/Header";
  import Sidebar from "../components/Sidebar";
  import Footer from "../components/Footer";
  import moviebck from "../assets/moviebck.svg";
  import avatar from "../assets/avatar.svg";
  import freemium from "../assets/freemium.svg";
  import channel from "../assets/channel.svg";
  import paypal from "../assets/paypal.svg";
  import eco from "../assets/eco.svg";
  import { IoIosClose } from "react-icons/io";

  const plans = [
    {
      id: 1,
      name: "OnAir Freemium",
      price: 3.500,
      channels: 50,
      description:
        "Stream live TV Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 2,
      name: "OnAir Premium",
      price: 6.500,
      channels: 70,
      description: "Watch premium content with no ads.",
    },
    {
      id: 3,
      name: "OnAir Premium 2",
      price: 8.500,
      channels: 90,
      description: "Get access to exclusive channels and content.",
    },
  ];

  const Plans = () => {
    const [selectedPlanId, setSelectedPlanId] = useState(null);
  
    const handlePlanClick = (plan) => {
      setSelectedPlanId(plan.id);
      handlePlanSelect(plan);
    };
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [cart, setCart] = useState([]);

    const handlePlanSelect = (plan) => {
      setSelectedPlan(plan);
    };

    const handleAddToCart = () => {
      if (selectedPlan && !cart.find((item) => item.id === selectedPlan.id)) {
        setCart([...cart, selectedPlan]);
      }
    };

    const handleRemoveFromCart = (planToRemove) => {
      setCart(cart.filter((plan) => plan.id !== planToRemove.id));
    };

    const total = cart.reduce((sum, plan) => sum + plan.price, 0);

    return (
      <div>
        <Header />
        <div className="block lg:flex bg-center bg-cover" style={{ backgroundImage: `url(${moviebck})` }}>
          <Sidebar />
          <div className="lg:ml-[50px] m-0 min-h-screen mt-[28px] w-full flex justify-center">
            <div className="container xl:px-14 px-3 flex-1">
              <h2 className="items-center gap-[24px] flex text-[32px] text-white font-bold">
                <img src={avatar} alt="" />
                Plans
              </h2>
             
              <div className="my-[35px] overflow-hidden bg-[#000000] rounded-[20px] pt-[14px] pb-[30px] pl-[38px] ">
                <div>
                  <h5 className="text-[26px] text-white">Upgrade your service</h5>
                  <div className="bg-[#7A7A7A] block lg:inline-flex rounded-2xl mt-[45px] ">
      {plans.map((plan) => (
        <div key={plan.id} className={`flex cursor-pointer items-center justify-between rounded-[20px] px-[38px] py-[5px] ${ selectedPlanId === plan.id ? 'bg-[#E13C52]' : 'bg-transparent' }`}onClick={() => handlePlanClick(plan)}>
          <h4 className={`text-[#D9D9D9] py-2 text-[14px] ${ selectedPlanId === plan.id ? 'text-white' : '' }`} >{plan.name}</h4>
        </div>
      ))}
    </div>
                </div>

                <div className="lg:flex block justify-end lg:p-0 px-4">
                  {selectedPlan && (
                    <div className="plan-details w-full text-white mt-4 rounded-lg">
                      <div className="mt-[28px] w-[200px]">
                        <img src={freemium} alt="" />
                      </div>
                      <p className="text-[26px] mt-3">
                        Watch {selectedPlan.channels} live TV channels
                      </p>
                      <p className="text-20px text-[#FFFFFF8A]">
                        {selectedPlan.description}
                      </p>
                      <div className="lg:flex block items-end lg:items-center mt-[20px] mr-[10px]">
                        <div className="bg-[#E8E8E8] rounded-[20px] p-[10px] pb-0 w-full h-full">
                          <img
                            className="lg:max-w-none h-full"
                            src={channel}
                            alt=""
                          />
                        </div>
                        <div className="lg:block flex flex-col items-center w-full">
                          <div className="bg-[#353535] inline-flex flex-col items-center justify-center rounded-[20px] pb-[27px] pt-[26px] lg:ml-[10px] mt-3 lg:mt-0">
                            <p className="text-[48px] mx-[30px]">
                              ${selectedPlan.price}
                            </p>
                            <button
                              className="bg-[#E13C52] hover:bg-[#f46174] flex rounded-[60px] px-[15px] py-[10px] mt-2 rounded-[60px]"
                              
                              onClick={handleAddToCart}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="inline-flex justify-end border-l border-[#FFFFFF]">
                    <div className="cart right-0 w-[300px] p-4 rounded-lg text-white ml-4">
                      <h2 className="text-[24px] text-[#FFFFFF] font-medium">
                        Your service
                      </h2>
                      {cart.length === 0 ? (
                        <p className="my-[18px]">Your cart is empty</p>
                      ) : (
                        <ul>
                          {cart.map((plan) => (
                            <li
                              key={plan.id}
                              className="flex justify-between items-center mt-2"
                            >
                              <span>{plan.name}</span>
                              <span>{`$${plan.price}`}</span>
                              <IoIosClose
                                className="text-red-500 text-4xl cursor-pointer"
                                onClick={() => handleRemoveFromCart(plan)}
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-4">
                        <h3 className="text-[20px] text-[#FFFFFF] border-y border-[#FFFFFF] py-[28px]">
                          Total: ${total}
                        </h3>
                      </div>
                      <div className="">
                        <h4 className="text-[24px] text-[#FFFFFF]">
                          Payment with
                        </h4>
                        <div className="flex cursor-pointer justify-between p-[15px] mt-[20px] border-[#E13C52] border-[2px] rounded-[14px] bg-[#FFFFFF]">
                          <span className="text-[20px] font-medium text-black">
                            Pay via
                          </span>
                          <img src={paypal} alt="" />
                        </div>
                        <div className="flex cursor-pointer justify-between p-[15px] mt-[20px] border-[#E13C52] border-[2px] rounded-[14px] bg-[#FFFFFF]">
                          <span className="text-[20px] font-medium text-black">
                            Pay via
                          </span>
                          <img src={eco} alt="" />
                        </div>
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
