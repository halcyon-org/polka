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
  width: "1440px", // 固定幅
  height: "107px", // 固定高さ
  zIndex: 1000,
});

// ヘッダーメニューのスタイル（ロゴとメニュー）
export const headerMenu = style({
  display: "flex",
  alignItems: "center",
});

// ロゴのスタイル
export const logo = style({
  content: "url('/LogoH.svg')",
  display: "flex",
  alignItems: "center",
  flexShrink: 0, // サイズを縮めない
});

// メニューコンテナのスタイル（右端に配置）
export const menu = style({
  display: "flex",
  justifyContent: "space-between", // 等間隔で配置
  alignItems: "center",
  width: "218px",  // 固定幅218px
  height: "34px",  // 固定高さ34px
  backgroundColor: colors.background,  // フレームの背景色
  borderRadius: "5px",  // 角丸（任意）
  padding: "0 10px",  // フレーム内の余白
  boxSizing: "border-box",
});

// "使い方" のスタイル
export const usageMenuItem = style({
  width: "80px",    
  height: "34px",   
  color: colors.text, // 色の設定
  fontFamily: "Inter", // フォントファミリー
  fontSize: "24px",   // フォントサイズ
  fontWeight: 400,    // フォントウェイト
  textDecoration: "none",
  ':hover': {
    color: colors.primary,  
  },
});

// "利用規約" のスタイル
export const termsMenuItem = style({
  width: "117px",   
  height: "30px",   
  color: colors.text, // 色の設定
  fontFamily: "Inter", // フォントファミリー
  fontSize: "24px",   // フォントサイズ
  fontWeight: 400,    // フォントウェイト
  textDecoration: "none",
  marginLeft: "21px", // 間隔
  ':hover': {
    color: colors.primary,  
  },
});
