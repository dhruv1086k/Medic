import AchievementCards from "../../components/AchievementCard/Achievement";

export default function AboutSection() {
  return (
    <>
      <div className="w-full h-screen max-lg:h-auto flex px-36 max-xl:px-24 max-md:px-5 max-lg:flex-col-reverse max-lg:mt-[15vh]">
        <div className="w-1/2 h-full pt-32 max-lg:pt-0 max-lg:w-full max-lg:h-auto max-lg:text-center max-lg:mt-5">
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
        <div className="w-1/2 h-full flex justify-center items-center max-xl:justify-end max-lg:w-full max-lg:h-auto max-lg:justify-center">
          <img src="/rashmi.webp" className="w-96 h-96 max-[400px]:w-full max-[400px]:h-auto z-10 rounded-xl" alt="" />
        </div>
      </div>
      <div className="max-[1110px]:mt-24">
        <h1 className="text-5xl font-bold text-center my-4 text-indigo-500">
          Achievements
        </h1>
        <AchievementCards />
      </div>
    </>
  );
}
