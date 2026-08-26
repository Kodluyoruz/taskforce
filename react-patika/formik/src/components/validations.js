import * as yup from "yup";

const validations = yup.object().shape({
	email: yup
		.string()
		.email("Geçerli bir email girin.")
		.required("Zorunlu alan."),
	password: yup
		.string()
		.min(5, "Parolanız en az 5 karakter olmalıdır.")
		.required("Zorunlu alan."),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref("password")], "Parolalar uyuşmuyor")
		.required("Zorunlu alan."),
});

export default validations;
