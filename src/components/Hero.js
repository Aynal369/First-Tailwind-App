import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font uppercase sm:text-4xl text-3xl mb-4 font-medium text-white">
            This is my first tailwind css react js app
          </h1>
          <p className="leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            fugit impedit cum perferendis sequi nesciunt a quis ratione mollitia
            molestiae doloremque assumenda excepturi velit repudiandae ipsa
            facere voluptates magni officiis, hic saepe porro! Tenetur tempore
            laborum quas praesentium recusandae, accusamus consequatur quaerat
            commodi molestiae est inventore dolores,
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
