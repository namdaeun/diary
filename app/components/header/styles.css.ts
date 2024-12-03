import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/global.css";

export const headerStyle = style({
  display: "flex",
  position: "fixed",

  width: "100%",
  height: "5rem",

  padding: "1.5rem 4rem 1.5rem 10rem",

  justifyContent: "space-between",
  alignItems: "center",
});

export const imageStyle = style({
  width: "13rem",
  height: "3.5rem",

  objectFit: "cover",

  cursor: "pointer",
});

export const gapStyle = style({
  display: "flex",

  justifyContent: "center",
  alignItems: "center",

  gap: "10rem",
});

export const menuSectionStyle = style({
  display: "flex",

  maxWidth: "24.3rem",
  height: "1.7rem",

  gap: "2.8rem",
});

export const menuStyle = style({
  display: "flex",

  width: "fit-content",

  alignItems: "center",

  listStyleType: "none",
});

export const linkStyle = style({
  position: "relative",

  alignItems: "center",

  textDecoration: "none",

  fontWeight: 300,
  fontSize: "1.5rem",

  selectors: {
    "&::after": {
      display: "block",
      position: "absolute",

      content: "",

      left: "auto",
      width: "0",

      borderBottom: `1.5px solid ${vars.themeColor.color.font}`,
      transition: "width 250ms ease-out",
    },

    "&:hover::after": {
      width: "100%;",
    },
  },
});
