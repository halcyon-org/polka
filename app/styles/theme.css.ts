import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
<<<<<<< HEAD
    background: "#D9D9D9",
    text: "3C4063",
  },
  typography: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
=======
    background: "",
    text: "",
  },
  typography: {
    fontFamily: {
      roboto: "",
>>>>>>> 0d505cb (feat: Impl theme color (#64))
    },
  },
});

createGlobalTheme(":root", vars, {
  color: {
<<<<<<< HEAD
    text: "#3C4063",
    background: "#D9D9D9",
=======
    background: "#D9D9D9",
    text: "#3C4063",
>>>>>>> 0d505cb (feat: Impl theme color (#64))
  },
  typography: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
  },
});
