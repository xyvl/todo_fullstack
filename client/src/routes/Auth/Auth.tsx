import { Link } from "react-router-dom";
import styles from "./auth.module.scss";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import { useState } from "react";
import axios from "axios";
import { useCustomDispatch } from "../../hooks/redux";
import { userID } from "../../store/slice/userId";
const Auth = () => {
  const dispatch = useCustomDispatch();

  const [userNotEnter, setUserNotEnter] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  interface IUser {
    email: string;
    password: string;
  }

  const user: IUser = {
    email,
    password,
  };

  const auth = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const p = await axios.post("http://localhost:5000/user/auth", user);

    if (p.data.rows.length === 1) {
      console.log("Такой пользователь существует");
      dispatch(userID(p.data.rows[0].id));
      localStorage.setItem('id', p.data.rows[0].id)
      document.location.href = '/'
    } else {
      setUserNotEnter(true)
    }
  };
  return (
    <section>
      <HeaderMenu />
      <div className="wrapper">
        <h1 className={styles.h1}>Войти</h1>
        <form
          className={styles.auth}
          onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => auth(e)}
        >
          <input
            className={styles.input}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            type="text"
            placeholder="почта"
          />
          <input
            className={styles.input}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            type="text"
            placeholder="пароль"
          />
          <input className={styles.submit} type="submit" />
        </form>
        <Link className={styles.reg} to="/regist">
          Зарегистрироваться?
        </Link>
        {userNotEnter? <div className={styles.error}>Вы ввели неправельный пароль или логин</div> : null}
      </div>
    </section>
  );
};

export default Auth;
