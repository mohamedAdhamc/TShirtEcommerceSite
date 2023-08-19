import React from 'react';
import bannerShirt from "../assets/tshirt-homepage.png";
import "../index.css"

const Banner = () => {
  return (
    <div className="bg-white border-x-2 border-y-2 mt-20 border-black py-12 mb-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="relative bg-cover bg-center w-full md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden z-10">
            <img
              className="w-full h-full object-cover z-10"
              src= {bannerShirt}
              alt="Chocolates Banner"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <h2 className=" cursive-font text-3xl md:text-5xl text-black font-light mb-4 text-center z-20">
                The Right Quality
              </h2>
              <div className=' bg-slate-400 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-4/6 h-2/6 '>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
