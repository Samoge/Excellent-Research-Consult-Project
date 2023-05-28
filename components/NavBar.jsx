import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#000000e6]">
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        {/* <img src="https://drive.google.com/file/d/1YDNNEkIVODHfhE3yDclyfmXn9PTOHMPi/view?usp=sharing" alt="" srcset="" className="w-[200] h-[70]"/> */}

        <img
          src="/public/icons/erclogo.png"
          alt="image"
          loading="lazy"
          width=""
          height=""
          className="border-white border-2 w-[200px] h-[30px]"
        />

        {/* <Image
          src="/../public/icons/erclogo.png"
          alt="/"
          width="200"
          height="70"
        /> */}
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm hover:text-[#ff9900]">Home</li>
            </Link>
            <Link href="#About">
              <li className="ml-10 text-sm hover:text-[#ff9900]">About us</li>
            </Link>
            <Link
              href=""
              // id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
              class="group inline-block"
            >
              <li className="ml-10 text-sm flex items-center justify-center hover:text-[#ff9900]">
                Students
                <span>
                  <svg
                    class="mx-2 fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
                </li>
                <div
                  id="dropdownNavbar"
                  class="border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                  transition duration-150 ease-in-out origin-top min-w-32
                 bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow mt-4 w-44"
                >
                  <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a
                        href="#"
                        class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              
            </Link>

            <Link href="/" class="group inline-block">
              <li className="ml-10 text-sm flex items-center justify-center hover:text-[#ff9900]">
                Organisation
                <span>
                  <svg
                    class="mx-2 fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </li>
              <div
                id="dropdownNavbar"
                class="border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                  transition duration-150 ease-in-out origin-top min-w-32
                 bg-white text-base z-4 list-none divide-y divide-gray-100 rounded shadow mt-4 w-44"
              >
                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[rgba(0,0,0,0.9)] p-4 ease-in duration-200"
              : "fixed left-[-150%] top-0 p-4 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/icons/erclogo.png"
                alt="/"
                width="150"
                height="50"
              />
              <div
                onClick={handleNav}
                className="text-black  rounded-full shadow-lg border-black-400 shadow-gray-500 p-3 bg-white cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="mt-14 border-b border-b-0.5 border-[#ff9900d5]">
              <p className="w-[85%] md:w-[90%] py-4">
                Making Research and Analysing Data for Users to Get Better
                Result.
              </p>
            </div>
          </div>

          <div className="border-[#000000] py-16 flex flex-col">
            <ul className="uppercase text-white">
              <Link href="/">
                <li className="py-3 text-sm hover:text-[#ff9900]">Home</li>
              </Link>
              <Link href="#About">
                <li className="py-3 text-sm hover:text-[#ff9900]">About us</li>
              </Link>
              <Link href="/" class="group inline-block">
                <li className="py-3 text-sm hover:text-[#ff9900] flex justify-center items-center">Students
                
                <span>
                  <svg
                    class="mx-2 fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
                
                <div
                  id="dropdownNavbar"
                  class="border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                  transition duration-150 ease-in-out origin-top min-w-32
                 bg-white text-base z-10 list-none divide-y divide-gray-100 left-[120px] shadow w-44"
                >
                  <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a
                        href="#"
                        class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
                </li>
              </Link>

              <Link href="/" class="group">
                <li className="py-3 text-sm hover:text-[#ff9900] flex items-center">
                  Organisation
                  <span>
                  <svg
                    class="mx-2 fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
                
                <div
                  id="dropdownNavbar"
                  class="border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                  transition duration-150 ease-in-out origin-top min-w-32
                 bg-white text-base z-10 list-none divide-y divide-gray-100 left-[120px] shadow w-44"
                >
                  <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a
                        href="#"
                        class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
                </li>
              </Link>
            </ul>
            <div className="pt-16 mt-6">
              <p className="uppercase tracking-widest text-[#ff9900]">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-2 w-full sm:w-[60%]">
                <div className="rounded-full shadow-lg shadow-[rgb(255,153,0,0.2)] p-2 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-[rgb(255,153,0,0.2)] p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaInstagram />
                </div>
                <div className="rounded-full shadow-lg shadow-[rgb(255,153,0,0.2)] p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaTwitter />
                </div>
                <div className="rounded-full shadow-lg shadow-[rgb(255,153,0,0.2)] p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaFacebook />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default NavBar;
