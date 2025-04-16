import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homePizza } from "../assets/data";

export default function HomeSwiper() {
  return (
    <Swiper
      pagination
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={20}
      slidesPerView={1}
    >
      {homePizza.map((value, index) => (
        <SwiperSlide key={value}>
          <div className="container space-between flex-col md:flex-row">
            <div className="col">
              <img
                src={`./home-img-${index + 1}.png`}
                className="w-[400px]"
                alt=""
              />
            </div>
            <div className="col">
              <h1 className="text-white text-5xl text-center">{value}</h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
