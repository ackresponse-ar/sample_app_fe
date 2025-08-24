"use client";
import animation from "@/animations/h1.json";
import { CallBackend } from "@/service/backend-call";
import toast from "react-hot-toast";
import { IoMdArrowForward } from "react-icons/io";
import Lottie from "react-lottie-player";

const LandingPage = () => {
  return (
    <div className="min-h-[100dvh] py-14 relative overflow-hidden">
      {/* Animated background with zoom effect */}
      <div
        className="absolute inset-0 animate-background-zoom"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      ></div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-yellow-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-red-300 rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-orange-300 rounded-full animate-float opacity-60" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="flex flex-col min-[1100px]:flex-row items-center justify-center w-full relative z-10">
        <div className="order-2 min-[1100px]:order-1 min-[1100px]:w-[60%] min-[1100px]:pl-5">
          <div className="app-layout">
            <section className="my-6">
              <div className="mb-6">
                <h1 className="text-[24px] text-white md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-extrabold leading-[1.2] mb-4 drop-shadow-lg tracking-wide">
                  🎉 Namaste, Welcome to Nepali Mela 2025, UK. Hope you all have a great day. Thank you! 🎉
                </h1>
                <div className="w-20 h-1 animate-gradient-shift rounded-full mb-4"></div>
              </div>
              
              <h2 className="text-[18px] text-white md:text-[22px] lg:text-[24px] xl:text-[26px] font-bold leading-[1.3] mb-5 drop-shadow-lg tracking-wide">
                Celebrating Nepali Culture in the Heart of the UK.
              </h2>
              
              <div className="space-y-4 mb-6">
                <p className="text-[16px] md:text-[17px] lg:text-[18px] text-white leading-[1.6] drop-shadow-lg font-medium">
                  At <span className="font-bold text-red-200 text-[17px] md:text-[18px] lg:text-[19px]">ackResponse</span>, we're proud to be part of the Nepali Mela UK,
                  showcasing our innovative technology solutions and digital transformation expertise.
                </p>
                
                <p className="text-[16px] md:text-[17px] lg:text-[18px] text-white leading-[1.6] drop-shadow-lg font-medium">
                  As a leading technology company founded by <span className="font-semibold text-orange-200 text-[17px] md:text-[18px] lg:text-[19px]">Nepali entrepreneurs</span>,
                  we bridge traditional values with cutting-edge innovation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-red-500 hover-zoom smooth-transition">
                  <h3 className="font-bold text-red-600 mb-2 text-[14px] md:text-[15px] leading-[1.4]">🏪 Nepali Stalls</h3>
                  <p className="text-[12px] md:text-[13px] text-gray-700 leading-[1.5] font-medium">Authentic food, crafts, and products from Nepali entrepreneurs</p>
                </div>
                <div className="bg-white bg-opacity-95 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-orange-500 hover-zoom smooth-transition">
                  <h3 className="font-bold text-orange-600 mb-2 text-[14px] md:text-[15px] leading-[1.4]">🍜 Food Festival</h3>
                  <p className="text-[12px] md:text-[13px] text-gray-700 leading-[1.5] font-medium">Taste traditional Nepali dishes and street food</p>
                </div>
                <div className="bg-white bg-opacity-95 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-blue-500 hover-zoom smooth-transition">
                  <h3 className="font-bold text-blue-600 mb-2 text-[14px] md:text-[15px] leading-[1.4]">💻 AckResponse Tech</h3>
                  <p className="text-[12px] md:text-[13px] text-gray-700 leading-[1.5] font-medium">Innovative cloud solutions and digital transformation</p>
                </div>
                <div className="bg-white bg-opacity-95 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-green-500 hover-zoom smooth-transition">
                  <h3 className="font-bold text-green-600 mb-2 text-[14px] md:text-[15px] leading-[1.4]">🎭 Live Performances</h3>
                  <p className="text-[12px] md:text-[13px] text-gray-700 leading-[1.5] font-medium">Traditional music, dance, and cultural shows</p>
                </div>
              </div>
            </section>
            
            <button
              onClick={async () => {
                try {
                  const data = await CallBackend();
                  toast.success(data)
                } catch (error) {
                  toast.error('Error occurred while calling backend');

                }
              }}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold flex gap-3 group items-center my-5 px-10 py-3 rounded-xl duration-300 hover:px-14 hover:shadow-lg transform hover:scale-105 shadow-lg animate-pulse-glow text-[16px] md:text-[17px] tracking-wide"
            >
              View Message From Backend
              <IoMdArrowForward
                size={20}
                className="group-hover:-rotate-180 transform transition-transform duration-300"
              />
            </button>
            
            <p className="caption min-[1100px]:w-[80%] py-5 min-[1900px]:mt-20 text-white drop-shadow-lg text-[15px] md:text-[16px] leading-[1.6] font-medium">
              <span className="font-bold text-red-200 animate-pulse-glow text-[16px] md:text-[17px]">Namaste! 🙏</span>{" "}
              We offer comprehensive <span className=" text-blue-200 ">cloud solutions</span>,
              <span className=" text-green-200 "> DevOps automation</span>, and
              <span className=" text-yellow-200 "> modern application development </span>
               services to businesses worldwide.
            </p>
          </div>
        </div>

        {/* Animated decorative section */}
        <div className="w-[60%] mt-10 min-[1100px]:w-[30%] min-[1900px]:w-[30%] order-1 min-[1100px]:order-2 relative">


          {/* Floating decorative elements around the animation */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-float opacity-80"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
