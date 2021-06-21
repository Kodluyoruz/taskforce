import "./App.css";

import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
	"tr-TR": {
		title: "Merhaba Dünya",
		description: "{count} yeni mesajınız var",
	},
	"en-US": {
		title: "Hello World",
		description: "You have {count} new messages",
	},
};

function App() {
	const isLocale = localStorage.getItem("locale");
	const defaultLocale = isLocale ? isLocale : navigator.language;
	const [locale, setLocale] = useState(defaultLocale);

	useEffect(() => {
		localStorage.setItem("locale", locale);
	}, [locale]);

	return (
		<div className="App">
			<IntlProvider locale={locale} messages={messages[locale]}>
				<FormattedMessage id="title" />

				<p>
					<FormattedMessage id="description" values={{ count: 5 }} />
				</p>

				<br />
				<br />
				<button onClick={() => setLocale("tr-TR")}>TR</button>
				<button onClick={() => setLocale("en-US")}>EN</button>
			</IntlProvider>
		</div>
	);
}

export default App;
