import AppointmentSection from "../../components/appointment/Appointment";
import Cards from "../../components/Cards/Cards";
import FAQSection from "../../components/FAQ/Faq";
import Slider from "../../components/testiSlider/Slider";

export default function Home() {
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
    },
    {
      head: "Mental Health",
      content: "Breaking the Stigma: Mental Health in India",
      author: "Dr. Rashmi",
      img: "/Cards/img5.webp",
    },
    {
      head: "Mental Health",
      content: "Breaking the Stigma: Mental Health in India",
      author: "Dr. Rashmi",
      img: "/Cards/img5.webp",
    },
  ];

  return (
    <>
      <div className="flex w-full h-screen px-32">
        <div className="w-1/2 h-full relative">
          <h1 className="text-5xl mt-40 poppins font-medium leading-tight">
            Complete Health Care Solution for Everyone
          </h1>
          <h5 className="text-base mt-8 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
            minima pariatur laudantium nihil laborum labore natus. Fugit
            laboriosam odio at eaque provident enim voluptate? Laboriosam
            fugiat, sapiente voluptas atque beatae omnis.
          </h5>
          <a href="#" className="">
            <button className="bg-indigo-500 text-white py-3 px-5 rounded hover:bg-indigo-600">
              Book Appointment
            </button>
          </a>
          <div className="absolute bottom-[10vh] left-0 w-full rounded-e-full bg-indigo-500 text-white flex justify-between py-2 px-2 pr-5">
            <div className="flex flex-col">
              <span className="text-4xl font-bold">24/7</span>
              <span className="text-sm">Online Support</span>
            </div>
            <hr />
            <div className="flex flex-col">
              <span className="text-4xl font-bold">100+</span>
              <span className="text-sm">Doctors</span>
            </div>
            <hr />
            <div className="flex flex-col">
              <span className="text-4xl font-bold">1M+</span>
              <span className="text-sm">Active Patients</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full relative">
          <img
            src="/doctor.png"
            alt=""
            className="absolute h-auto w-full left-1/2 bottom-[9vh] -translate-x-1/2 z-10"
          />
          <img
            src="/hero_backdrop.png"
            alt=""
            className="absolute w-[90%] left-1/2 bottom-[9vh] -translate-x-1/2 z-0"
          />
        </div>
      </div>
      <div className="text-center mb-8">
        <span className="text-indigo-500 text-5xl uppercase tracking-wider font-bold">
          Testimonials
        </span>
        <h2 className="text-2xl font-semibold pt-2 pb-10">
          Happy Clients & Feedbacks
        </h2>
      </div>
      <Slider />
      <div className="text-center mb-8 mt-10">
        <span className="text-indigo-500 text-5xl uppercase tracking-wider font-bold">
          Dr. Rashmi's Articles
        </span>
        <h2 className="text-2xl font-semibold pt-2 pb-10 text-gray-500">
          on notion
        </h2>
      </div>

      <div className="px-10 flex flex-wrap justify-center items-center gap-10">
        {CardData?.map((item) => (
          <Cards
            head={item.head}
            img={item.img}
            content={item.content}
            author={item.author}
          />
        ))}
      </div>

      <div className="text-center mt-32">
        <h2 className="text-4xl font-bold text-indigo-500">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonumy eirmod tempor Lorem.
        </p>
      </div>
      <FAQSection />
      <AppointmentSection />
    </>
  );
}
