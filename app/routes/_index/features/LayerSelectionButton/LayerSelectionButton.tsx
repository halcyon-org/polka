import type { ReactNode } from "react";
import classNames from "classnames";
import * as styles from "./styles.css";

interface Props {
  text: string;
  visible: boolean;
  onClickInfo: () => void;
  onClickVisible: () => void;
}

export function LayerSelectionButton({
  text,
  visible,
  onClickInfo,
  onClickVisible,
}: Props): ReactNode {
  return (
    <div className={styles.selectButton}>
      <p className={styles.Text}>{text}</p>
      <div className={styles.Icons}>
        <button className={styles.InfoIcon} onClick={onClickInfo}></button>
        <button
          className={classNames(
            visible ? styles.VisibleIcon : styles.InvisibleIcon,
            styles.VisibilityIcon,
          )}
          onClick={onClickVisible}
        ></button>
      </div>
    </div>
  );
}
