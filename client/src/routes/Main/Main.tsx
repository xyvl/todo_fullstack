import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Post from "../../components/Post/Post";
import PostCreate from "../../components/PostCreate/PostCreate";
import { useCustomSelector } from "../../hooks/redux";
import styles from "./main.module.scss";

const Main = () => {
  const id = useCustomSelector((state) => state.userId);

  return (
    <>
      <HeaderMenu />
      {id ? (
        <>
          <PostCreate />
          <Post />
        </>
      ) : (
        <div className={styles.infoUser}>Вы не вошли</div>
      )}
    </>
  );
};

export default Main;
