export default function AppointmentSection() {
  return (
    <div id="appointment" className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-6xl mx-auto py-16 px-6 relative">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Book an Appointment
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email (optional)"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <select className="w-full border border-gray-300 rounded-md p-3 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            <option>Select Time Slot</option>
            <option>11:00 - 12:00</option>
            <option>12:00 - 1:00</option>
            <option>2:00 - 3:00</option>
            <option>3:00 - 4:00</option>
            <option>4:00 - 5:00</option>
          </select>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white rounded-md py-3 font-medium hover:bg-indigo-600 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>

      <div className="lg:ml-12 mt-12 lg:mt-0 text-center lg:text-left lg:w-2/3">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            Lorem ipsum <br />
            dolor sit amet,
            <br />
            consectetur
          </h2>
          <p className="text-gray-600 mt-4 w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consectetur
            adipiscing elitr.
          </p>
        </div>
        <div className="mt-8 absolute bottom-0 right-0">
          <img
            src="/Appointment/doctorGirl.png"
            alt="Doctor"
            className="inline-block max-w-96 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
