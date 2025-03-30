import { APP_NAME } from "@/src/configs/config";
import React from "react";

const VideoTop = () => {
  return (
    <div className="pb-[43%] w-screen relative">
      {/* desktop UI */}
      <div className="absolute top-0 left-0 right-0 select-none">
        <video
          className="w-full h-full"
          src="/videos/BS_USA_v1.mp4"
          autoPlay
          loop
          muted
        />
      </div>
      {/* desktop UI */}
      {/* mobile UI */}
      <div className="absolute inset-0 box-border text-text-100 block md:hidden leading-none text-center isolate select-none" />
      {/* mobile UI */}
      {/* Text */}
      <div className="absolute left-0 top-0 bottom-0 flex justify-center items-center text-center w-screen z-9">
        <div className="container-ct justify-center items-center">
          <div className="w-full flex flex-row justify-center">
            <h1 className="text-white text-[28px] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold uppercase text-center drop-shadow-[0px_2px_20px_rgba(0,0,0,0.9)] uppercase isolate select-none">
              {APP_NAME}
            </h1>
          </div>
        </div>
      </div>
      {/* Text */}
    </div>
  );
};

export default VideoTop;
