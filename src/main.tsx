import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./components/scrollToTop/scrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
