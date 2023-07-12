import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './Login.module.scss';
import { useState } from 'react';

const Login = () => {
  // VARIABLES ----------------------
  const auth = getAuth();
  // CONDITIONS ---------------------
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  // FUNCTIONS ----------------------
  const handleDoAccess = () => {
    setError(false)
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log("User Loggato : ", user);
    })
      .catch((error) => {
        console.log("ERRORE DI CONNESSIONE: ", error);
        setError(true);
      })
  }


  // RETURN -------------------------
  return (
    <div className={`${styles.Login}`}>
      <div className={`${styles.Login__form}`}>
        <input onChange={(ev) => setEmail(ev.target.value)} type='email' placeholder='Email' />
        <input onChange={(ev) => setPassword(ev.target.value)} type='password' placeholder='Password' />
        {error ?
          <div>
            Email o password errata.
          </div>
          : null
        }

        <div className={`${styles.Login__button}`} onClick={() => { handleDoAccess() }}>
          Do Log in
        </div>
      </div>
    </div>
  );
}

export default Login;