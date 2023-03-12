import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Table} from "react-bootstrap";
import SearchForm from "./SearchForm";
import UserTableRow from "./UserTableRow";

const SearchUser = () => {
	const [formValues, setFormValues] = useState({ id: '' });
	const[users, setUsers] = useState([]);

	console.log(users);

	const onSubmit = userObject => {
		axios.get("http://localhost:4000/users/" + userObject.id)
			.then(({data}) => {
				console.log(data);
				setUsers(data);
				console.log(users);
			}).catch((err) => console.log(err));
	};

	const DataTable = () => {
		if (users.length == 0) {
			alert("No one with this id exists");
			return;
		} else if (users.msg.length == 0) {
			alert("No one with this id exists");
			return;
		} else {
			return <UserTableRow obj={users.msg[0]} />
		}
	};

	return (
		<div className="encomp">
			<SearchForm initialValues={formValues}
			onSubmit={onSubmit}
			enableReinitialize>
			Search User
			</SearchForm>

			<div className="table-wrapper">
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Name</th>
							<th>Id</th>
							<th>Points</th>
							<th>Modifications</th>
						</tr>
					</thead>
					<tbody>{DataTable()}</tbody>
				</Table>
			</div>
		</div>
	);
};

export default SearchUser;