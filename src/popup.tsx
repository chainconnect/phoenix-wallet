import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./components/GlobalStyles";

if (window.global === undefined) {
	window.global = window;
}

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
