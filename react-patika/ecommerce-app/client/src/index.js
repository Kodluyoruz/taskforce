import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./reset.css";
import "antd/dist/antd.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// contexts
import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";

import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<ChakraProvider>
			<AuthProvider>
				<BasketProvider>
					<App />
				</BasketProvider>
			</AuthProvider>
		</ChakraProvider>

		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
