// Header.tsx
import * as styles from "./styles.css";

export function Header() {
  return (
    <header className={styles.header}>
      {/* ロゴ用フレームを追加 */}
      <div className={styles.logoFrame}>
        <a href="/" className={styles.logo}>
          {/* ロゴの画像を挿入 */}
          <img src="/path/to/logo.svg" alt="Logo" />
        </a>
      </div>
      <nav>
        <div className={styles.menu}>
          <a className={styles.usageMenuItem} href="/usage">
            使い方
          </a>
          <a className={styles.termsMenuItem} href="/terms">
            利用規約
          </a>
        </div>
      </nav>
    </header>
  );
}
