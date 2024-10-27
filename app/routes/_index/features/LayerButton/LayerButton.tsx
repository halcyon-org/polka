import type { ReactNode } from "react";
import * as styles from "./styles.css";

interface Props {
  onClick: () => void;
}

export function LayerButton({onClick}:Props): ReactNode {
  return (
    <div className={styles.selectButton}>
      <button className={styles.Icon} onClick={onClick}></button>
    </div>
  );
}
