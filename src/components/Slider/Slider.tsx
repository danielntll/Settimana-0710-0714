import styles from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { tRoom } from '../../types/tRoom';
import Card from '../Card/Card';


interface ComponentProps {
  data: tRoom[],
}


const Slider: React.FC<ComponentProps> = ({
  data
}) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={0}
      modules={[Pagination]}
      pagination={true}
      className={`${styles.Slider}`}
    >
      {data?.map((cardData: tRoom, index: number) => {
        return (
          <SwiperSlide className={`${styles.slide}`} key={index + "slider" + cardData.id}>
            <Card cardData={cardData} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
}

export default Slider;