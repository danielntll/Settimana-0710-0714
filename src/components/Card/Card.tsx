import { tRoom } from '../../types/tRoom';
import styles from './Card.module.scss';
import { IoStarSharp, IoCashSharp, IoChevronForwardOutline, IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

interface ComponentProps {
  cardData: tRoom,
}


const Card: React.FC<ComponentProps> = ({ cardData }) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.isAviable}`}>
        {cardData.availability ?
          <div className={`${styles.aviable__container, styles.aviable}`}>
            <IoCheckmarkOutline />
          </div>
          :
          <div className={`${styles.aviable__container, styles.notAviable}`}>
            <IoCloseOutline />
          </div>
        }
      </div>
      <div className={`${styles.container__img}`}>
        <img className={`${styles.img}`} src={cardData?.imageLocation} alt="" />
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.content__header}`}>
          <p className={`${styles.title}`}>
            {cardData?.name}
          </p>
          <div className={`${styles.rating}`}>
            <IoStarSharp />
            {cardData?.rating}
          </div>
        </div>

        <div className={`${styles.content__subtitle}`}>
          {cardData?.location}
        </div>

        <div className={`${styles.description}`}>
          {cardData?.description}
        </div>

        <div className={`${styles.amenities__container}`}>
          {cardData?.amenities.map((amenities: string, index: number) => {
            return (
              <div
                key={index + amenities + cardData.id}
                className={`${styles.amenities}`}
              >
                {amenities}
              </div>
            )
          })}
        </div>

        <div className={`${styles.footer}`}>
          <div className={`${styles.price}`}>
            <IoCashSharp />
            ${cardData.price}
            <span className={`${styles.perDay}`}>
              /day
            </span>
          </div>
          <div>
            <Link className={`${styles.open}`} to={"/locations/" + cardData.id}>
              Open
              <IoChevronForwardOutline />
            </Link>
          </div>
        </div>
      </div>
    </div>);
}

export default Card;