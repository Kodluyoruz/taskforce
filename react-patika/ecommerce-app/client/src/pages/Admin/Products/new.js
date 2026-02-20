import React from "react";

import { postProduct } from "../../../api";
import { useMutation, useQueryClient } from "react-query";

import {
	Text,
	Box,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
} from "@chakra-ui/react";
import { message } from "antd";

import { Formik, FieldArray } from "formik";
import validationSchema from "./validations";

function NewProduct() {
	const queryClient = useQueryClient();
	const newProductMutation = useMutation(postProduct, {
		onSuccess: () => queryClient.invalidateQueries("products"),
	});

	const handleSubmit = async (values, bag) => {
		console.log(values);
		message.loading({ content: "Loading...", key: "product_update" });

		// values.photos = JSON.stringify(values.photos);

		const newValues = {
			...values,
			photos: JSON.stringify(values.photos),
		};

		newProductMutation.mutate(newValues, {
			onSuccess: () => {
				console.log("success");

				message.success({
					content: "The product successfully updated",
					key: "product_update",
					duration: 2,
				});
			},
		});
	};

	return (
		<div>
			<Text fontSize="2xl">New Product</Text>

			<Formik
				initialValues={{
					title: "Test",
					description: "Lorem ipsum",
					price: "100",
					photos: [],
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({
					handleSubmit,
					errors,
					touched,
					handleChange,
					handleBlur,
					values,
					isSubmitting,
				}) => (
					<>
						<Box>
							<Box my="5" textAlign="left">
								<form onSubmit={handleSubmit}>
									<FormControl>
										<FormLabel>Title</FormLabel>
										<Input
											name="title"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.title}
											disabled={isSubmitting}
											isInvalid={touched.title && errors.title}
										/>

										{touched.title && errors.title && (
											<Text color="red.500">{errors.title}</Text>
										)}
									</FormControl>
									<FormControl mt="4">
										<FormLabel>Description</FormLabel>
										<Textarea
											name="description"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.description}
											disabled={isSubmitting}
											isInvalid={touched.description && errors.description}
										/>
										{touched.description && errors.description && (
											<Text color="red.500">{errors.description}</Text>
										)}
									</FormControl>
									<FormControl mt="4">
										<FormLabel>Price</FormLabel>
										<Input
											name="price"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.price}
											disabled={isSubmitting}
											isInvalid={touched.price && errors.price}
										/>
										{touched.price && errors.price && (
											<Text color="red.500">{errors.price}</Text>
										)}
									</FormControl>

									<FormControl mt="4">
										<FormLabel>Photos</FormLabel>
										<FieldArray
											name="photos"
											render={(arrayHelpers) => (
												<div>
													{values.photos &&
														values.photos.map((photo, index) => (
															<div key={index}>
																<Input
																	name={`photos.${index}`}
																	value={photo}
																	disabled={isSubmitting}
																	onChange={handleChange}
																	width="3xl"
																/>

																<Button
																	ml="4"
																	type="button"
																	colorScheme="red"
																	onClick={() => arrayHelpers.remove(index)}
																>
																	Remove
																</Button>
															</div>
														))}

													<Button mt="5" onClick={() => arrayHelpers.push("")}>
														Add a Photo
													</Button>
												</div>
											)}
										/>
									</FormControl>

									<Button
										mt={4}
										width="full"
										type="submit"
										isLoading={isSubmitting}
									>
										Save
									</Button>
								</form>
							</Box>
						</Box>
					</>
				)}
			</Formik>
		</div>
	);
}

export default NewProduct;
