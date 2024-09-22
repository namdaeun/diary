import { globalStyle } from "@vanilla-extract/css";
import { Pretendard } from "./fonts/fonts.css";

globalStyle("body, *", {
  boxSizing: "border-box",

  fontFamily: Pretendard,
});
