import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const box = style({
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "400px",
  fontSize: "1.5rem",
  textAlign: "center",
  background: vars.color.tileBg,
  padding: "1rem 2rem",
  gap: "1rem",
  borderRadius: "1rem",
});

export const p = style({
  width: "100%",
});

export const input = style({
  fontSize: "1rem",
  width: "100%",
  padding: "0.2rem",
  margin: "0",
});

export const btnDiv = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  alignSelf: "stretch",
});

export const button = style({
  fontSize: "1rem",
  padding: "0.2rem",
});
