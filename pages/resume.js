import Layout from "../components/layout";
import Body from "../components/body";
import { FaHandPointRight } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGithub,
  SiNextdotjs,
  SiAmazonaws,
  SiTailwindcss,
} from "react-icons/si";
import { IconContext } from "react-icons";
import Link from "next/link";

const Resume = () => {
  return (
    <>
      <Layout about>
        <Body>
          <header className="flex ">
            <div className=" text-md md:font-bold sm:font-bold text-white rounded-md bg-green-500 hover:bg-green-700  trasition duration-300 px-5 py-2 ">
              Professional Experience
            </div>
          </header>
          <div className="container justify-center place-content-center place-items-center rounded-sm p-5 bg-blue-100 mt-3 ">
            <div className="container text-center">
              <div className="md:font-bold sm:font-bold">Introduction</div>
              <p className="p-5 text-justify leading-5 border-t-2 border-b-2 border-green-700 bg-yellow-100 mb-3">
                I am a software engineer with expertise in both frontend and
                backend technologies and over 3 years experience building
                scalable and robust applications using state-of-the-art
                technologies.
              </p>
              <div className="md:font-bold sm:font-bold">Technology Stack</div>
              <p className="flex p-3 text-justify md:justify-center sm:justify-center border-t-2 border-b-2 border-green-700 mb-3 overflow-auto ">
                {/* <button className="mr-2"> */}
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <IconContext.Provider value={{ className: "top-react-icon" }}>
                    <SiJavascript />
                  </IconContext.Provider>
                </a>
                {/* </button> */}
                <a href="https://reactjs.org">
                  <IconContext.Provider value={{ className: "top-react-icon" }}>
                    <SiReact />
                  </IconContext.Provider>
                </a>
                <a href="https://nestjs.com">
                  <IconContext.Provider value={{ className: "top-react-icon" }}>
                    <SiNestjs />
                  </IconContext.Provider>
                </a>
                <a href="https://nextjs.org">
                  <IconContext.Provider value={{ className: "top-react-icon" }}>
                    <SiNextdotjs />
                  </IconContext.Provider>
                </a>
                <a href="https://typescriptlang.org">
                  <IconContext.Provider value={{ className: "top-react-icon" }}>
                    <SiTypescript />
                  </IconContext.Provider>
                </a>
                <a href="https://postgresql.org">
                  <IconContext.Provider value={{ className: "top-react-icon" }}>
                    <SiPostgresql />
                  </IconContext.Provider>
                </a>
                <a href="https://mysql.com">
                  <IconContext.Provider value={{ className: "top-react-icon" }}>
                    <SiMysql />
                  </IconContext.Provider>
                </a>
                <a href="https://docker.com">
                  <IconContext.Provider value={{ className: "top-react-icon" }}>
                    <SiDocker />
                  </IconContext.Provider>
                </a>
                <a href="https://github.com">
                  <IconContext.Provider value={{ className: "top-react-icon" }}>
                    <SiGithub />
                  </IconContext.Provider>
                </a>
                <a href="https://aws.com">
                  <IconContext.Provider value={{ className: "top-react-icon" }}>
                    <SiAmazonaws />
                  </IconContext.Provider>
                </a>
                <a href="https://tailwindcss.com">
                  <IconContext.Provider value={{ className: "top-react-icon" }}>
                    <SiTailwindcss />
                  </IconContext.Provider>
                </a>
              </p>
              <div className="md:font-bold sm:font-bold">
                Employment History
              </div>
              <div className="container md:p-5 sm:p-5 py-3 text-justify leading-5 border-t-2 border-b-2 border-green-700 bg-yellow-100 mb-3 ">
                <div className="grid grid-cols-3">
                  <div className="border-r-2 border-b-2 border-green-700">
                    Company
                  </div>
                  <div className="border-r-2 border-b-2 border-green-700">
                    Position
                  </div>
                  <div className=" border-b-2 border-green-700">Period</div>
                  <div className="border-r-2 border-green-700">
                    Vesti Technologies Inc
                  </div>
                  <div className="border-r-2 border-green-700">
                    Backend Engineer
                  </div>
                  <div className=" border-green-700">
                    Dec,2021-to-August,2022
                  </div>

                  <div className="border-r-2 border-b-2 border-t-2 border-green-700">
                    Teesas Education Technologies
                  </div>
                  <div className="border-r-2 border-b-2 border-t-2 border-green-700">
                    Backend Engineer (contract)
                  </div>
                  <div className=" border-b-2 border-t-2 border-green-700">
                    April,2022-to-July,2022
                  </div>

                  <div className="border-r-2 border-b-2  border-green-700">
                    COVEIT WORLD
                  </div>
                  <div className="border-r-2 border-b-2  border-green-700">
                    Coding Bootcamp Facilitator (Fullstack)
                  </div>
                  <div className=" border-b-2 border-green-700">
                    June,2021-to-December,2021
                  </div>

                  <div className="border-r-2 border-b-2  border-green-700">
                    UpathCo
                  </div>
                  <div className="border-r-2 border-b-2  border-green-700">
                    Fullstack Developer (Intern)
                  </div>
                  <div className=" border-b-2 border-green-700">
                    July,2020-to-December,2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Body>
      </Layout>
    </>
  );
};

export default Resume;
