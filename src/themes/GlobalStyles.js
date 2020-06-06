import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background: ${({ theme }) => theme.background100};
    color: ${({ theme }) => theme.foreground100};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  textarea, select, input, button {
    outline: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    width: 90vw;
    background: ${({ theme }) => theme.background300};
    color: ${({ theme }) => theme.foreground100};
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.background50};

    :focus {
      border: 1px solid ${({ theme }) => theme.highlight100};
    }
  }
`

export default GlobalStyles
