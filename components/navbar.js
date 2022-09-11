const Navbar = ({ form, home, projects, about, title }) => {
  return (
    <nav className="phone:container navbar mt-5 mx-20 rounded-t-lg navbar-light bg-sky-600">
      {/* <div className="container mx-5 px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16"> */}
      <div className=" flex items-center gap-96 justify-center sm:items-stretch sm:justify-start h-16">
        <div className=" text-2xl my-0  font-medium  text-white  px-3 py-2">
          {title}
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4 space-y-4">
            <a
              href="/"
              className={`${
                home ? "bg-gray-900" : null
              } hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium`}
              aria-current="page"
            >
              Home
            </a>

            <a
              href="/about"
              className={`${
                about ? "bg-gray-900" : null
              } hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium`}
            >
              About
            </a>

            <a
              href="/projects"
              className={`${
                projects ? "bg-gray-900" : null
              } hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium`}
            >
              Projects
            </a>

            {!form ? (
              <a
                href="/signupform"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Become a Camper
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Become a Camper
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
