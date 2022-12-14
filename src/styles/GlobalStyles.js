import { createGlobalStyle } from 'styled-components';

export const GlobalStyleComponent = createGlobalStyle`
  @font-face {
font-family: "Montserrat";
src: local("Montserrat"),
 url("../fonts/Montserrat/Montserrat-VariableFont_wght.ttf") format("truetype");
font-weight: bold;
}

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul,ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
      text-decoration:none;
  }
  .visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;
