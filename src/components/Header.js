import React from "react";
import { BsPersonBoundingBox } from "react-icons/bs";

const Header = () => {
  return (
    <header className="text-white body-font bg-blue-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <BsPersonBoundingBox />
          <span className="ml-3 text-xl">Tailwind CSS</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Company</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
