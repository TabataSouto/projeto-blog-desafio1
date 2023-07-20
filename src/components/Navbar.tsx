import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <ul className={styles.navbar}>
        <li>Codelândia</li>
        <li>
          <Link href="/newpost">Novo post</Link>
        </li>
        <li>
          <Link href="/">blog</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
