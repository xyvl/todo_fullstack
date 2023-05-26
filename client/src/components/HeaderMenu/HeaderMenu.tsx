import { Link } from "react-router-dom";
import styles from "./header_menu.module.scss";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import { userID } from "../../store/slice/userId"

const HeaderMenu = () => {
  const id = useCustomSelector((state) => state.userId);
  const dispatch = useCustomDispatch()
  return (
    <section>
      <div className="wrapper">
        <div className={styles.header_menu}>
          <Link className={styles.a} to="/">Главная</Link>
          {id ? (
            <Link onClick={() => {
              localStorage.setItem('id', '0')
              
              dispatch(userID(0))
          }} className={styles.a} to="/auth">
              Выйти
            </Link>
          ) : (
            <Link className={styles.a} to="/auth">
              Войти
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeaderMenu;
