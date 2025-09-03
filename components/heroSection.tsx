"use client"

import React, { useState } from "react";
import FlightSearchModal from "./FlightSearchModal";
import Image from "next/image";

const HeroSection = () => {
  const [tripType, setTripType] = useState('round-trip');
  const [origin, setOrigin] = useState('LHR');
  const [destination, setDestination] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <video
          src="/himalayajet-video-for-website-4.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30  "></div>

        <div className="relative z-20 flex flex-col items-start justify-center h-full text-white px-4 w app-layout m-auto">
          {/* Header with icons */}
          <div className="absolute top-4 left-4 z-30 md:hidden block">
            {/* Himalaya Jet Logo */}
            <div className="flex items-center">
              <Image 
                src="/small-Himalaya-Logo.png" 
                alt="Himalaya Jet" 
                width={120} 
                height={40}
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="absolute top-4 right-4 flex gap-3 items-center z-30 hidden md:flex">
            {/* Left side - Region/Language selector */}
            <div className="flex items-center bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
              {/* UK Flag */}
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 via-white to-blue-600 flex items-center justify-center mr-2">
                <Image src="/GB.svg" alt="UK" width={24} height={24} />
              </div>
              {/* Country code */}
              <span className="text-white font-bold text-sm mr-1">GB</span>
              {/* Dropdown arrow */}
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {/* Separator */}
              <div className="w-px h-4 bg-white/30 mx-2"></div>
              {/* Search icon */}
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Right side - User profile */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-full p-2 border border-white/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <div className=" text-center md:text-left m-auto md:m-0">
            <div className="">
              <h1 className="text-4xl md:text-4xl font-[400] text-white drop-shadow-lg">
                Experience with Himalaya Jet
              </h1>
              <p className="text-base font-[700] text-white drop-shadow-lg">
                Book your flight to the Himalayas with Himalaya Jet
              </p>

              <div className="group cursor-pointer">
                <span className="relative inline-block pt-4 pb-2 font-semibold text-white text-lg hover:text-white/80 transition-colors duration-300">
                  Book Now
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Floating Search/Booking Card */}
      <div className="hidden lg:block   ">
        <div className="absolute left-1/2 min-[950px]:bottom-[-3rem] bottom-[-10rem] transform rounded-2xl -translate-x-1/2 z-20   app-layout m-auto bg-white py-10 px-6">
          {/* Trip Type Selection */}
          <div className="flex mb-6 bg-white/80 backdrop-blur-xl rounded-full w-[40%] min-w-[400px] border border-white/20 shadow-lg p-1 absolute left-1/2 top-[-15%] transform -translate-x-1/2">
            {['round-trip', 'one-way', 'multi-city'].map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${tripType === type
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-gray-800 hover:text-yellow-600 hover:bg-white/50'
                  }`}
              >
                {type === 'round-trip' ? 'Round trip' :
                  type === 'one-way' ? 'One-way' : 'Multi-city'}
              </button>
            ))}
          </div>

          {/* Flight Search Fields */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Origin Field */}
            <div className="flex-1 w-full">
              <div
                className="bg-neutral-100 border border-gray/20 rounded-xl p-4 hover:border-yellow-400/50 transition-all cursor-pointer"
                onClick={openModal}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-500">{origin}</div>
                    <div className="text-sm text-gray-800">London</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex flex-col items-center">
              <button
                onClick={handleSwap}
                className="w-10 h-10 glass-light rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            {/* Destination Field */}
            <div className="flex-1 w-full">
              <div
                className="bg-neutral-100 border border-gray/20 rounded-xl p-4 hover:border-yellow-400/50 transition-all cursor-pointer"
                onClick={openModal}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-500">
                      {destination || 'To'}
                    </div>
                    <div className="text-sm text-gray-800">
                      {destination ? 'Destination' : 'Select your destination'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked Flight Search Section */}
      <div className="lg:hidden w-full px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Trip Type Selection */}
          <div className="flex mb-6 bg-white/80 backdrop-blur-xl rounded-full w-full max-w-md mx-auto border border-white/20 shadow-lg p-1">
            {['round-trip', 'one-way', 'multi-city'].map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${tripType === type
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-gray-800 hover:text-yellow-600 hover:bg-white/50'
                  }`}
              >
                {type === 'round-trip' ? 'Round trip' :
                  type === 'one-way' ? 'One-way' : 'Multi-city'}
              </button>
            ))}
          </div>

          {/* Flight Search Fields */}
          <div className="flex flex-col items-center gap-4">
            {/* Origin Field */}
            <div className="w-full">
              <div
                className="glass-light border border-white/20 rounded-xl p-4 hover:border-yellow-400/50 transition-all cursor-pointer"
                onClick={openModal}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-white">{origin}</div>
                    <div className="text-sm text-gray-300">London</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex flex-col items-center">
              <button
                onClick={handleSwap}
                className="w-10 h-10 glass-light rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            {/* Destination Field */}
            <div className="w-full">
              <div
                className="glass-light border border-white/20 rounded-xl p-4 hover:border-yellow-400/50 transition-all cursor-pointer"
                onClick={openModal}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-white">
                      {destination || 'To'}
                    </div>
                    <div className="text-sm text-gray-300">
                      {destination ? 'Destination' : 'Select your destination'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 w-full text-center">
              <button
                onClick={openModal}
                className="w-full px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all font-semibold shadow-lg"
              >
                Search Flights
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Search Modal */}
      <FlightSearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HeroSection;
