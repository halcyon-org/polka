import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("html, body", {
  color: vars.color.text,
  fontFamily: vars.typography.fontFamily.roboto,
  margin: 0,
  padding: 0,
});
