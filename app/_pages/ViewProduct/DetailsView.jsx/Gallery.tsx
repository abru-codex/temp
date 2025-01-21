//@ts-nocheck
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// const ref=useRef()

// import required modules
import { RiCloseFill } from "react-icons/ri";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Gallery({ images }: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [currentImage, setCurrentImage] = useState("");
  const handleModal = (img: string) => {
    setCurrentImage(img);
  };

  return (
    <div className="gallery">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index}>
            <label htmlFor="gallery-modal" className="hidden md:block">
              <img onClick={() => handleModal(img)} src={img} alt="" />
            </label>
            <div className="md:hidden">
              <img src={img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden md:block">
        <Swiper
          // ref={ref}
          // onSwiper={setThumbsSwiper(ref)}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images?.map((img: string, index: number) => (
            <SwiperSlide key={index}>
              <img src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* this is the image modal */}
      <input type="checkbox" id="gallery-modal" className="modal-toggle" />
      <label htmlFor="gallery-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-xl flex justify-end font-bold mb-4">
            <label htmlFor="gallery-modal" title="close">
              <RiCloseFill />
            </label>
          </h3>
          <img src={currentImage} alt="" />
        </label>
      </label>
    </div>
  );
}
