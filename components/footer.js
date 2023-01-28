import Link from "next/link";
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineCopyright,
} from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="phone:container grid grid-cols-1 text-center px-2 py-2 mx-20 rounded-b-lg border-gray-400 ">
      <div className="flex justify-center space-x-5 py-3 border-gray-300 border-b-2 my-5  text-opacity-70  ">
        <Link
          href="https://twitter.com/kennie_larkson"
          passHref
          className=" px-3 py-2 "
        >
          <button>
            {/* <AiOutlineTwitter color="white" size="1.5rem" /> */}
            <SocialIcon url="https://twitter.com/jaketrent" />
          </button>
        </Link>

        <Link
          href="https://linkedin.com/in/kennie-larkson"
          passHref
          className="   px-3 py-2 "
        >
          <button>
            {/* <AiOutlineLinkedin color="black" size="1.5rem" /> */}
            <SocialIcon url="https://linkedin/in.com/jaketrent" />
          </button>
        </Link>

        <Link
          href="https://github.com/kennie-larkson"
          passHref
          className="   px-3 py-2 "
        >
          <button>
            {/* <AiOutlineGithub color="black" size="1.5rem" /> */}
            <SocialIcon url="https://github.com/jaketrent" />
          </button>
        </Link>
      </div>

      <div className="flex justify-center space-x-10 my-5 text-opacity-70 py-5 border-gray-300 border-b-2 ">
        <FaHeart color="red" size="1.5rem" />
        <Link href="https://nextjs.org">
          <button>
            <TbBrandNextjs color="black" size="1.5rem" />
          </button>
        </Link>{" "}
        <Link href="https://tailwindcss.com">
          <button>
            <SiTailwindcss color="purple" size="1.5rem" />
          </button>
        </Link>{" "}
      </div>

      <div className="flex justify-center space-x-10 my-5 text-opacity-70 ">
        <AiOutlineCopyright color="purple" size="1.5rem" />{" "}
        <span className=" ">
          2022 KennieCodeCamp, Inc. All rights reserved.
        </span>
      </div>
    </div>
  );
}

//bg-sky-500
