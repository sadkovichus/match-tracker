import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	html {
		display: flex;
		width: 100%;
		height:100%;
	}

  body {
    background-color: ${(props) => props.theme.colors.background};
		color: ${(props) => props.theme.colors.color};
		flex: 1;
		display: flex;

		font-family: Inter;
  }
`

export default GlobalStyles