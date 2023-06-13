import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "bootstrap/dist/css/bootstrap.min.css";
// import './Modal.css'
// import { ModalTitle } from "react-bootstrap";
import { useState } from "react";
import { RegisterModel } from "../../model/RegisterModel";

const ModalRegister = (props: any) => {
	const [enteredUserName, setEnterdedUserName] = useState("");
	const [enteredEmail, setEnterdedEmail] = useState("");
	const [enteredPassword, setEnterdedPassword] = useState("");

	const userNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnterdedUserName(event.target.value);
	};
	const userEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnterdedEmail(event.target.value);
	};
	const userPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnterdedPassword(event.target.value);
	};
	const registerUserHendler = () => {
		const user: RegisterModel = {
			userName: enteredUserName,
			email: enteredEmail,
			password: enteredPassword,
		};
		console.log(user);
		setEnterdedUserName("");
		setEnterdedEmail("");
		setEnterdedPassword("");
	};

	return (
		<Modal
			{...props}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					<h1 className="text-center">FilmValut</h1>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Register</h4>
				<form className="d-flex flex-column mt-3">
					<label htmlFor="username">Username</label>
					<input
						style={{ backgroundColor: enteredUserName.length < 4 ? "red" : "" }}
						id="username"
						value={enteredUserName}
						type="text"
						onChange={userNameHandler}></input>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						value={enteredEmail}
						type="email"
						onChange={userEmailHandler}></input>
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						value={enteredPassword}
						onChange={userPasswordHandler}
					/>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={registerUserHendler}>Send</Button>
			</Modal.Footer>
		</Modal>
	);
};
export default ModalRegister;
