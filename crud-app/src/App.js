import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUser from "./Components/create-user.component";
import EditUser from "./Components/edit-user.component";
import UserList from "./Components/user-list.component";
import SearchUser from "./Components/search-user.component";
import GetUserPoints from "./Components/get-user-points.component";

const App = () => {
return (
	<Router>
		<div className="App">
			<header className="App-header">
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand>
							<Link to={"/user-list"} className="nav-link">
								CRUD APP
							</Link>
						</Navbar.Brand>

						<Nav className="justify-content-end">
							<Nav>
								<Link to={"/create-user"} className="nav-link">
									Create User
								</Link>
							</Nav>

							<Nav>
								<Link to={"/search-user"} className="nav-link">
									Search User
								</Link>
							</Nav>

							<Nav>
								<Link to={"/get-user-points"} className="nav-link">
									Retrieve User Points
								</Link>
							</Nav>

							<Nav>
								<Link to={"/user-list"} className="nav-link">
									User List
								</Link>
							</Nav>
						</Nav>
					</Container>
				</Navbar>
			</header>

			<Container>
				<Row>
					<Col md={12}>
						<div className="wrapper">
							<Routes>
								<Route exact path="/" element={<UserList />} />
								<Route path="/create-user" element={<CreateUser />} />
								<Route path="/edit-user/:id" element={<EditUser />} />
								<Route path="/user-list" element={<UserList />} />
								<Route path="/search-user" element={<SearchUser />} />
								<Route path="/get-user-points" element={<GetUserPoints />} />
							</Routes>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	</Router>
);
};

export default App;
