import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/colors";
import sunny from "../../../public/assets/sunny.svg";

export const backgroundStyle = recipe({
  base: {
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
        background: colors.blue_100,
      },
    },
  },
});

export const switchStyle = recipe({
  base: {
    width: "3rem",
    height: "3rem",

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
    },
  },
});
