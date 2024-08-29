import styles from "./filterTag.module.css";

function FilterTag({ label, onRemove }) {
	return (
		<div className={styles.container}>
			<span className={styles.filterTag}>{label}</span>
			<button className={styles.removeButton} onClick={onRemove}>
				&#10005;
			</button>
		</div>
	);
}

export default FilterTag;
