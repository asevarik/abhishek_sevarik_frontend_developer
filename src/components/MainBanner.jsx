import React from "react";

const MainBanner = () => {
  return (
    <div className="flex h-[35rem] w-screen px-10 bg-transparent">
      {/* Container 1 */}
      <div className="flex-1 flex flex-col justify-center gap-7 pt-20">
        <h1 className="text-5xl font-extrabold capitalize">SpaceX Explorer</h1>
        <h2 className="text-lg font-semibold text-white">
          Embark on an Interstellar Journey
        </h2>
        <p className="text-sm text-gray-50">
          Explore the wonders of space with our Space Explorer application. Dive
          into the fascinating realm of SpaceX data, where cutting-edge rockets
          and capsules await your discovery. Immerse yourself in the beauty of
          the cosmos as you navigate through a meticulously designed React app,
          delivering an unparalleled user experience. Join us in this cosmic
          adventure and unveil the secrets of space exploration at your
          fingertips
        </p>
        <button className="btn btn-outline w-32 text-white hover:bg-white hover:text-black">
          Explore
        </button>
      </div>
      {/* Container 2 */}
      <div className="flex-1 lg:flex justify-center items-center hidden "></div>
    </div>
  );
};

export default MainBanner;
