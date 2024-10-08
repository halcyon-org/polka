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
    background: "#FFFFFF",
    text: "#000000",
  },
  typography: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
  },
});
