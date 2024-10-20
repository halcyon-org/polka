import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: "",
    text: "",
  },
  typography: {
    fontFamily: {
      roboto: "",
    },
  },
});

createGlobalTheme(":root", vars, {
  color: {
    background: "#D9D9D9",
    text: "#3C4063",
  },
  typography: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
  },
});
