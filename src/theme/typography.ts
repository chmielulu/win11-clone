import { css } from "styled-components";
import segoeUIVariableStaticDisplayLight from "../assets/fonts/SegoeUIVariableStaticDisplayLight.ttf";
import segoeUIVariableStaticDisplaySemiLight from "../assets/fonts/SegoeUIVariableStaticDisplaySemilight.ttf";
import segoeUIVariableStaticDisplay from "../assets/fonts/SegoeUIVariableStaticDisplay.ttf";
import segoeUIVariableStaticDisplaySemiBold from "../assets/fonts/SegoeUIVariableStaticDisplaySemibold.ttf";
import segoeUIVariableStaticDisplayBold from "../assets/fonts/SegoeUIVariableStaticDisplayBold.ttf";

export const typography = css`
  @font-face {
    font-family: "Segoe UI Variable Display";
    src: url(${segoeUIVariableStaticDisplayLight}) format("truetype");
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: "Segoe UI Variable Display";
    src: url(${segoeUIVariableStaticDisplaySemiLight}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Segoe UI Variable Display";
    src: url(${segoeUIVariableStaticDisplay}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Segoe UI Variable Display";
    src: url(${segoeUIVariableStaticDisplaySemiBold}) format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Segoe UI Variable Display";
    src: url(${segoeUIVariableStaticDisplayBold}) format("truetype");
    font-weight: 600;
    font-style: normal;
  }
`;
