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
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 mr-1 text-blue-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.75 6.75h-3a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-3V1.5a.75.75 0 00-1.5 0v5.25zm0 0h1.5v5.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V6.75z"
                      clip-rule="evenodd"
                    />
                    <path d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" />
                  </svg> */}

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
                <a
                  href="/blog"
                  className="block py-2 px-4 text-sm hover:bg-gray-200"
                >
                  Blog
                </a>
              </div>
            </div>
            {/* secondary nav  */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3">
                Login
              </a>
              <a
                href="/signupform"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-800 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
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
            <a href="#" className="py-5 px-3">
              Login
            </a>
            <a
              href="#signup-form"
              className="py-1 px-1 bg-yellow-400 hover:bg-yellow-300 text-yellow-800 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
