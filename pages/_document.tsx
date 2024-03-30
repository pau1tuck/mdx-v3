import "@/styles/globals.css"; // Make sure this path points to your global CSS
// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class AppRoot extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppRoot;
