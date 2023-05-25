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
    <div className="w-full h-[50vh] lg:h-screen hero">
      <div className='back bg-auto h-full bg-no-repeat bg-center mx-auto flex items-center'>
        <div className='p-12 justify-items-center'>
          <h2 className="text-left text-4xl font-normal text-white ">
            Making Research and Analysing Data for <br />
            Users to Get Better Result.
          </h2>
          <div>
            <button className='py-1 px-6 text-xs h-9 bg-[#ff9900] mt-8' type="submit">Hire Us</button>
            <button className='py-1 px-4 text-xs h-9 border-2 border-[#ff9900] mt-8 ml-4' type="submit">Show me more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
