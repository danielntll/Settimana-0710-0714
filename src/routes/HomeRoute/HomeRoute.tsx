
import Slider from '../../components/Slider/Slider';
import { roomList } from '../../mocks/reservations';
import styles from './HomeRoute.module.scss';

const HomeRoute = () => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <>
      <div className={`${styles.HomeRoute}`}>
        <h1 className={`${styles.page__title}`}>
          Home
        </h1>
        <div className={`${styles.page__content}`}>
          <div className={`${styles.section}`}>
            <p className={`${styles.title}`}>Our selection</p>
            <div className={`${styles.content}`}>
              <Slider data={roomList} />
            </div>
          </div>
          <div className={`${styles.section}`}>
            <p className={`${styles.title}`}>Top rated</p>
            <div className={`${styles.content}`}>
              <Slider data={roomList} />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default HomeRoute;