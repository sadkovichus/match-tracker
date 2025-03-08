import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

		font-family: Inter;
  }

	html {
		display: flex;
		width: 100%;
		height:100%;
	}

  body {
    background-color: ${(props) => props.theme.colors.background};
		color: ${(props) => props.theme.colors.color};
		display: flex;
		flex: 1;

  }

	button {
		border: none;
		cursor: pointer;
	}
`

export default GlobalStyles