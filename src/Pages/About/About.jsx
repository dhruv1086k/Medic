import AchievementCards from "../../components/AchievementCard/Achievement";

export default function AboutSection() {
  return (
    <>
      <div className="w-full h-screen flex px-36">
        <div className="w-1/2 h-full pt-32">
          <h4 className="text-indigo-500 text-xl font-bold">
            Dr. Rashmi Bajaj
          </h4>
          <h1 className="text-black text-4xl font-semibold my-4">
            Know Your Psychologist
          </h1>
          <p className="text-md text-justify mb-10">
            Dr. Rashmi Bajaj is a visionary leader and psychiatrist with over 25
            years of experience dedicated to empowering individuals and
            transforming lives. Combining her expertise in psychology with a
            passion for education and mental well-being, she has trained over
            5,000 professionals, equipping them with essential skills to create
            safer and more inclusive environments. <br />
            <br />
            As a pathfinder in her field, Dr. Bajaj has spearheaded impactful
            initiatives in collaboration with renowned organizations, focusing
            on fostering resilience, emotional intelligence, and lifelong
            learning. Her leadership extends to developing innovative programs
            that cater to diverse needs, ensuring growth for both individuals
            and communities. <br /> <br />
            Dr. Bajaj’s unwavering commitment to making a meaningful difference
            continues to inspire her work, driving her mission to create
            supportive spaces where every individual can thrive.
          </p>
          <a
            href="#"
            className="text-white transition-all duration-200 bg-indigo-500 hover:bg-indigo-600 px-5 py-2 text-xl rounded-md shadow-md shadow-gray-400"
          >
            Read More
          </a>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center relative">
          <div className="w-96 h-96 border-2 border-indigo-500 z-0 absolute left-1/2 top-1/2 -translate-x-[40%] -translate-y-[60%]"></div>
          <img src="/rashmi.webp" className="w-96 h-96 relative z-10" alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-bold text-center my-4 text-indigo-500">Achievements</h1>
        <AchievementCards />
      </div>
    </>
  );
}
