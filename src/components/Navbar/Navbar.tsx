import { useState } from 'react';
import SlideMenu from '../SlideMenu/SlideMenu';
import styles from './Navbar.module.scss';
import { IoMenuOutline } from "react-icons/io5";

const Navbar = ({ children }: any) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  // FUNCTIONS ----------------------
  const hendleMenuButton = () => {
    console.log("hendleMenuButton");
    setMenuOpen(!isMenuOpen);
  }

  // RETURN -------------------------
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.Navbar}`}>

          <div className={`${styles.Logo__container}`}>
            <img className={`${styles.Logo}`} src="../../../public/assets/pngwing.com.png" alt="" />
          </div>
          <div className={`${styles.Utilities}`}>

            <div
              onClick={() => hendleMenuButton()}
              className={`${styles.Utilities__button}`}
            >
              <IoMenuOutline size={24} />
            </div>
          </div>
        </div>
        {children}
      </div>
      {/* ----------------- */}
      <SlideMenu
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}

export default Navbar;