import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.headerMenu}>
        <a href="/" className={styles.logo} />
        <div className={styles.menu}>
          <a className={styles.usageMenuItem} href="#usage">
            使い方
          </a>
          <a className={styles.termsMenuItem} href="#terms">
            利用規約
          </a>
        </div>
      </div>
    </header>
  );
}
