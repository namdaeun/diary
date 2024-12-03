import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/colors";
import sunny from "../../../public/assets/icon/ic_sunny.svg";

export const backgroundStyle = recipe({
  base: {
    position: "relative",

    width: "5rem",
    height: "3rem",

    flexShrink: "0",
    padding: "0.2rem",

    borderRadius: "10rem",

    background: colors.gray_200,

    transition: "ease-in-out 0.2s",
  },

  variants: {
    mode: {
      light: {
        background: colors.navy_bg,
      },
      dark: {
        background: colors.blue_500,
      },
    },
  },
});

export const switchStyle = recipe({
  base: {
    position: "absolute",

    width: "2.8rem",
    height: "2.8rem",

    margin: "0",

    top: "0.2rem",

    backgroundColor: "transparent",
    backgroundImage: `url(${sunny})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",

    transition: "ease-in-out 0.2s",

    transform: "translateX(1.8rem)",

    appearance: "none",

    cursor: "pointer",

    ":checked": {
      transform: "translateX(0rem)",
    },
  },
});
