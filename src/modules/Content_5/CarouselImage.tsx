import { useEffect, useRef, useCallback } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";
import { TimelineItem } from "@/src/data/timeline";
import Image from "next/image";

export default function Carousel({
  data,
  currentIndex,
  setCurrentIndex,
}: {
  data: TimelineItem[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const images = data?.map((item) => item.image);
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    syncScroll(currentIndex);
  }, [currentIndex]);

  const syncScroll = (index: number) => {
    [carouselRef1.current, carouselRef2.current].forEach((carousel) => {
      if (carousel) {
        carousel.scrollTo({
          left: index * carousel.offsetWidth,
          behavior: "smooth",
        });
      }
    });
  };

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length, setCurrentIndex]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length, setCurrentIndex]);

  useEffect(() => {
    const handleScroll = debounce((carousel: HTMLDivElement | null) => {
      if (!carousel) return;
      const index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
      setCurrentIndex(index);
    }, 200);

    const observer = (e: Event) => {
      const target = e.target as HTMLDivElement;
      handleScroll(target);
    };

    // Store ref values in local variables
    const carousel1 = carouselRef1.current;
    const carousel2 = carouselRef2.current;

    [carousel1, carousel2].forEach((carousel) => {
      if (carousel) {
        carousel.addEventListener("scroll", observer);
      }
    });

    return () => {
      [carousel1, carousel2].forEach((carousel) => {
        if (carousel) {
          carousel.removeEventListener("scroll", observer);
        }
      });
    };
  }, [setCurrentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="w-full max-w-lg overflow-hidden">
        <div
          ref={carouselRef1}
          className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth rounded-lg"
        >
          {images.map((src, index) => (
            <Image
              width={1000}
              height={1000}
              objectFit="cover"
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 snap-center rounded-lg object-cover"
            />
          ))}
        </div>
        <div className="my-10 gap-2 hidden md:flex">
          <button
            onClick={prevSlide}
            className="bg-primary-300 flex justify-center items-center text-white p-3 "
          >
            <ArrowBackIosIcon />
          </button>
          <button
            onClick={nextSlide}
            className="bg-primary-300 flex justify-center items-center text-white p-3"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>

      <div className="w-full min-h-[250px] overflow-hidden relative">
        <div
          ref={carouselRef2}
          className="flex absolute inset-0 overflow-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full h-auto flex-shrink-0 snap-center px-4"
            >
              <div className="mb-6">
                <span className="text-md text-white bg-primary-200 p-2 text-center w-fit flex items-center justify-center">
                  {item?.role}
                </span>
              </div>

              <h3 className="text-lg text-[24px] md:text-[28px] text-white hyphens-auto font-bold mt-1 line-clamp-3">
                {t(item.company)}
              </h3>
              <p
                className="text-white mt-2 text-md"
                dangerouslySetInnerHTML={{
                  __html: t(item.description),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
