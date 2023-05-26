import { Link } from "react-router-dom";
import styles from "./regist.module.scss";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import axios from "axios";
import { useState } from "react";
import { useCustomDispatch } from "../../hooks/redux";
import { userID } from "../../store/slice/userId";
const Auth = () => {
  const dispatch = useCustomDispatch();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  interface IUser {
    name: string;
    lastname: string;
    email: string;
    password: string;
  }
  const user: IUser = {
    name,
    lastname,
    email,
    password,
  };

  const auth = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName("");
    setLastname("");
    setEmail("");
    setPassword("");

    const p = await axios.post("http://localhost:5000/user/regist", user);
    localStorage.setItem('id', p.data.rows[0].id)
    console.log(p.data.rows[0].id);
    dispatch(userID(p.data.rows[0].id));
    document.location.href='/'
  };

  return (
    <section>
      <HeaderMenu />
      <div className="wrapper">
        <h1 className={styles.h1}>Зарегистрироваться</h1>
        <form
          className={styles.auth}
          onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => auth(e)}
        >
          <input
            value={name}
            className={styles.input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
            type="text"
            placeholder="Имя"
          />
          <input
            value={lastname}
            className={styles.input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastname(e.currentTarget.value)
            }
            type="text"
            placeholder="Фамилия"
          />
          <input
            value={email}
            className={styles.input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            type="text"
            placeholder="Почта"
          />
          <input
            value={password}
            className={styles.input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            type="text"
            placeholder="Пароль"
          />
          <input className={styles.submit} type="submit" />
        </form>
        <Link className={styles.reg} to="/auth">
          Войти?
        </Link>
      </div>
    </section>
  );
};

export default Auth;
