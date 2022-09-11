import Link from "next/link";
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineCopyright,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 text-center px-5 py-5 mx-20 my-2 rounded-b-lg border-gray-400 bg-sky-500">
      <div className="flex justify-center space-x-10 py-5 border-b-2 my-5 text-opacity-70   ">
        {/* <button className="border rounded-md bg-sky-600 px-5 text-white">
          KCC
        </button> */}
        <span className="">Impacting the world a line of code at a time</span>
        <Link
          href="https://twitter.com/kennie_larkson"
          passHref
          className=" px-3 py-2 rounded-md font-medium"
        >
          <AiOutlineTwitter size="1.5rem" />
        </Link>

        <Link
          href="https://linkedin.com/in/kennie-larkson"
          passHref
          className="   px-3 py-2 rounded-md text-sm font-medium"
        >
          <AiOutlineLinkedin size="1.5rem" />
        </Link>

        <Link
          href="https://github.com/kennie-larkson"
          passHref
          className="   px-3 py-2 rounded-md text-sm font-medium"
        >
          <AiOutlineGithub size="1.5rem" />
        </Link>
      </div>
      {/* <hr /> */}
      <div className="flex justify-center space-x-10 my-5 text-opacity-70 py-5 border-b-2 ">
        <span className=" ">
          <Link href="https://nextjs.org">This site was made with NextJs</Link>{" "}
          and <Link href="https://tailwindcss.com">Tailwind CSS</Link>{" "}
        </span>
      </div>

      {/* <hr /> */}
      <div className="flex justify-center space-x-10 my-5 text-opacity-70 ">
        <AiOutlineCopyright />{" "}
        <span className=" ">
          2022 KennieCodeCamp, Inc. All rights reserved.
        </span>
      </div>
    </div>
  );
}

//text-gray-600
