import React, {useState, useEffect} from "react";
import axios from "axios";
import UserForm from "./UserForm";

const EditUser = (props) => {
	const [formValues, setFormValues] = useState({
		name: "",
		id: "",
		points: "",
	});

	const onSubmit = (userObject) => {
		axios.put("http://localhost:400/users/update-user/" + props.match.params.id, userObject)
			.then((res) => {
				if (res.status === 200) {
					alert("User successfully updated");
					props.history.push("/user-list");
				} else {
					Promise.reject();
				}
			}).catch((err) => alert("Something went wrong"));
	};

	useEffect(() => {
		axios.get("http://localhost:400/users/update-user/" + props.match.params.id)
			.then((res) => {
				const {name, id, points} = res.data;
				setFormValues({name, id, points});
			}).catch((err) => console.log(err));
	}, []);

	return (
		<UserForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
			Update User
		</UserForm>
	);
};

export default EditUser;