import { useEffect, useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";

export default function Carousel({
  data,
  currentIndex,
  setCurrentIndex,
}: {
  data: any[];
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

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

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

    [carouselRef1.current, carouselRef2.current].forEach((carousel) => {
      if (carousel) {
        carousel.addEventListener("scroll", observer);
      }
    });

    return () => {
      [carouselRef1.current, carouselRef2.current].forEach((carousel) => {
        if (carousel) {
          carousel.removeEventListener("scroll", observer);
        }
      });
    };
  }, [setCurrentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Tự động chuyển slide sau mỗi 5 giây

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="w-full max-w-lg overflow-hidden">
        <div
          ref={carouselRef1}
          className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 snap-center"
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
              className="w-full h-auto flex-shrink-0 snap-center p-4"
            >
              <div className="mb-6">
                <span className="text-xs text-white bg-primary-200 px-2 py-1">
                  {item?.tag}
                </span>
              </div>

              <h3 className="text-lg uppercase text-[20px] md:text-[24px] text-white hyphens-auto font-bold mt-1 line-clamp-3">
                {t(item.title)}
              </h3>
              <p className="text-sm text-gray-500 mt-2 text-[1rem]">
                {item.description}
              </p>
              {item.link ? (
                <a
                  target="_blank"
                  href={item.link}
                  className="w-full text-primary-200 mt-2 inline-block absolute bottom-[10px] md:bottom-[130px]"
                >
                  <ArrowForwardIosIcon /> {t("read_more")}
                </a>
              ) : (
                <div
                  className="w-full text-primary-200 mt-2 inline-block absolute
                  bottom-[10px] md:bottom-[130px]"
                >
                  {t("project_in_progress")}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
