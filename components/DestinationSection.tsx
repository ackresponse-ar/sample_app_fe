"use client"
import { useRef } from "react"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import type { Swiper as SwiperCore } from 'swiper'
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { EffectCoverflow, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import DestinationCard from "./DestinationCard"

const DestinationSection = () => {
    // Destinations data array matching the reference image
    const destinations = [
        {
            id: 1,
            city: "Hong Kong",
            country: "China",
            price: "Euro 2,885*",
            miles: "66,356 miles",
            currency: "Euro",
            image: "/hongkong.png",
        },
        {
            id: 2,
            city: "Kathmandu",
            country: "Nepal",
            price: "Euro 2,210*",
            miles: "43,216 mi",
            currency: "Euro",
            image: "/kathmandu.jpeg",
        },
        {
            id: 3,
            city: "Sydney",
            country: "Australia",
            price: "Euro 2,565*",
            miles: "55,808 miles",
            currency: "Euro",
            image: "/aus.jpg",
        },
        {
            id: 4,
            city: "London",
            country: "United Kingdom",
            price: "Euro 2,435*",
            miles: "50,704 miles",
            currency: "Euro",
            image: "/london.jpg",
        },
        {
            id: 5,
            city: "Pokhara",
            country: "Nepal",
            price: "Euro 2,425",
            miles: "50,024 miles",
            currency: "Euro",
            image: "/pokhara.jpg",
        },
        {
            id: 6,
            city: "Paris",
            country: "France",
            price: "Euro 2,435*",
            miles: "50,704 miles",
            currency: "Euro",
            image: "/paris.jpg",
        },
        {
            id: 7,
            city: "Berlin",
            country: "Germany",
            price: "Euro 2,435*",
            miles: "50,704 miles",
            currency: "Euro",
            image: "/german.jpg",
        },
        {
            id: 8,
            city: "Madrid",
            country: "Spain",
            price: "Euro 2,435*",
            miles: "50,704 miles",
            currency: "Euro",
            image: "/madrid.jpg",
        },
    ]
    const swiperRef = useRef<SwiperCore | null>(null);

    return (
        <>
            <div className=" app-layout">
                <div className="section-header pt-32">
                    <h1 className="text-center mb-4">
                        <span className="font-[300]"> Deals from</span>
                        <span className="text-yellow-500"> Himalaya Jet </span>
                    </h1>
                    <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
                        Let us inspire your next trip with exclusive offers and premium destinations
                    </p>
                </div>

                {/* Swiper for Destination Cards */}
                <div className="mt-24 relative mx-auto">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        initialSlide={2}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1.2,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow, Navigation]}
                        className="destination-swiper"
                        style={{ padding: "0px 0" }}
                        speed={600}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 20 },
                            640: { slidesPerView: 1.2, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 30 },
                            1024: { slidesPerView: 3, spaceBetween: 40 },
                        }}
                    >
                        {destinations.map((destination, index) => (
                            <SwiperSlide
                                key={destination.id}
                                onClick={() => swiperRef.current?.slideToLoop(index)}
                                className="cursor-pointer"
                            >
                                <DestinationCard {...destination} />
                            </SwiperSlide>
                        ))}
                    </Swiper>



                </div>

                {/* Custom Navigation Arrows */}
                <div className="flex justify-center  mt-8 mb-20">
                    <button
                        id={`swiper-button-prev`}
                        className="border-1  w-14 h-14 flex justify-center items-center"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <span className="text-2xl">
                            <RxCaretLeft />
                        </span>
                    </button>

                    <button
                        id={`swiper-button-next`}
                        className="border-1 w-14 h-14 flex justify-center items-center"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <span className="text-2xl">
                            <RxCaretRight />
                        </span>
                    </button>
                </div>
            </div>

        </>


    )
}

export default DestinationSection
