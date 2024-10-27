import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const selectButton = style({
  borderTop: `0.1rem solid ${vars.color.text}`,
  borderBottom: `0.1rem solid ${vars.color.text}`,
  background: vars.color.tileBg,
  display: "inline-flex",
  width: "12.5rem",
  padding: "0.75rem 0.625rem",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Text = style({
  color: vars.color.text,
  textAlign: "center",
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "1.25rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  margin: "0",
});

export const Icons = style({
  display: "flex",
  alignItems: "center",
  gap: "0.625rem",
});

export const InfoIcon = style({
  background: "url('/images/Info.svg')",
  width: "1.5rem",
  height: "1.5rem",
  display: "flex",
  border: "none",
  outline: "none",
});

export const VisibilityIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  display: "flex",
  border: "none",
  outline: "none",
});

export const VisibleIcon = style({
  background: "url('/images/Visible.svg')",
});

export const InvisibleIcon = style({
  background: "url('/images/Invisible.svg')",
});
