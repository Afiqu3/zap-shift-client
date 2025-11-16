import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div className="mb-6">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        stopOnHover={false}
      >
        <div className="relative">
          <img src={bannerImg1} />
          <p className="absolute text-[#606060] max-w-[629px] text-start left-20 bottom-20">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="absolute left-20 bottom-7 flex items-center gap-4">
            <div className="flex items-center">
              <button className="btn bg-[#CAEB66] rounded-full shadow-none border-0">
                Track Your Parcel
              </button>
              <button className="p-2 bg-[#1f1f1f] rounded-full cursor-pointer">
                <MdOutlineArrowOutward className="text-[#CAEB66]" size={18} />
              </button>
            </div>
            <div>
              <button className="btn rounded-lg shadow-none border-0">
                Track Your Parcel
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={bannerImg2} />
          <p className="absolute text-[#606060] max-w-[629px] text-start left-20 bottom-20">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="absolute left-20 bottom-7 flex items-center gap-4">
            <div className="flex items-center">
              <button className="btn bg-[#CAEB66] rounded-full shadow-none border-0">
                Track Your Parcel
              </button>
              <button className="p-2 bg-[#1f1f1f] rounded-full cursor-pointer">
                <MdOutlineArrowOutward className="text-[#CAEB66]" size={18} />
              </button>
            </div>
            <div>
              <button className="btn rounded-lg shadow-none border-0">
                Track Your Parcel
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={bannerImg3} />
          <p className="absolute text-[#606060] max-w-[629px] text-start left-20 bottom-20">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="absolute left-20 bottom-7 flex items-center gap-4">
            <div className="flex items-center">
              <button className="btn bg-[#CAEB66] rounded-full shadow-none border-0">
                Track Your Parcel
              </button>
              <button className="p-2 bg-[#1f1f1f] rounded-full cursor-pointer">
                <MdOutlineArrowOutward className="text-[#CAEB66]" size={18} />
              </button>
            </div>
            <div>
              <button className="btn rounded-lg shadow-none border-0">
                Track Your Parcel
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
