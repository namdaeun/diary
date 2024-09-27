import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/colors";

export const buttonStyle = recipe({
  base: {
    padding: "1.2rem 2rem",

    justifyContent: "center",
    alignItems: "center",

    border: "none",
    borderRadius: "12px",

    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",

    whiteSpace: "nowrap",

    cursor: "pointer",
  },

  variants: {
    type: {
      primary: {
        backgroundColor: colors.primary_blue,
        color: colors.white,
      },
      secondary: {
        border: "1px solid rgba(105, 106, 117, 0.30)",
        borderRadius: "6px",

        backgroundColor: colors.white,
        color: colors.gray_500,
      },
      text: {
        border: "none",

        backgroundColor: colors.white,

        fontWeight: "400",
      },
    },
  },
  defaultVariants: {
    type: "primary",
  },
});
