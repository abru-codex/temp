// Import Swiper React components
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchInput from "./SearchInput";
const Banner = () => {
  const pngImages = [
    "https://boodmo.com/assets/images/board/min/engine-1-v2.png",
    "https://boodmo.com/assets/images/board/min/engine-2-v2.png",
    "https://boodmo.com/assets/images/board/min/engine-3-v2.png",
  ];

  return (
    <div className="bg-mix md:h-[300px] w-full grid grid-cols-1 md:grid-cols-2  gap-14 px-16  py-8 ">
      <SearchInput />
      <div>
        <Swiper
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper max-w-full w-full "
        >
          {pngImages.map((img, index) => (
            <SwiperSlide className="" key={index}>
              <img className="" src={img} alt={`Img-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
