import styles from "./styles.module.css";

console.log("A", styles);

function A() {
	return <div className={styles.title}>A</div>;
}

export default A;
