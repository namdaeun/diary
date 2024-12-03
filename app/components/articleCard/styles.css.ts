import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/global.css";

export const articleStyle = style({
  display: "flex",

  flexDirection: "column",

  width: "27.3rem",
  height: "34rem",

  padding: "1.1rem",

  gap: "1.2rem",

  border: `1px solid ${vars.themeColor.color.border}`,
  borderRadius: "0.8rem",

  backgroundColor: `${vars.themeColor.color.article_bg}`,

  cursor: "pointer",
});

export const imgStyle = style({
  width: "25rem",
  height: "16.7rem",

  objectFit: "cover",
});

export const titleStyle = style({
  maxWidth: "23.8rem",

  fontSize: "1.6rem",
  fontWeight: 600,

  wordBreak: "keep-all",

  justifyContent: "center",

  backgroundColor: "transparent",
});

export const dateStyle = style({
  display: "flex",
  justifyContent: "end",
  marginTop: "auto",

  backgroundColor: "transparent",
});
