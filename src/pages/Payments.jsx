import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import moviebck from "../assets/moviebck.svg";
import { IoNewspaperOutline } from "react-icons/io5";

const payments = [
  { number: '#001', date: '25.04.2022', total: '$10' },
  { number: '#002', date: '25.05.2022', total: '$16' },
  { number: '#003', date: '25.06.2022', total: '$10' },
  { number: '#004', date: '25.07.2022', total: '$6.5' },
  { number: '#005', date: '25.08.2022', total: '$10.50' },
  { number: '#006', date: '25.09.2022', total: '$7' },
  { number: '#007', date: '25.10.2022', total: '$18' },
  { number: '#008', date: '25.11.2022', total: '$20' },
];

const Payments = () => {
  return (
    <div>
      <Header />
      <div className="block lg:flex bg-center bg-cover" style={{ backgroundImage: `url(${moviebck})` }}>
        <Sidebar />
        <div className="lg:ml-[50px] m-0 min-h-screen mt-[28px] w-full flex justify-center">
          <div className="container xl:px-14 px-3 flex-1">
            <h2 className="items-center gap-[24px] flex text-[32px] font-bold text-white">
              <IoNewspaperOutline /> Payments history
            </h2>
            <div className="overflow-x-auto mt-[28px]">
              <table className="min-w-full bg-transparent text-white rounded-lg">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-4 lg:px-6 py-3 text-left text-[16px] lg:text-[20px] font-medium text-[#838199] tracking-wider">Number</th>
                    <th className="px-4 lg:px-6 py-3 text-left text-[16px] lg:text-[20px] font-medium text-[#838199] tracking-wider">Date</th>
                    <th className="px-4 lg:px-6 py-3 text-left text-[16px] lg:text-[20px] font-medium text-[#838199] tracking-wider">Total</th>
                    <th className="px-4 lg:px-6 py-3 text-left text-[16px] lg:text-[20px] font-medium text-[#838199] tracking-wider">View</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.number} className="border-b border-[#616161] cursor-pointer hover:bg-[#444242]">
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-[16px] lg:text-[20px]">{payment.number}</td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-[16px] lg:text-[20px]">{payment.date}</td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-[16px] lg:text-[20px]">{payment.total}</td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-[16px] lg:text-[20px] text-red-500 cursor-pointer">view</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payments;
