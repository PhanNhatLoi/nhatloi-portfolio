import { useState } from "react";
import CarouselMUI from "./CarouselImage";
import { timelineData } from "@/src/data/timeline";

export default function MyJourney() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const RenderItem = () => {
    return (
      <div className="w-[50vw]">
        <div className="relative w-full max-w-[200px] h-[5px] bg-white/30 rounded-r">
          <div className="absolute top-[-30px] w-full flex justify-center text-white">
            <span>
              {currentIndex + 1} / {timelineData.length}
            </span>
          </div>
          <div
            style={{
              width: `${((currentIndex + 1) / timelineData.length) * 100}%`,
            }}
            className="bg-primary-100 rounded-r h-full transition-[width] duration-1000"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-screen mb-10 flex flex-col items-center">
      <div className="container-ct w-full mb-14">
        <CarouselMUI
          data={timelineData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

      <div className="absolute left-0 bottom-0">
        <RenderItem />
      </div>
    </div>
  );
}
