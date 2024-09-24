import Link from "next/link";
import styles from "./Layou.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>BOTOCAR</h2>
          <p>choose and buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>sana sales car webSite &copy;</footer>
    </>
  );
}

export default Layout;
