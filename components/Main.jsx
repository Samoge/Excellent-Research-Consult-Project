import React from "react";
// import Image from "next/image";
// import Head from 'next/head';
// import NavBar from '..components/NavBar';
// import Link from "next/link";
// import React, {useState} from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
// import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa"

const Main = () => {
  return (
    <div className="w-full h-[70vh] lg:h-screen hero">
      <div className="back bg-auto h-full bg-no-repeat py-11 bg-center mx-auto flex items-center">
        <div className="px-8 pt-[150px] justify-items-center">
          <h2 className="text-left text-4xl font-normal text-white ">
            Making Research and Analysing Data for <br />
            Users to Get Better Result.
          </h2>
          <p className="text-sm my-2">
            Your Premier destination for exceptional research services, <br />
            comprehensive data analysis training and insightful market survey
            and analysis.
          </p>
          <div>

            <a href="https://wa.link/lrz2cv"></a>
            <button
              className="py-1 px-6 text-xs h-9 bg-[#ff9900] mt-8"
              type="submit"
            >
              Get Started
            </button>

            <a href="#features">
              <button
                className="py-1 px-4 text-xs h-9 border-2 border-[#ff9900] mt-8 ml-4"
                type="submit"
              >
                Show me more
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
