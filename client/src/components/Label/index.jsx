import style from "./label.module.css";
function Label({ label, newLabel, featured }) {
	const classes = [style.label];
	if (newLabel) classes.push(style.newLabel);
	if (featured) classes.push(style.featured);

	return <span className={classes.join(" ")}>{label}</span>;
}

export default Label;
