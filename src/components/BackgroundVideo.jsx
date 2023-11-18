// BackgroundVideo.js
import React from "react";

const BackgroundVideo = ({ children }) => {
  return (
    <div className="font-sans">
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="/assets/rocket_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 flex flex-col h-full text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
