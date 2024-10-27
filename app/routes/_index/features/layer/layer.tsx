import { useState } from "react";
import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function layer(): ReactNode {
  const [isVisible, setIsVisible] = useState(false);

  const handleIconClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.layerFrame}>
      <nav className={styles.layerIconFrame}>
        <button className={styles.Icon} onClick={handleIconClick}></button>
      </nav>
      {isVisible && (
        <nav>
          <ul className={styles.selectButtonFrame}>
            <li className={styles.selectButton}>
              Layer 1
              <div className={styles.infoFrame}>
                <button className={styles.infoIcon}></button>
                <div className={styles.eyeIcon}></div>
              </div>
            </li>
            <li className={styles.selectButton}>
              Layer 2
              <div className={styles.infoFrame}>
                <button className={styles.infoIcon}></button>
                <div className={styles.eyeOffIcon}></div>
              </div>
            </li>
            <li className={styles.selectButton}>
              Layer 3
              <div className={styles.infoFrame}>
                <button className={styles.infoIcon}></button>
                <div className={styles.eyeIcon}></div>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
