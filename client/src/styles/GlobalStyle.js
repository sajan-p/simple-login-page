import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  * {
    font-family: "Inter", "Arial", "sans-serif";
  }

  h1 {
    font-weight: 700;
    font-size: 4rem;
    letter-spacing: -0.05em;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2rem;
  }

  h1, h2, h3, h4 {
    font-family: "Eudoxus Sans", "Helvetica", "Arial", "sans-serif";    
  }

  p {
    font-size: 1.125rem;
  }

  input {
    height: 1.5rem;
    padding: 0.4rem 1rem;
    border-radius: 5px;
    border: 0.5px solid lightgray;

    &:focus-visible {
      outline: none;
      border: 0.5px solid gray;
      box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px 0px;
    }
  }


`;

export default GlobalStyle;
