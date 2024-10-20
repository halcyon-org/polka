import { useEffect, useState, type ReactNode } from "react";
import * as styles from "./styles.css";

interface Props {
  onCanceled: () => void;
  onSaved: (apiKey: string) => void;
}

export function ClientAPIKeyInputs({ onCanceled, onSaved }: Props): ReactNode {
  const [apiKey, setApiKey] = useState<string>("");

  useEffect(() => {
    setApiKey(localStorage.getItem("client_api_key") || "");
  }, []);

  return (
    <div className={styles.box}>
      <p className={styles.p}>Client API Keyを入力してください</p>
      <input
        className={styles.input}
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Client API Key"
      />
      <div className={styles.btnDiv}>
        <button
          className={styles.button}
          onClick={() => {
            setApiKey(localStorage.getItem("client_api_key") || "");
            onCanceled();
          }}
        >
          キャンセル
        </button>
        <button
          className={styles.button}
          onClick={() => {
            localStorage.setItem("client_api_key", apiKey);
            onSaved(apiKey);
          }}
        >
          保存
        </button>
      </div>
    </div>
  );
}
