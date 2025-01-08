import AppointmentSection from "../../components/appointment/Appointment";
import Cards from "../../components/Cards/Cards";
import FAQSection from "../../components/FAQ/Faq";
import Slider from "../../components/testiSlider/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Home() {
  // article cards data
  const CardData = [
    {
      head: "Emotional Burnout",
      content: "Understanding Emotional Burnout: Causes and Remedies",
      author: "Dr. Rashmi",
      img: "/Cards/img1.webp",
    },
    {
      head: "Family Conflicts",
      content: "Managing Family Conflicts: Tips for a Harmonious Home",
      author: "Dr. Rashmi",
      img: "/Cards/img2.webp",
    },
    {
      head: "Mental Wellness",
      content: "How to Start Your Mental Wellness Journey",
      author: "Dr. Rashmi",
      img: "/Cards/img3.webp",
    },
    {
      head: "Anxiety",
      content: "10 Common Signs of Anxiety You Shouldn’t Ignore",
      author: "Dr. Rashmi",
      img: "/Cards/img4.webp",
    },
    {
      head: "Mental Health",
      content: "Breaking the Stigma: Mental Health in India",
      author: "Dr. Rashmi",
      img: "/Cards/img5.webp",
    }
  ];

  return (
    <>
      <div
        id="home"
        className="flex w-full h-screen px-32 max-xl:px-16 max-lg:mt-[10vh] max-lg:flex-col-reverse max-lg:w-full max-lg:h-auto"
      >
        <div className="w-1/2 max-lg:w-full h-full relative max-lg:text-center">
          <h1 className="text-5xl mt-60 max-lg:mt-0 max-md:text-3xl poppins font-medium leading-tight">
            Complete Health Care Solution for Everyone
          </h1>
          <h5 className="text-base max-md:text-sm mt-8 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
            minima pariatur laudantium nihil laborum labore natus. Fugit
            laboriosam odio at eaque provident enim voluptate? Laboriosam
            fugiat, sapiente voluptas atque beatae omnis.
          </h5>
          <div className="flex justify-center items-center">
            <a href="#appointment">
              <button className="bg-indigo-500 text-white py-3 px-5 rounded hover:bg-indigo-600">
                Book Appointment
              </button>
            </a>
          </div>

          {/* bottom stip */}
          <div className="max-lg:hidden stripParent overflow-hidden rounded-xl flex gap-2 w-full absolute bottom-0 left-0 max-lg:w-1/2 max-md:w-[80%]">
            <div className="first w-[100px] rounded-xl bg-indigo-500 text-white flex justify-center items-center text-4xl z-10 hover-trigger max-lg:text-2xl">
              &#10148;
            </div>
            <div className="second w-[100%] overflow-hidden rounded-xl bg-indigo-500 text-white flex justify-between p-2 px-5 transition-transform duration-500 -translate-x-[120%] max-lg:gap-2">
              <div className="flex flex-col">
                <span className="text-4xl max-lg:text-2xl max-[872px]:text-xl font-bold">
                  24/7
                </span>
                <span className="text-sm">Online Support</span>
              </div>
              <hr />
              <div className="flex flex-col">
                <span className="text-4xl max-lg:text-2xl max-[872px]:text-xl font-bold">
                  100+
                </span>
                <span className="text-sm">Doctors</span>
              </div>
              <hr />
              <div className="flex flex-col">
                <span className="text-4xl max-lg:text-2xl max-[872px]:text-xl font-bold">
                  1M+
                </span>
                <span className="text-sm">Active Patients</span>
              </div>
            </div>
          </div>
        </div>

        {/* right images-doctor */}
        <div className="w-1/2 max-lg:w-full h-full flex justify-center items-center">
          <img
            src="/doctor.png"
            alt=""
            className="h-auto w-[80%] rounded-3xl max-lg:w-[50%]"
          />
        </div>
      </div>

      {/* testimonials section */}
      <div id="testimonials" className="text-center mt-24 mb-8">
        <span className="text-indigo-500 text-5xl max-xl:text-4xl uppercase tracking-wider font-bold">
          Testimonials
        </span>
        <h2 className="text-2xl max-xl:text-xl font-semibold pt-2 pb-10">
          Happy Clients & Feedbacks
        </h2>
      </div>

      {/* testimonial slider */}
      <Slider />

      {/* article section */}
      <div className="text-center mb-8 mt-10">
        <span className="text-indigo-500 text-5xl max-xl:text-4xl uppercase tracking-wider font-bold">
          Dr. Rashmi's Articles
        </span>
        <h2 className="text-2xl max-xl:text-xl font-semibold pt-2 pb-10 text-gray-500">
          On Notion
        </h2>
      </div>

      {/* article cards */}
      <div className="px-10 max-sm:px-0 flex flex-wrap justify-center items-center gap-10">
        {CardData?.map((item, index) => (
          <Cards
            head={item.head}
            img={item.img}
            content={item.content}
            author={item.author}
          />
        ))}
      </div>

      {/* FAQ's section */}
      <div id="faq" className="text-center mt-32">
        <h2 className="text-4xl font-bold text-indigo-500">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonumy eirmod tempor Lorem.
        </p>
      </div>
      <FAQSection />

      {/* Appointment Section */}
      <AppointmentSection />
    </>
  );
}
