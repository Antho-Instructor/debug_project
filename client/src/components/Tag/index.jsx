import style from "./tag.module.css";
function Tag({ tag, addFilter }) {
	return (
		<span className={style.tag} onClick={() => addFilter(tag)}>
			{tag}
		</span>
	);
}

export default Tag;
