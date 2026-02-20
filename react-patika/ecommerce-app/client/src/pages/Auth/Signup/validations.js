import * as yup from "yup";

const validations = yup.object().shape({
	email: yup
		.string()
		.email("Gerçerli bir email girin.")
		.required("Zorunlu alan."),
	password: yup
		.string()
		.min(5, "Parolanız en az 5 karakter olmalıdır")
		.required(),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref("password")], "Parolalar uyuşmuyor.")
		.required(),
});

export default validations;
