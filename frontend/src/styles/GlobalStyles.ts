import { createGlobalStyle } from 'styled-components';
import {
  fonts,
  colors,
  fontSize,
  lineHeight,
  fontWeight,
  boxShadow,
  opacity,
} from './variables';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${fonts.opensans};
    font-size: ${fontSize.smBody};
    line-height: ${lineHeight.smBody};
    background-color: #f9f9f9;
    color: ${colors.primaryText};
  }
  
  .section {
  // padding-bottom: 40px;
  }
  
  main {
  background-color: #ECF1F8;
  padding-top: 80px;
  display: flex;
  }

  h1 {
    font-size: ${fontSize.xlTitle};
    line-height: ${lineHeight.normal};
    font-weight: ${fontWeight.semibold};
    font-family: ${fonts.montserrat};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .text-tab-text {
    font-size: ${fontSize.tabText};
    line-height: ${lineHeight.normal};
    font-weight: ${fontWeight.semibold};
    color: ${colors.primaryText};
  }

  .shadow-card {
    box-shadow: ${boxShadow.card};
  }

  .opacity-60 {
    opacity: ${opacity[60]};
  }
`;

export default GlobalStyles;
