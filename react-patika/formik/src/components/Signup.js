import { useFormik } from "formik";

import validationSchema from "./validations";

function Signup() {
	const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
		useFormik({
			initialValues: {
				email: "",
				password: "",
				passwordConfirm: "",
			},
			onSubmit: (values) => {
				console.log(values);
			},
			validationSchema,
		});

	return (
		<div>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<label>Email</label>
				<input
					name="email"
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.email && touched.email && (
					<div className="error">{errors.email}</div>
				)}

				<br />
				<br />

				<label>Password</label>
				<input
					name="password"
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.password && touched.password && (
					<div className="error">{errors.password}</div>
				)}

				<br />
				<br />

				<label>Confirm Password</label>
				<input
					name="passwordConfirm"
					value={values.passwordConfirm}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.passwordConfirm && touched.passwordConfirm && (
					<div className="error">{errors.passwordConfirm}</div>
				)}

				<br />
				<br />

				<button type="submit">Submit</button>

				<br />
				<br />

				<code>{JSON.stringify(values)}</code>
			</form>
		</div>
	);
}

export default Signup;
