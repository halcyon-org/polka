import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const headerContainer = style({
    display: "flex",//フレックスボックスレイアウトを使用
    justifyContent: "space-between",//左右にロゴとメニューを配置
    alignItems:"center",//縦方向の中央ぞろえ
    padding: "1rem 2rem",//上下に16pix、左右に32pixの余白
    backgroundColor: "#ffffff",//背景色を白に設定
    position: "fixed",//ヘッダーを固定
    top: 0,//上端に設置
    width: "100%",//全幅をカバー
    zIndex: 1000,//他の要素よりも前面に表示
});


export const navMenu = style({
    display: "flex",
    gap: "2rem",//メニュー項目同士の間隔
});

export const navItem = style({
    color: "#333", // 通常時のテキスト色
    textDecoration: "none", // 通常時は下線を消す
    fontWeight: "bold", // 太字にする
    fontSize: "1rem", // 文字サイズ
    ':hover': { // 汎用的なhoverの指定
      color: "#007BFF", // ホバー時に色を変える
      textDecoration: "underline", // ホバー時に下線を追加
    },
  });

export const logo = style({
    content: "url('/LogoH.svg')",
    display: "flex",
    padding: "0.47rem 0.38rem 0.76rem 0.38rem",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "0.33rem",
    width: "15.6rem",
    height: "2.52rem",
    flexShrink: 0,
  });

export const headerContainerResponsive = style({
    "@media":{//画面の幅が768ピクセル以下の場合に適用されるスタイル
        "screen and (max-width: 768px)":{
            flexDirection: "column",//スマホサイズでは縦並び
            alignItems: "flex-start",//左寄せに変更
        },
    },
});

export const hamburgerMenu = style({
    display: "none",//デフォルトでは非表示
    "@media":{
        "screen and (max-width: 768px)":{
            display: "block",//小さい画面では表示
        },
    },
});

export const navMenuMobile = style({
    display: "none",//初期状態ではメニューは非表示
    "@media":{
        "screen and (max-width: 768px)":{
            display: "flex",
            flexDirection: "column",
        },
    },
});

// デバイスの幅に応じたスクリプト制御
export const responsiveScriptControl = () => {
    const width = window.innerWidth;
    
    // デバイスに応じた機能を実行
    if (width >= 1024) {
      return desktopFunctionality();
    } else if (width >= 768) {
      return tabletFunctionality();
    } else {
      return mobileFunctionality();
    }
  };
  
  // イベントリスナーの登録
  export const initResponsiveControls = () => {
    window.addEventListener("resize", responsiveScriptControl);
    window.addEventListener("load", responsiveScriptControl);
  };
  
  // デスクトップ用の機能
  export const desktopFunctionality = () => {
    console.log("デスクトップ専用の動作");
  };
  
  // タブレット用の機能
  export const tabletFunctionality = () => {
    console.log("タブレット専用の動作");
  };
  
  // スマートフォン用の機能
  export const mobileFunctionality = () => {
    console.log("スマートフォン専用の動作");
  };
  
  // 初期化関数の実行
  initResponsiveControls();
  
  