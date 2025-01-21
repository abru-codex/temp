"use client";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
// imgs

import SectionTittle from "@/app/_components/SectionTittle";
import { ControllerContext } from "@/app/_providers/ControllerProvider";
import Image from "next/image";
import image from "../../../public/11.webp";

const CurrentOffer = () => {
  //@ts-ignore
  const { windowWidth } = useContext(ControllerContext);
  const [slide, setSlide] = useState(2);
  const images = [image, image, image, image, image];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (windowWidth < 500) {
      setSlide(1);
    } else {
      setSlide(2);
    }
  }, [windowWidth]);

  return (
    <div className="px-2 md:px-0">
      <SectionTittle tittle1={"Current"} tittle2={"Offers"} />

      <Swiper
        // navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        slidesPerView={slide}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper m-6"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              width={300}
              height={250}
              className="mb-8 w-full h-full"
              src={img}
              alt={`img-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CurrentOffer;
