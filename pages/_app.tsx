import "@/styles/globals.css";
import type { AppProps } from "next/app";

// biome-ignore lint/style/useNamingConvention: <explanation>
const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<div>
			ALLAHU AKBAR!
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
