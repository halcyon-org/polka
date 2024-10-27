import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

// ヘッダーコンテナのスタイル
export const header = style({
  display: "flex",
  justifyContent: "space-between", // 左右の要素を分ける
  alignItems: "center",
  padding: "31px 40px",
  backgroundColor: vars.color.background,
  position: "fixed",
  top: 0,
  width: "100%",
  height: "auto",
  zIndex: 1000,
});

// ロゴのスタイル
export const logoContainer = style({
  width: "auto",
  height: "45px",
  flexShrink: 0,
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
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "24px",
  textDecoration: "none",
});
