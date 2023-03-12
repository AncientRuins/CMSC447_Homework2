import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserForm from "./UserForm";

const CreateUser = () => {
	const [formValues, setFormValues] =
		useState({ name: '', id: '', points: '' });

	const onSubmit = userObject => {
		axios.post('http://localhost:4000/users/create-user', userObject)
			.then(res => {
				if (res.status === 200) {
					alert('User successfully created');
				}
				else {
					Promise.reject();
				}
			})
			.catch(err => alert('Something went wrong'));
	};

	return (
		<UserForm initialValues={formValues}
		onSubmit={onSubmit}
		enableReinitialize>
		Create User
		</UserForm>
	);
};

export default CreateUser;