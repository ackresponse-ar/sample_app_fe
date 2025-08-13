"use client";
import animation from "@/animations/h1.json";
import { CallBackend } from "@/service/backend-call";
import toast from "react-hot-toast";
import { IoMdArrowForward } from "react-icons/io";
import Lottie from "react-lottie-player";
 
const LandingPage = () => {
  return (
    <div className="min-h-[100dvh] py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="flex flex-col min-[1100px]:flex-row items-center justify-center w-full">
        <div className="order-2 min-[1100px]:order-1 min-[1100px]:w-[60%] min-[1100px]:pl-5">
          <div className="app-layout">
            <section className="my-4">
              <div className="mb-6">
                <h1 className="text-[24px] text-red-600 md:text-[28px] lg:text-[32px] font-bold min-[1900px]:text-[42px] leading-[32px] md:leading-[44px] font-[700] mb-2">
                  🎉 Welcome to Nepali Mela UK 🎉
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4"></div>
              </div>
              
              <h2 className="text-[18px] text-neutral-800 md:text-[22px] lg:text-[26px] font-semibold min-[1900px]:text-[32px] leading-[28px] md:leading-[36px] mb-4">
                Celebrating Nepali Culture in the Heart of the UK
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At AckResponse, we're proud to be part of the Nepali Mela UK, showcasing our innovative 
                technology solutions and digital transformation expertise. As a leading technology company 
                founded by Nepali entrepreneurs, we bridge traditional values with cutting-edge innovation, 
                offering comprehensive cloud solutions, DevOps automation, and modern application development 
                services to businesses worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white p-3 rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-600 mb-1 text-sm">🏪 Nepali Stalls</h3>
                  <p className="text-xs text-gray-600">Authentic food, crafts, and products from Nepali entrepreneurs</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-md border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-600 mb-1 text-sm">🍜 Food Festival</h3>
                  <p className="text-xs text-gray-600">Taste traditional Nepali dishes and street food</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-600 mb-1 text-sm">💻 AckResponse Tech</h3>
                  <p className="text-xs text-gray-600">Innovative cloud solutions and digital transformation</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-md border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-600 mb-1 text-sm">🎭 Live Performances</h3>
                  <p className="text-xs text-gray-600">Traditional music, dance, and cultural shows</p>
                </div>
              </div>
            </section>
            
            <button
              onClick={ async () => {
                try {
                  const data = await CallBackend();
                  toast.success(data)
                } catch (error) {
                toast.error('Error occurred while calling backend');

                }
              }}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold flex gap-3 group items-center my-5 px-10 py-3 rounded-xl duration-300 hover:px-14 hover:shadow-lg transform hover:scale-105"
            >
              View Message From Backend
              <IoMdArrowForward
                size={20}
                className="group-hover:-rotate-180 transform transition-transform duration-300"
              />
            </button>
            
            <p className="caption min-[1100px]:w-[80%] py-5 min-[1900px]:mt-20 text-[#5f6368]">
              <span className="font-bold text-red-600">Namaste! 🙏</span>{" "}
              Join us at Nepali Mela UK and discover the perfect blend of traditional Nepali 
              culture and modern technology. Visit our stall to learn about innovative 
              cloud solutions and digital transformation services.
            </p>
          </div>
        </div>
        <div className="w-[60%] mt-10 min-[1100px]:w-[30%] min-[1900px]:w-[30%] order-1 min-[1100px]:order-2 landing-radius border-2 border-red-500 bg-gradient-to-br from-red-100 to-orange-100 shadow-lg">
          <Lottie loop animationData={animation} play className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
