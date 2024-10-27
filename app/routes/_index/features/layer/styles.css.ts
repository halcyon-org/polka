import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const layerFrame = style({
  display: "flex",
  width: "894px",
  padding: "10px",
  alignItems: "flex-start", // 横
  gap: "10px",
});

export const selectButtonFrame = style({
  display: "flex",
  padding: "16px 1px",
  width: "180px",
  height: "24px",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "space-between",
});

export const selectButton = style({
  display: "flex",
  padding: "12px 10px",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
  borderTop: `1px solid ${vars.color.text}`,
  borderBottom: `1px solid ${vars.color.text}`,
  background: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.typography.fontFamily.roboto,
});

export const layerIconFrame = style({
  display: "flex",
  padding: "16px 1px",
  justifyContent: "center", // 縦
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
});

export const Icon = style({
  content: "url('/images/Layer Button.svg')",
  display: "flex",
  border: "none",
  outline: "none",
  background: "none",
});

export const infoFrame = style({
  display: "flex",
  padding: "1px 1px",
  alignItems: "space-between",
  gap: "10px",
});

export const infoIcon = style({
  content: "url('/images/material-symbols_info-outline.svg')",
  display: "flex",
  border: "none",
  outline: "none",
  background: "none",
});

export const eyeIcon = style({
  content: "url('/images/mdi_eye-outline.svg')",
  display: "flex",
});

export const eyeOffIcon = style({
  content: "url('/images/mdi_eye-off-outline.svg')",
  display: "flex",
});
