import { useState, useEffect } from "react";

import "./styles.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
	const [contacts, setContacts] = useState([
		{
			fullname: "Mehmet",
			phone_number: "123123",
		},
		{
			fullname: "Ayşe",
			phone_number: "456457",
		},
		{
			fullname: "Nazlı",
			phone_number: "987659",
		},
	]);

	useEffect(() => {
		console.log(contacts);
	}, [contacts]);

	return (
		<div id="container">
			<h1>Contacts</h1>
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
}

export default Contacts;
