import styles from './SlideMenu.module.scss';
import { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { appRoutes } from '../../App';
import { tRoute } from '../../types/tRoutes';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAuth } from '../../auth';

interface ContainerProps {
  isMenuOpen: boolean,
  setMenuOpen: (val: boolean) => void;
}

const SlideMenu: React.FC<ContainerProps> = ({ isMenuOpen, setMenuOpen }) => {
  // VARIABLES ----------------------
  const { loggedIn } = useAuth();
  const auth = getAuth();
  const location = useLocation()
  const navigate = useNavigate()
  // CONDITIONS ---------------------
  const [classMenu, setClassMenu] = useState<"isOpen" | "isClosed">("isClosed");
  const [currentLocation, setCurrentLocation] = useState<string>("");
  // FUNCTIONS ----------------------
  useEffect(() => {
    if (isMenuOpen) {
      setClassMenu("isOpen");
      document.body.style.overflow = "hidden";
    } else {
      setClassMenu("isClosed");
      document.body.style.overflow = "scroll";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setCurrentLocation(location.pathname)
  }, [location]);

  const handleNavigate = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  }
  // RETURN -------------------------
  return (
    <div className={`
      ${styles.SlideMenu}
      ${styles[classMenu]}
      `}>

      <div className={`${styles.header}`}>
        <div onClick={() => setMenuOpen(false)} className={`${styles.closeBtn}`}>
          <IoCloseOutline size={24} />
        </div>
      </div>

      <div className={`${styles.content}`}>
        {appRoutes.map((route: tRoute, index: number) => {
          if (!route.hideSideMenu) return (
            <div
              onClick={() => handleNavigate(route.path)}
              key={index + "sideMenuRoutes"}
              className={`${styles.contentBtn}`}
            >
              {route.icons ?

                currentLocation !== route.path ? route.icons[0] : route.icons[1]

                : null}
              <p className={`${styles.contentBtn__text}`}>
                {route.name}
              </p>
            </div>
          )
        })}

        <div
          onClick={() => { signOut(auth) }}
          className={`${styles.contentBtn}`}
        >
          <p className={`${styles.contentBtn__text}`}>
            {loggedIn ?
              "Log out"
              :
              "Utente non collegato"
            }

          </p>
        </div>

      </div>

    </div>);
}

export default SlideMenu;