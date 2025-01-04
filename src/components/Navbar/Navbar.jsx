export default function Navbar() {
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-2xl font-bold">Mental Health Space</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-16 font-medium cursor-pointer hover:text-gray-900">
              Home
            </a>
            <a class="mr-16 font-medium cursor-pointer hover:text-gray-900">
              About Us
            </a>
            <a class="mr-16 font-medium cursor-pointer hover:text-gray-900">
              Testimonials
            </a>
            <a class="mr-16 font-medium cursor-pointer hover:text-gray-900">
              Blog
            </a>
          </nav>
          <button class="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
            Book Now
          </button>
        </div>
      </header>
    </>
  );
}
