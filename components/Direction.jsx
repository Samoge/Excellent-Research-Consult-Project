import React from "react";
import { GrInfo } from "react-icons/gr";
const Direction = () => {
  return (
    <div className="p-10 flex-col justify-center items-center w-full motion-safe:animate-fadeIn">
      <div className="relative p-4 bg-white" id="goals">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div
            className="lg:col-start-2 md:pl-20"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:leading-9 capitalize">
            how it works - simple as 1, 2, 3
            </h4>

            <ul className="mt-10">
              <li className="hover:scale-105 ease-in duration-300">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-[#ffffff] bg-[#ff9900] rounded-md">
                    <GrInfo className="text-[#ffffff]" size={25}  />
                    </div>
                  </div>

                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900">
                      Inspirational Testimonies
                    </h5>

                    <p className="mt-2 text-base leading-6 text-gray-500">
                      That everyone who visits will be able to find
                      inspirational testimonies.
                    </p>
                  </div>
                </div>
              </li>

              <li className="mt-10 hover:scale-105 ease-in duration-300">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-[#ff9900] rounded-md">
                    <GrInfo className="text-[#ffffff]" size={25}  />
                    </div>
                  </div>

                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900">
                      To provide Strength
                    </h5>

                    <p className="mt-2 text-base leading-6 text-gray-500">
                      That after a minute on the app/website, even if they’re at
                      the point of suicide - hope, strength and joy will be
                      restored to them.
                    </p>
                  </div>
                </div>
              </li>

              <li className="mt-10 hover:scale-105 ease-in duration-300">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-[#ff9900] rounded-md">
                    <GrInfo className="text-[#ffffff]" size={25}  />
                    </div>
                  </div>

                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900">
                      To form Connections
                    </h5>

                    <p className="mt-2 text-base leading-6 text-gray-500">
                      That people can collaborate together to form new
                      connections in The Christian community based on shared
                      past experiences.
                    </p>
                  </div>
                </div>
              </li>

             
            </ul>
          </div>

          <div
            className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <img
              src="https://img.freepik.com/free-photo/authentic-book-club-scene_23-2150104566.jpg?w=826&t=st=1684761227~exp=1684761827~hmac=4ecb24f45ae5449e476ac971e93982df5d160d2681013831e24efb3de21377e4"
              alt="illustration"
              className="relative w-auto mx-auto rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Direction;
