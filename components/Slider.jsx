import React, {useRef, useState} from 'react';
import {Autoplay, Pagination, Navigation, Mousewheel, Keyboard} from 'Swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <div className="p-10 flex-col justify-center items-center w-full bg-[#4244451f]">
      <div className="grid justify-items-center items-center">
        <p className="uppercase para tracking-widest text-black text-center">
          OUR PREVIOUS WORKS
        </p>
        <div className="w-[150px] h-[2px] bg-[#ff9900] justify-center items-center"></div>
      </div>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper mt-8"
      >
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/unrecognizable-businesswoman-working-office-writing-business-plans-her-notebook_637285-89.jpg?w=740&t=st=1684760801~exp=1684761401~hmac=4452647604c43bb67c850bc72ef5c244b2291509646c0c3fb9cc25070cfc8c4e" alt="" srcset="" className="text-center md:w-[70%] mx-auto md:h-[80vh]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/smart-dark-skinned-student-writing-something-down-from-book-listening-audio-book-his-headphones-while-sitting-cafeteria-during-his-break-drinking-takeaway-coffee-working-hard_273609-7455.jpg?w=740&t=st=1684760944~exp=1684761544~hmac=02fed6be3c82054a54f4207c39233d18d4797b4ab1bb093c2b877e90094e923d" alt="" srcset="" className="text-center md:w-[70%] mx-auto md:h-[80vh]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/authentic-book-club-scene_23-2150104566.jpg?w=740&t=st=1684761227~exp=1684761827~hmac=4ecb24f45ae5449e476ac971e93982df5d160d2681013831e24efb3de21377e4" alt="" srcset="" className="text-center md:w-[70%] mx-auto md:h-[80vh]"/>
        </SwiperSlide>
        
      </Swiper>      
    </div>
  );
};

export default Slider;
