import { style } from "@vanilla-extract/css";

export const selectButton = style({
  display: "flex",
  width: "894px",
  padding: "10px",
  alignItems: "flex-start", // 横
  gap: "10px",
});

export const Icon = style({
  content: "url('/images/Layer Button.svg')",
  display: "flex",
  border: "none",
  outline: "none",
  background: "none",
});
