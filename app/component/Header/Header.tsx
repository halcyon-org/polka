import type { ReactNode } from "react";
import * as styles from "./styles.css";
import { Link } from "@remix-run/react";

export function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/images//LogoH.svg" />
      </div>
      <nav className={styles.headerMenu}>
        <ul className={styles.menu}>
          <li>
            <Link to="#usage" className={styles.menuItem}>
              使い方
            </Link>
          </li>
          <li>
            <Link to="#terms" className={styles.menuItem}>
              利用規約
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
