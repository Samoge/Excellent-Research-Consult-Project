import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const Locations = () => {
  return (
    <div className="p-10 justify-center items-center motion-safe:animate-fadeIn">
      <div className="grid justify-items-center items-center">
        <p className="uppercase para tracking-widest text-black text-center">
          we are currently in these cities
        </p>
        <div className='w-[150px] h-[2px] bg-[#ff9900] justify-center items-center'></div>
      </div>

      <div className="items-center justify-items-center grid md:grid-cols-3 sm:grid-cols-1 gap-2 ">
        <div className="mine flex items-center justify-center hover:scale-105 transform duration-300 transition cursor-pointer">
          <div className="w-[250px] h-[200px] bg-black rounded-lg">
            <img src="https://img.freepik.com/free-photo/view-frankfurt-from-skyscraper-sunset-germany_1268-20938.jpg?w=740&t=st=1684760163~exp=1684760763~hmac=7033d11877e8087e988c999ac672c834b5e7930693844da899c905209d2ef55d" alt="" srcset="" className="h-full w-full rounded-lg"/>
          </div>
          <p className="text-[#ff9900]">Birmingham, UK</p>
          <div className="flex items-center text-black mt-2">
            <FiPhoneCall />
            <p className="ml-2 text-sm">+234 457 890 123</p>
          </div>
          <p className="text-black font-light text-sm text-center">
            No 1, Ondo Road, Beside Optima Filling Station
          </p>
        </div>
        <div className="mine flex items-center justify-center hover:scale-105 transform duration-300 transition cursor-pointer">
          <div className="w-[250px] h-[200px] bg-black rounded-lg">
            <img src="https://img.freepik.com/free-photo/modern-amphitheater-usa_1268-14358.jpg?w=740&t=st=1684760513~exp=1684761113~hmac=a1d7ffc28d7d912a2b35a2f6dfd3ebbda75eeb193da7c1d42a7369456d8eb55f" alt="" srcset="" className="h-full w-full rounded-lg"/>
          </div>
          <p className="text-[#ff9900]">Aberdeen, UK</p>
          <div className="flex items-center text-black mt-2">
            <FiPhoneCall />
            <p className="ml-2 text-sm">+234 457 890 123</p>
          </div>
          <p className="text-black font-light text-sm text-center">
            No 1, Ondo Road, Beside Optima Filling Station
          </p>
        </div>
        
        <div className="mine flex items-center justify-center hover:scale-105 transform duration-300 transition cursor-pointer">
          <div className="w-[250px] h-[200px] bg-black rounded-lg">
            <img src="https://img.freepik.com/free-photo/aerial-drone-view-chisinau-downtown-panorama-view-multiple-buildings-roads_1268-18597.jpg?w=826&t=st=1684760678~exp=1684761278~hmac=e4cfd60b13d2263fec6bcd85288b74629bc3614244d486d57a6d27d8108b5ebc" alt="" srcset="" className="h-full w-full rounded-lg"/>
          </div>
          <p className="text-[#ff9900]">Akure, Nigeria</p>
          <div className="flex items-center text-black mt-2">
            <FiPhoneCall />
            <p className="ml-2 text-sm">+234 457 890 123</p>
          </div>
          <p className="text-black font-light text-sm text-center">
            No 1, Ondo Road, Beside Optima Filling Station
          </p>
        </div>
      </div>
    </div>
  );
};

export default Locations;
