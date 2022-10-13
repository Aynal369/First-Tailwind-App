import React from "react";
import {
  BsPersonBoundingBox,
  BsFacebook,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <BsPersonBoundingBox />
          <span className="ml-3 text-xl">Tailwind CSS</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          Copyright © {new Date().getFullYear()} tailwind css — All Rights
          Reserved
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-5">
          <BsFacebook />
          <BsLinkedin />
          <BsGithub />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
