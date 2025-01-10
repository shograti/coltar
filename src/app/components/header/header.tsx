import Link from "next/link";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Coltar</h1>
      </Link>
      <nav className={styles.nav}>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
