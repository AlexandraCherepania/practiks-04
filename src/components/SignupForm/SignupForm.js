// import useLocalStorage from '../../hooks/useLocalStorage';
// import { useState, useEffect } from 'react';
import styles from './SignupForm.module.css';
import useLocalStorage from '../../hooks/useLocalStorage'



export default function SignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');
    
  
  
  // useEffect(() => {
  //   window.localStorage.setItem('email', JSON.stringify(email))
  // }, [email]);
  
  // useEffect(() => { 
  //   window.localStorage.setItem('password', JSON.stringify(password))
  // }, [password]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        switch (name) {
            case 'email': setEmail(value);
                break;
            
            case 'password': setPassword(value);
                break;
            
            default:
                return;
        }
    };
    
    
    return (
    <form className={styles.form} autoComplete="off">
      
            <label className={styles.label}>
        
                <span>Почта</span>
        
                <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        
                <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      
            <button type="submit">Зарегистрироваться</button>
    </form>
  );
}



















