import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import { useSwiper } from "swiper/react";
// Images
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
// Icons
import { ArrowBigLeftDash } from "lucide-react";

function ProjectsCarousel() {
  return (
    <>
      <section className="relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          breakpoints={{
            320: {
              spaceBetween: 20,
            },
            700: {
              spaceBetween: 60,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 1,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="relative overflow-hidden"
        >
          <SwiperSlide>
            <motion.img whileHover={{ scale: 1.1 }} src={Img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <motion.img whileHover={{ scale: 1.1 }} src={Img2} alt="" />
          </SwiperSlide>
          <Controls />
        </Swiper>
      </section>
    </>
  );
}

export default ProjectsCarousel;

const Controls = () => {
  const swipe = useSwiper();
  return (
    <>
      {/* prev */}
      <div className="Oracle-Position-left" onClick={() => swipe.slidePrev()}>
        <span className="Oracle">
          <ArrowBigLeftDash size={24} />
        </span>
      </div>
      {/* next */}
      <div className="Oracle-Position-right" onClick={() => swipe.slideNext()}>
        <span className="Oracle rotate-180">
          <ArrowBigLeftDash size={24} />
        </span>
      </div>
    </>
  );
};
