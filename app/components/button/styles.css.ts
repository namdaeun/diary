import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/colors";

export const buttonStyle = recipe({
  base: {
    width: "100%",

    padding: "1.2rem 2rem",

    borderRadius: "12px",

    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
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

        fontWeight: "400",
      },
    },
  },
  defaultVariants: {
    type: "primary",
  },
});
