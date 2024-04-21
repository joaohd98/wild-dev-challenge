import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  // ========== RESET START ========== //
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-family: var(--tungsten);
      font-weight: 400;
      color: ${({ theme }) => theme.colors.white};
      vertical-align: baseline;
  }
  
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  // ========== RESET END ========== //

  html, body, main {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.blackCharcoal};
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
`;