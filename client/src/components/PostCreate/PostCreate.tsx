import { useState } from "react";
import styles from "./postCreate.module.scss";
import axios from "axios";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import { addPost as add } from "../../store/slice/userPost";
const PostCreate = () => {
  const id = useCustomSelector((state) => state.userId);
  const dispatch = useCustomDispatch();
  const [post, setPost] = useState("");
  interface IServerPost {
    id: number;
    body: string;
  }
  const serverPost: IServerPost = {
    id,
    body: post,
  };
  const addPost = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const p = await axios.post("http://localhost:5000/posts/add", serverPost);
    console.log(serverPost.body);

    dispatch(add({ body: serverPost.body, id_primary: p.data.rows[0].id_primary }));
    setPost("");

  };
  return (
    <section>
      <div className="wrapper">
        <form onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => addPost(e)}>
          <input
            value={post}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPost(e.currentTarget.value)
            }
            className={styles.input}
            type="text"
            placeholder="Новая задача"
          />
          <input className={styles.submit} type="submit" />
        </form>
      </div>
    </section>
  );
};

export default PostCreate;
