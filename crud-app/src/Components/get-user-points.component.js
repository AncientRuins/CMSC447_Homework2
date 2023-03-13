import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Table} from "react-bootstrap";
import GetPointsForm from "./GetPointsForm";
import UserTableRow from "./UserTableRow";

const GetUserPoints = () => {
	const [formValues, setFormValues] = useState({ name: '' });
	const[users, setUsers] = useState([]);

	const onSubmit = userObject => {
		axios.get("http://localhost:4000/users/getpoints/" + userObject.name)
			.then(({data}) => {
				setUsers(data);
			}).catch((err) => console.log(err));

		check();
	};

	console.log(users);

	const check = () => {
		if (users.length == 0) {
			alert("No one with this name exists");
			return;
		} else if (users.msg.length == 0) {
			alert("No one with this name exists");
			return;
		} else {
			var i = 0;
			while (i < users.msg.length) {
				const user = users.msg[i];
				alert("The person " + user.name + " has " + user.points + " points.");
				i ++;
			}
		}
	};

	return (
		<div className="encomp">
			<div className="pointLabel"> 
				When the button is pressed, an alert pops up with the users points.
				Thus, popups need to be enabled.
			</div>
			<GetPointsForm initialValues={formValues}
			onSubmit={onSubmit}
			enableReinitialize>
			Get User Points
			</GetPointsForm>
		</div>
	);
};

export default GetUserPoints;