import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const LogInModal = (props: any) => {
	return (
		<>
			<Modal {...props} dialogClassName="modal-30w">
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">
						FilmValut
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<form className="d-flex flex-column mt-3">
                <label htmlFor="username">Username</label>
					<input 
						
						id="username"
						// value={enteredUserName}
						type="text"
						></input>
                        <label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
					
				
					/>
                </form>
                <Button>Enter</Button>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default LogInModal;
