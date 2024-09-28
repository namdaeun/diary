import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/colors";
import sunny from "../../../public/assets/sunny.svg";

export const backgroundStyle = recipe({
  base: {
    position: "relative",

    width: "48px",
    height: "28px",

    flexShrink: "0",
    padding: "0.2rem",

    borderRadius: "10rem",

    background: colors.gray_200,

    transition: "ease-in-out 0.2s",
  },

  variants: {
    mode: {
      light: {
        background: colors.gray_200,
      },
      dark: {
        background: colors.blue_100,
      },
    },
  },
});

export const switchStyle = recipe({
  base: {
    position: "absolute",

    width: "24px",
    height: "24px",

    margin: "0",

    backgroundColor: "transparent",
    backgroundImage: `url(${sunny})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",

    transition: "ease-in-out 0.2s",

    transform: "translateX(1.2rem)",

    appearance: "none",

    cursor: "pointer",

    ":checked": {
      transform: "translateX(0rem)",
    },
  },
});
