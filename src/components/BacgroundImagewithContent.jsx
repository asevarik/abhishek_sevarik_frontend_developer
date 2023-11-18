// BackgroundComponent.js
import React from "react";

const BacgroundImagewithContent = ({ image, title, description }) => {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="font-sans relative h-screen" style={backgroundStyle}>
      <div className="absolute inset-0 bg̦-black opacity-50"></div>
      <div className="relative z-10 flex justify-center  pl-10 h-full  text-white">
        <div className="flex-1 flex flex-col justify-center  ">
          {title && <h1 className="text-4xl font-bold">{title}</h1>}
          {description && <p className="mt-4 text-lg">{description}</p>}
        </div>
        {/*Container 2 */}
        <div className="lg:flex-1 hidden"></div>
      </div>
    </div>
  );
};

export default BacgroundImagewithContent;
