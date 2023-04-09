import { Global } from "@emotion/react";
export const Fonts = () => (
  <Global
    styles={`@font-face {
  font-family:"Formula1-Regular";
  src:url("https://www.formula1.com/etc/designs/fom-website/fonts/F1Regular/Formula1-Regular.ttf");
  font-weight: normal;
  font-style: normal;
  @font-face {
  font-family:"Titillium Web";
  }
}`}
  />
);
