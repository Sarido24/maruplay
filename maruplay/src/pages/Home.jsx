import Navbar from "../components/Navbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import gitar from "../assets/gitar1.png";
import catur from "../assets/catur.png";

// Import Swiper styles
import "swiper/css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-full h-[80vh] md:h-[90vh] bg-gradient-to-r from-cyan-950 to-blue-800 text-white flex flex-col md:flex-row justify-center gap-5  md:justify-evenly items-center">
            <div
              className="flex flex-col gap-5 items-center w-full md:w-[40%]  justify-center"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <p className="text-md md:text-2xl w-[60%] md:w-[80%]">
                wellcome to maruPLAY
              </p>
              <h1 className="text-4xl md:text-8xl w-[60%] md:w-[80%] font-semibold">
                Find your favorite items here
              </h1>
              <div className=" uppercase w-[60%] md:w-[80%]">
                <button className="p-5 border rounded-lg uppercase w-[100%] md:w-[40%] hover:bg-slate-500 text-xl">
                  Buy items
                </button>
              </div>
            </div>
            <div
              className="p-5 md:w-[40%]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <img src={gitar} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[80vh] md:h-[90vh] bg-gradient-to-r from-cyan-950 to-blue-800 text-white flex flex-col md:flex-row justify-center gap-5  md:justify-evenly items-center">
            <div
              className="flex flex-col gap-5 items-center w-full md:w-[40%]  justify-center"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <p className="text-md md:text-2xl w-[60%] md:w-[80%]">
                wellcome to maruPLAY
              </p>
              <h1 className="text-4xl md:text-8xl w-[60%] md:w-[80%] font-semibold">
                Find your favorite items here
              </h1>
              <div className=" uppercase w-[60%] md:w-[80%]">
                <button className="p-5 border rounded-lg uppercase w-[100%] md:w-[40%] hover:bg-slate-500 text-xl">
                  Buy items
                </button>
              </div>
            </div>
            <div
              className="p-5 md:w-[40%]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <img src={catur} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        className="grid md:grid-cols-2 gap-10 p-16 "
      >
        <div className="h-[300px] relative md:h-[600px] flex flex-col bg-slate-200 rounded-md cursor-pointer">
          <div className="h-[50%] flex flex-col items-center">
            <img
              src="https://upload.jaknot.com/2023/05/images/products/7778af/original/easysmx-gamepad-wired-gaming-controller-dualshock-for-android-pc-ps3-esm-9100.png"
              alt=""
              className="h-full hover:rotate-6 hover:scale-125 transition-all duration-700 "
            />
          </div>
          <div className="h-[50%] flex flex-col justify-center items-center gap-4 font-semibold text-slate-700">
            <h1 className="text-2xl hover:text-blue-500 transition-all duration-200 ">
              GamePad Terbaru
            </h1>
            <p>$10</p>
            <button className="absolute bottom-5 right-5 text-xs md:text-xl bg-blue-600 text-white p-5 rounded-full">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="flex flex-col h-[600px] gap-3">
          <div className="flex flex-col relative h-[50%] bg-slate-200 rounded-md">
            <div className="h-[50%] flex flex-col items-center ">
              <img
                src="https://upload.jaknot.com/2023/05/images/products/7778af/original/easysmx-gamepad-wired-gaming-controller-dualshock-for-android-pc-ps3-esm-9100.png"
                alt=""
                className="h-full hover:rotate-6 hover:scale-125 transition-all duration-700 "
              />
            </div>
            <div className="h-[50%] flex flex-col justify-center items-center gap-4 font-semibold text-slate-700">
              <h1 className="text-2xl ">GamePad Terbaru</h1>
              <p>$10</p>
            </div>
            <button className="absolute bottom-5 right-5 text-xs md:text-xl bg-blue-600 text-white p-5 rounded-full">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="flex flex-col relative  h-[50%] bg-slate-200 rounded-md">
            <div className="h-[50%] flex flex-col items-center ">
              <img
                src="https://upload.jaknot.com/2023/05/images/products/7778af/original/easysmx-gamepad-wired-gaming-controller-dualshock-for-android-pc-ps3-esm-9100.png"
                alt=""
                className="h-full hover:rotate-6 hover:scale-125 transition-all duration-700"
              />
            </div>
            <div className="h-[50%] flex flex-col justify-center items-center gap-4 font-semibold text-slate-700">
              <h1 className="text-2xl ">GamePad Terbaru</h1>
              <p>$10</p>
            </div>
            <button className="absolute bottom-5 right-5 text-xs md:text-xl bg-blue-600 text-white p-5 rounded-full">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
