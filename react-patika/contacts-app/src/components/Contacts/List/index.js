import { useState } from "react";

function List({ contacts }) {
	const [filterText, setFilterText] = useState("");

	const filtered = contacts.filter((item) => {
		return Object.keys(item).some((key) =>
			item[key]
				.toString()
				.toLowerCase()
				.includes(filterText.toLocaleLowerCase())
		);
	});

	return (
		<div>
			<input
				placeholder="Filter contact"
				value={filterText}
				onChange={(e) => setFilterText(e.target.value)}
			/>

			<ul className="list">
				{filtered.map((contact, i) => (
					<li key={i}>
						<span>{contact.fullname}</span>
						<span>{contact.phone_number}</span>
					</li>
				))}
			</ul>

			<p>Total contacts ({filtered.length})</p>
		</div>
	);
}

export default List;
