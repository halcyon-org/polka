import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const selectButton = style({
  background: vars.color.tileBg,
  display: "inline-flex",
  width: "auto",
  height: "auto",
  padding: "1rem",
  borderRadius: "0.5rem",
});

export const Icon = style({
  background: "url('/images/Layer.svg')",
  width: "2rem",
  height: "2rem",
  display: "flex",
  border: "none",
  outline: "none",
});
