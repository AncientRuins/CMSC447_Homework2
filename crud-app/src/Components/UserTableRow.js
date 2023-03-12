import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

const UserTableRow = (props) => {
	const {_id, name, id, points} = props.obj;

	const deleteUser = () => {
		axios.delete("http://localhost:4000/users/delete-user/" + _id)
			.then((res) => {
				if (res.status === 200) {
					alert("User deleted successfully");
					window.location.reload();
				} else {
					Promise.reject();
				}
			})
			.catch((err) => alert("Something went wrong"));
	};

	return (
		<tr>
			<td>{name}</td>
			<td>{id}</td>
			<td>{points}</td>
			<td>
				<Button onClick={deleteUser} size="sm" variant="danger">
					Delete User
				</Button>
			</td>
		</tr>
	);
};

export default UserTableRow;