import { style } from "@vanilla-extract/css";

// カラーパレットの定義
const colors = {
  primary: "#007BFF",
  text: "#3C4063",
  background: "#D9D9D9",
};

// ヘッダーコンテナのスタイル
export const header = style({
  display: "flex",
  justifyContent: "space-between", // 左右の要素を分ける
  alignItems: "center",
  padding: "31px 40px",
  backgroundColor: colors.background,
  position: "fixed",
  top: 0,
  width: "1440px",
  height: "107px",
  zIndex: 1000,
});

// ヘッダーメニューのスタイル（ロゴとメニュー）
export const headerMenu = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%", // ヘッダーメニュー全体の幅をカバー
});

// メニューコンテナのスタイル（右端に配置）
export const menu = style({
  display: "flex",
  gap: "20px", // メニュー項目間の間隔
  alignItems: "center",
  marginLeft: "auto", // 右端に配置
  listStyle: "none", // リストスタイルをリセット
});

// "使い方" と "利用規約" のスタイル
export const menuItem = style({
  color: colors.text,
  fontFamily: "Inter",
  fontSize: "24px",
  textDecoration: "none",
  ':hover': {
    color: colors.primary, // ホバー時に色を変える
  },
});
