import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/colors";

export const backgroundStyle = recipe({
  base: {
    display: "flex",

    padding: "0.4rem 1rem",

    width: "fit-content",

    alignItems: "center",
    justifyContent: "center",

    borderRadius: "0.6rem",
  },
  variants: {
    type: {
      primary: {
        color: colors.white,
        backgroundColor: colors.blue_900,
      },
      secondary: {
        color: colors.blue_900,
        backgroundColor: colors.blue_100,
      },
    },
  },
});

export const textStyle = recipe({
  base: {
    fontSize: "14px",
    fontWeight: 500,

    backgroundColor: "transparent",
  },
  variants: {
    type: {
      primary: {
        color: colors.white,
      },
      secondary: {
        color: colors.blue_900,
      },
    },
  },
});
