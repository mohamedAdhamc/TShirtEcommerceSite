import React from 'react';
import bannerShirt from "../assets/tshirt-homepage.png";
import "../index.css"
import NewProduct from './NewProduct';

const Banner = () => {
  return (
    <div className="bg-white  mt-20 border-black py-12 mb-5">{/*borders, margins, paddings*/}
      <div className="container mx-auto">{/* margin auto */}
        <div className="flex items-center justify-center relative">
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100  w-4/6 h-2/6 rounded-3xl'>
          </div>
          <div className="relative bg-cover bg-center w-full md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden ">
            <img
              className="w-full h-full object-cover z-10"
              src= {bannerShirt}
              alt="Chocolates Banner"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  inset-0 flex flex-col items-center justify-center text-white p-8">
              <h2 className="whitespace-nowrap overflow-hidden cursive-font text-5xl md:text-7xl text-black font-light mb-4 text-center ">
                Top<span className='px-4'></span>Quality
              </h2>
            </div>
          </div>
          {/* <NewProduct></NewProduct> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
