import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: "#D9D9D9",
    text: "3C4063",
  },
  typography: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
  },
});

createGlobalTheme(":root", vars, {
  color: {
    text: "#3C4063",
    background: "#D9D9D9",
  },
  typography: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
  },
});
