import styles from './SingleLocationRoute.module.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tRoom } from '../../types/tRoom';
import { roomList } from '../../mocks/reservations';

const SingleLocationRoute = () => {
  // VARIABLES ----------------------
  const { id } = useParams()
  // CONDITIONS ---------------------
  const [data, setData] = useState<tRoom>();
  // FUNCTIONS ----------------------
  useEffect(() => {
    const data = roomList.find((room: tRoom) => room.id === parseInt(id!))
    setData(data);
    console.log(data)
  }, [id])
  // RETURN -------------------------
  return (
    <div className={`${styles.SingleLocationRoute}`}>
      <h1>
        {data?.name}
      </h1>
    </div>
  );
}

export default SingleLocationRoute;