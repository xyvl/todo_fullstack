import axios from "axios"
import styles from './postForm.module.scss';
import { useCustomDispatch } from "../../../hooks/redux"
import { deleteOnePost } from "../../../store/slice/userPost"

interface IProps{
	id: number,
	body: string,
	idDb: number
}
const PostForm = ({id, body, idDb}: IProps) => {

const dispatch = useCustomDispatch()
const deletePost = async() => {
	console.log(idDb)
	const p = await axios.post('http://localhost:5000/posts/delete', {idDb})
  dispatch(deleteOnePost(idDb))
}


	return (
		<section>
			<div className="wrapper">
				<div className={styles.post_form_main}>
					<p className={styles.id}>{id}</p>
					<p className={styles.body}>{body}</p>
					<button onClick={deletePost} className={styles.delete}>Удалить</button>
				</div>
			</div>
		</section>
	)
}

export default PostForm