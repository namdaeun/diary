import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/colors";
import sunny from "../../../public/assets/sunny.svg";

export const switchStyle = recipe({
  base: {
    position: "relative",

    width: "4.8rem",
    height: "2.8rem",

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
        background: colors.primary_blue,
      },
    },
  },
});

export const toggleHandleStyle = recipe({
  base: {
    width: "3rem",
    height: "3rem",

    flexShrink: "0",

    margin: "auto 0",

    backgroundImage: `url(${sunny})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",

    transition: "ease-in-out 0.2s",

    transform: "translateX(1.8rem)",

    appearance: "none",

    cursor: "pointer",

    ":checked": {
      transform: "translateX(0rem)",
      backgroundImage: `url(${sunny})`,
    },
  },
});
