import React, {useRef, useState} from 'react';
// import {Autoplay, Pagination, Navigation, Mousewheel, Keyboard} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Purpose = () => {
  return (
    <div className="w-full h-auto md:h-auto hero">

        
      <div className="p-10 justify-center back bg-auto h-full bg-no-repeat bg-center mx-auto flex-col items-center">
      <div className="grid justify-items-center items-center">
        <p className="uppercase para tracking-widest text-white text-center">
        you can’t do without us
        </p>
        <div className="w-[150px] h-[2px] bg-[#ff9900] justify-center items-center"></div>
      </div>


      <Swiper 
      // pagination={true} modules={[Pagination]}
       className="mySwiper">
        <SwiperSlide>
        <div className="mt-8 flex-col items-center justify-item-center hover:scale-105 transform duration-300 transition cursor-pointer">
            <p className="text-center italic px-2">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>

            <div className="flex items-center justify-center mx-auto p-2">

            <div className="mr-2 h-[50px] w-[50px] rounded-full">
                <img src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/271768322_4711185365664384_2657745006275074093_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHH70r2IUUv_dR0KS8QrsqrrIsVXNSdJkqsixVc1J0mSiGTK9rsorAG_Sox7IRfoZQ0kvTJL5EfBLgybjku9YtA&_nc_ohc=6QT8RfzyU4sAX-zXteO&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&oh=00_AfBfPLvLvC5REOVd8KsqgOIvOziGtDvNYB9txtRF1io8ow&oe=646FEA20" alt="/" srcset="" className="w-full h-full rounded-full"/>
            </div>
            <p className="capitalize text-sm b-0">O O SamOge, ceo .........</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className="mt-8 flex-col items-center justify-item-center hover:scale-105 transform duration-300 transition cursor-pointer">
            <p className="text-center italic px-2">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>

            <div className="flex items-center justify-center mx-auto p-2">

            <div className="mr-2 h-[50px] w-[50px] rounded-full">
                <img src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/271768322_4711185365664384_2657745006275074093_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHH70r2IUUv_dR0KS8QrsqrrIsVXNSdJkqsixVc1J0mSiGTK9rsorAG_Sox7IRfoZQ0kvTJL5EfBLgybjku9YtA&_nc_ohc=6QT8RfzyU4sAX-zXteO&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&oh=00_AfBfPLvLvC5REOVd8KsqgOIvOziGtDvNYB9txtRF1io8ow&oe=646FEA20" alt="/" srcset="" className="w-full h-full rounded-full"/>
            </div>
            <p className="capitalize text-sm b-0">O O SamOge, ceo .........</p>

            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="my-8 flex-col items-center justify-item-center hover:scale-105 transform duration-300 transition cursor-pointer">
            <p className="text-center italic px-2">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>

            <div className="flex items-center justify-center mx-auto p-2">

            <div className="mr-2 h-[50px] w-[50px] rounded-full">
                <img src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/271768322_4711185365664384_2657745006275074093_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHH70r2IUUv_dR0KS8QrsqrrIsVXNSdJkqsixVc1J0mSiGTK9rsorAG_Sox7IRfoZQ0kvTJL5EfBLgybjku9YtA&_nc_ohc=6QT8RfzyU4sAX-zXteO&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&oh=00_AfBfPLvLvC5REOVd8KsqgOIvOziGtDvNYB9txtRF1io8ow&oe=646FEA20" alt="/" srcset="" className="w-full h-full rounded-full"/>
            </div>
            <p className="capitalize text-sm b-0">O O SamOge, ceo .........</p>

            </div>
          </div></SwiperSlide>
       
      </Swiper>










        
      </div>
    </div>
  );
};

export default Purpose;
