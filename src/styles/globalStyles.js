import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: #171717;
		font-family: 'Euclid Circular A', sans-serif;
	}
`;

export default GlobalStyle;
