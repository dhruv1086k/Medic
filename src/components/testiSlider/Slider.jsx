import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/82.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Mark Huff",
      position: "Businesswoman",
    },
    {
      img: "https://randomuser.me/api/portraits/men/83.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Rodel Golez",
      position: "Businesswoman",
    },
    {
      img: "https://randomuser.me/api/portraits/men/84.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Ken Bosh",
      position: "Businesswoman",
    },
    {
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Racky Henderson",
      position: "Father",
    },
    {
      img: "https://randomuser.me/api/portraits/men/86.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Henry Dee",
      position: "Businesswoman",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
                <div className="flex items-center">
                  <div
                    className="w-20 h-20 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.img})` }}
                  ></div>
                  <div className="ml-4">
                    <p className="text-lg font-medium mb-1">{testimonial.name}</p>
                    <span className="text-gray-500 text-sm">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-indigo-500 text-2xl">
                    <i className="fas fa-quote-left"></i>
                  </span>
                  <p className="text-gray-700 mt-2">{testimonial.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-14 space-x-4">
          <button
            className="custom-prev bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 shadow-lg"
          >
            &larr; Previous
          </button>
          <button
            className="custom-next bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 shadow-lg"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
