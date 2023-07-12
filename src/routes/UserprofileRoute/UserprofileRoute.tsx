import { useState } from 'react';
import { useAuth } from '../../auth';
import styles from './UserprofileRoute.module.scss';
import { IoLogInOutline, IoLogIn } from "react-icons/io5";
import Login from '../../components/Login/Login';
import Signin from '../../components/Signin/Signin';
import { getAuth } from 'firebase/auth';

const UserprofileRoute = () => {
  // VARIABLES ----------------------
  const { loggedIn } = useAuth();
  const auth = getAuth();
  const user = auth.currentUser?.uid;
  // CONDITIONS ---------------------
  const [content, setContent] = useState<"login" | "signin">("login")
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <div className={`${styles.UserprofileRoute}`}>
      {!loggedIn ?
        <>
          <div className={`${styles.UserprofileRoute__notLogged}`}>
            <div onClick={() => setContent("login")} className={`${styles.button}`}>
              Log in
              <IoLogInOutline size={24} />
            </div>
            <div onClick={() => setContent("signin")} className={`${styles.button}`}>
              Sign in
              <IoLogIn size={24} />
            </div>
          </div>
          {content === "login" ?
            <div>
              <Login />
            </div>
            :
            <div>
              <Signin />
            </div>
          }
        </>

        :
        <div>
          Benvenuto!
          <br /><br />
          Questo è il tuo UID sul db : {user ? user : null}
          <br /><br />
          Qui ci saranno le tue informazioni personali come :
          storico visite, location salvate e le tue informazioni personali.
        </div>
      }
    </div>
  );
}

export default UserprofileRoute;