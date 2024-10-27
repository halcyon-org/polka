import type { ReactNode } from "react";
import * as styles from "./styles.css";
import { Link } from "@remix-run/react";

export function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images//LogoH.svg" />
      </div>
      <nav className={styles.headerMenu}>
        <ul className={styles.menu}>
          <li>
            <Link to="" className={styles.menuItem}>
              利用規約
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
