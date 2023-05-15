import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		height: 100vh;
		background-color: #171717;
		font-family: "Satoshi", sans-serif;	
		background: rgb(15,25,42);
		background: -moz-linear-gradient(37deg, rgba(15,25,42,1) 0%, rgba(23,23,23,1) 25%, rgba(23,23,23,1) 61%, rgba(33,26,47,1) 100%);
		background: -webkit-linear-gradient(37deg, rgba(15,25,42,1) 0%, rgba(23,23,23,1) 25%, rgba(23,23,23,1) 61%, rgba(33,26,47,1) 100%);
		background: linear-gradient(37deg, rgba(15,25,42,1) 0%, rgba(23,23,23,1) 25%, rgba(23,23,23,1) 61%, rgba(33,26,47,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0f192a",endColorstr="#211a2f",GradientType=1); 
	}

	button, a, input {
		font-family: "Satoshi", sans-serif;		
	}
`;

export default GlobalStyle;
