import { useEffect } from "react";

const Navbar = ({ form, home, projects, about, title }) => {
  useEffect(() => {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    // add event listeners
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);
  return (
    <>
      <nav className="container bg-sky-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between">
            <div className="flex space-x-6">
              {/* logo  */}
              <div>
                <a
                  href="/"
                  className="flex items-center py-4 px-2 text-gray-700"
                >
                  <span className="font-extrabold">{title}</span>
                </a>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1 text-white">
                <a href="/" className="py-4 px-3 hover:text-gray-900">
                  Home
                </a>
                <a href="/projects" className="py-4 px-3  hover:text-gray-900">
                  Projects
                </a>
                <a href="/blog" className="py-4 px-3 hover:text-gray-900">
                  Blog
                </a>
              </div>
            </div>
            {/* secondary nav  */}

            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-2 px-3 bg-green-400 hover:bg-green-300 text-green-800 hover:text-green-800 rounded transition duration-300"
              >
                Login
              </a>
              {form ? (
                <div></div>
              ) : (
                <a
                  href="/signup"
                  className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-800 hover:text-yellow-800 rounded transition duration-300"
                >
                  Signup
                </a>
              )}
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className="mobile-menu hidden md:hidden text-white">
          <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </a>{" "}
          <a
            href="/projects"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Projects
          </a>
          <a href="/blog" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Blog
          </a>
          <div className=" flex items-center space-x-1">
            <a
              href="#"
              className="py-2 px-3 bg-green-400 hover:bg-green-300 text-green-800 hover:text-green-800 rounded transition duration-300"
            >
              Login
            </a>

            {form ? (
              <div></div>
            ) : (
              <a
                href="/signup"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-800 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
