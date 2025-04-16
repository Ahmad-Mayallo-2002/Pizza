import { Swiper, SwiperSlide } from "swiper/react";
import pizzas from "../assets/pizza.json";
import { Autoplay, Pagination } from "swiper/modules";
import PizzaCard from "./PizzaCard";

export type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function MenuSwiper() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {pizzas.map((pizza: Pizza) => (
        <SwiperSlide key={pizza.id}>
          <PizzaCard
            name={pizza.name}
            price={pizza.price}
            image={"./" + pizza.image}
            id={pizza.id}
            description={pizza.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
