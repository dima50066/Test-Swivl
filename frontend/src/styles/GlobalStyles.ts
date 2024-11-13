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
    box-sizing: border-box;
  }

  html {
  max-width: 1440px;
  display: flex;
  scroll-behavior: smooth;
  overflow-x: hidden;
  margin: 0 auto;
}

  body {
    background-color: #f9f9f9;
    margin: 0;
  }

  p{
    margin: 0;  
  }
  
  .section {
  // padding-bottom: 40px;
  }
  
  main {
  background-color: #ECF1F8;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  padding-inline: 135px;
  gap: 47px;
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
