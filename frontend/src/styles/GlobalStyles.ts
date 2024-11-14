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
    max-width: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background-color: #f9f9f9;
    margin: 0;
  }

  p {
    margin: 0;  
  }

  main {
    background-color: #ECF1F8;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    padding-inline: 20px;
    gap: 20px;
  }

  h1 {
    font-size: ${fontSize.lgBody};
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

  @media (min-width: 768px) {
    main {
      padding-top: 60px;
      padding-inline: 80px;
      flex-direction: row;
      gap: 30px;
    }
    h1 {
      font-size: ${fontSize.xlTitle};
    }
  }

  @media (min-width: 1024px) {
    main {
      padding-top: 80px;
      padding-inline: 135px;
      gap: 47px;
    }
  }
`;

export default GlobalStyles;
