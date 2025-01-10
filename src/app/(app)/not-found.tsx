import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2>Page introuvable</h2>
      <p>Cette page n&apos;existe pas </p>
      <Link href="/">Retourner à l&apos;accueil</Link>
    </div>
  );
}
