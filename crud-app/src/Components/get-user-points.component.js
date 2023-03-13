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

	};

	const check = () => {
		if (users.length == 0) {
			return;
		} else if (users.msg.length == 0) {
			alert("No one with this name exists");
			return;
		} else {
			var i = 0;
			var l = [];
			while (i < users.msg.length) {
				const user = users.msg[i];
				i ++;
				l.push(
					<tr key={""+i}>
						<td>{user.name}</td>
						<td>{user.points}</td>
						
					</tr>
				);
			}

			return l;
		}
	};

	return (
		<div className="encomp">
			<GetPointsForm initialValues={formValues}
			onSubmit={onSubmit}
			enableReinitialize>
			Get User Points
			</GetPointsForm>

			<div className="table-wrapper">
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Name</th>
							<th>Points</th>
						</tr>
					</thead>
					<tbody>{check()}</tbody>
				</Table>
			</div>
		</div>
	);
};

export default GetUserPoints;