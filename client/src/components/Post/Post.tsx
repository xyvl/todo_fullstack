import { useEffect, useState } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import PostForm from "../UI/PostForm/PostForm";
import styles from "./post.module.scss";
import axios from "axios";
import { finishLoading } from "../../store/slice/userPost";
const Post = () => {
  const id = useCustomSelector((state) => state.userId);
  const dispatch = useCustomDispatch();
  useEffect(() => {
    const posts = async () => {
      const p = await axios.post("http://localhost:5000/posts/get_posts", {
        id,
      });
      dispatch(finishLoading(p.data.rows));
    };
    posts();
  }, []);

  const postArray = useCustomSelector((state) => state.userPost);

  return (
    <section className={styles.post}>
      {postArray.length == 0 ? (
        <div className={styles.text}>Вы не создали пока что постов</div>
      ) : (
        postArray.map((element, index) => (
          <PostForm
            key={index}
            id={index}
            body={element.body}
            idDb={element.id_primary}
          />
        ))
      )}
    </section>
  );
};

export default Post;
