import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import styles from './Signin.module.scss';
import { useState } from 'react';

const Signin = () => {
  // VARIABLES ----------------------
  const auth = getAuth();
  // CONDITIONS ---------------------
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(false);

  // FUNCTIONS ----------------------
  const handleSignupWithEmailAndPass = () => {
    console.log(email, " ----- ", password)
    setError(false);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("LOGGED : ", user);


      }).catch((error) => {
        console.log("ERR ")
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
        console.log("er:", errorCode, " em: ", errorMessage)
      });

  }
  // RETURN -------------------------
  return (
    <div className={`${styles.Signin}`}>
      <div className={`${styles.Signin__form}`}>
        <input onChange={(ev) => setEmail(ev.target.value)} type='email' placeholder='Email' />
        <input onChange={(ev) => setPassword(ev.target.value)} type='password' placeholder='Password' />
        {error ?
          <div className='Signup__form__error'>
            Email non valida o password troppo debole
          </div>
          : null
        }
        <div
          className={`${styles.Signin__button}`}
          onClick={() => { handleSignupWithEmailAndPass() }}>
          Sign up with email
        </div>
      </div>
    </div>);
}

export default Signin;