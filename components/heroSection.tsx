"use client";
import animation from "@/animations/h1.json";
import { CallBackend } from "@/service/backend-call";
import toast from "react-hot-toast";
import { IoMdArrowForward } from "react-icons/io";
import Lottie from "react-lottie-player";
 
const LandingPage = () => {
  return (
    <div className="min-h-[100dvh] py-20 ">
      <div className="flex flex-col min-[1100px]:flex-row items-center justify-center w-full">
        <div className="order-2 min-[1100px]:order-1 min-[1100px]:w-[60%] min-[1100px]:pl-5">
          <div className="app-layout">
            <section className="my-4">
              <h1 className="text-[20px] text-neutral-800 md:text-[25px] lg:text-[30px] font-bold min-[1900px]:text-[40px] leading-[30px] md:leading-[42px] font-[700]">
                Introduction Hello 123
              </h1>
              <h1 className="">
                Welcome to <span className="font-bold text-green-500">ack</span>
                response,
              </h1>{" "}
              <p className="text-lg">
                This application exemplifies the integration of modern DevOps
                practices, seamlessly connecting both frontend and backend
                systems.
              </p>
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
              className="bg-green-600  text-white font-bold flex gap-3 group items-center my-5 px-10 py-3 rounded-xl duration-300 hover:px-14"
            >
              Check Backend Connection
              <IoMdArrowForward
                size={20}
                className="group-hover:-rotate-180 transform transition-transform duration-300"
              />
            </button>
            <p className="caption min-[1100px]:w-[80%] py-5 min-[1900px]:mt-20 text-[#5f6368]">
              <span className="font-bold">ackresponse Specialised on:</span>{" "}
              Google Cloud, GitOps, DevOps, CI/CD, Scripting, Web & Mobile
              Application Development
            </p>
          </div>
        </div>
        <div className="w-[60%] mt-10 min-[1100px]:w-[30%] min-[1900px]:w-[30%] order-1 min-[1100px]:order-2 landing-radius border-2 border-green-500 bg-zinc-500">
          <Lottie loop animationData={animation} play className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
