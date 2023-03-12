import React from "react";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {FormGroup, FormControl, Button} from "react-bootstrap";

const UserForm = (props) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Required"),
		id: Yup.number().positive("Invalid Id").integer("Invalid Id").required("Required"),
		points: Yup.number().positive("Invalid Points").integer("Invalid Points").required("Required"),
	});

	console.log(props);

	return (
		<div className="form-wrapper">
			<Formik {...props} validationSchema={validationSchema}>
				<Form>
					<FormGroup>
						<p>Name: </p>
						<Field name="name" type="text" className="form-control" />
						<ErrorMessage name="name" className="d-block invalid-feedback" component="span" />
					</FormGroup>
					<FormGroup>
						<p>Id: </p>
						<Field name="id" type="number" className="form-control" />
						<ErrorMessage name="id" className="d-block invalid-feedback" component="span" />
					</FormGroup>
					<FormGroup>
						<p>Points: </p>
						<Field name="points" type="number" className="form-control" />
						<ErrorMessage name="points" className="d-block invalid-feedback" component="span" />
					</FormGroup>
					<Button variant="danger" size="lg" block="block" type="submit">
						{props.children}
					</Button>
				</Form>
			</Formik>
		</div>
	);
};

export default UserForm;