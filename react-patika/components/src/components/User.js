import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
	if (!isLoggedIn) {
		return <div>Giriş yapmadınız.</div>;
	}

	return (
		<>
			<h1>{`${name} ${surname} (${age})`}</h1>
			{address.title} {address.zip}
			<br />
			<br />
			{friends &&
				friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
		</>
	);
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	surname: PropTypes.string.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	friends: PropTypes.array,
	address: PropTypes.shape({
		title: PropTypes.string,
		zip: PropTypes.number,
	}),
};

User.defaultProps = {
	name: "İsimsiz",
	isLoggedIn: false,
};

export default User;
