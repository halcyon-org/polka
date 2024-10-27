import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  width: "100%",
  background: vars.color.tileBg,
  padding: "1rem",
});

export const headerContent = style({
  padding: "1rem 2.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const logo = style({
  background: "url('/images/LogoH.svg')",
  backgroundRepeat: "no-repeat",
});

export const headerMenu = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
});

export const menu = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  alignSelf: "stretch",
  listStyleType: "none",
});

export const menuItem = style({
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  textDecorationLine: "underline",
  color: vars.color.text,
  textDecoration: "none",
});
