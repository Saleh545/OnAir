import React, { useState, useEffect } from "react";
import onair from "../assets/onair.svg";
import moviebck from "../assets/moviebck.svg";


const Spinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div id="preloader-active over" className="overflow-hidden">
          <div className="preloader bg-center bg-cover overflow-hidden" style={{ backgroundImage: `url(${moviebck})` }}>
            <div className="preloader-inner overflow-hidden">
              <div className="preloader-circle overflow-hidden"></div>
              <div className="preloader-img overflow-hidden pere-text"><img src={onair} alt=""/>
              </div>
            </div>
          </div>
        </div>
      )}
  
    </>
  );
};

export default Spinner;
