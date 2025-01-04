export default function Home() {
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
          <img src="/doctor.png" alt="" className="absolute" />
          <img src="/hero_backdrop.png" alt="" className="absolute" />
        </div>
      </div>
    </>
  );
}
