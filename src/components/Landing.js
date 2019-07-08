import React, { Component } from "react";
import fs from "fs";

import Users from "../data/stakeholders.json";

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			memberType: "",
			age: null,
			members: "",
			state: ""
		};
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeMemberType = this.onChangeMemberType.bind(this);
		this.onChangeAge = this.onChangeAge.bind(this);
		this.onChangeMembers = this.onChangeMembers.bind(this);
		this.onChangeState = this.onChangeState.bind(this);
		this.onSubmitUser = this.onSubmitUser.bind(this);
	}

	onChangeAge(e) {
		e.preventDefault();
		this.setState({
			age: e.target.value
		});
	}

	onChangeName(e) {
		e.preventDefault();
		this.setState({
			name: e.target.value
		});
	}

	onChangeMemberType(e) {
		e.preventDefault();
		this.setState({
			memberType: e.target.value
		});
	}

	onChangeMembers(e) {
		e.preventDefault();
		this.setState({
			members: e.target.value
		});
	}

	onChangeState(e) {
		e.preventDefault();
		this.setState({
			state: e.target.value
		});
	}

	onSubmitUser(e) {
		e.preventDefault();

		console.log(`Form submitted:`);

		const payload = {
			name: this.state.userName,
			memberType: this.state.memberType,
			age: this.state.age,
			members: this.state.members,
			state: this.state.state
		};

		// 	fs.readFile("../data/stakeholders.json", (err, data) => {
		// 		console.log(data);
		// 	});
		// 	// fs.appendFile(Users, JSON.stringify(payload), "utf8", function(err) {
		// 	// 	if (err) throw err;
		// 	// 	console.log("File saved.");
		// 	// });
	}

	render() {
		return (
			// <div style={{ marginTop: 10 }}>
			// 	<h3>Create New User</h3>
			// 	<form onSubmit={this.onSubmitUser}>
			// 		<div className="form-group">
			// 			<label>Name: </label>
			// 			<input
			// 				type="text"
			// 				className="form-control"
			// 				value={this.state.username}
			// 				onChange={this.onChangeName}
			// 			/>
			// 		</div>
			// 		<div className="form-group">
			// 			<label>Member Type: </label>
			// 			<input
			// 				type="text"
			// 				className="form-control"
			// 				value={this.state.memberType}
			// 				onChange={this.onChangeMemberType}
			// 			/>
			// 		</div>
			// 		<div className="form-group">
			// 			<label>Age: </label>
			// 			<input
			// 				type="text"
			// 				className="form-control"
			// 				value={this.state.age}
			// 				onChange={this.onChangeAge}
			// 			/>
			// 		</div>
			// 		<div className="form-group">
			// 			<label>Members: </label>
			// 			<input
			// 				type="text"
			// 				className="form-control"
			// 				value={this.state.members}
			// 				onChange={this.onChangeMembers}
			// 			/>
			// 		</div>
			// 		<div className="form-group">
			// 			<label>State: </label>
			// 			<input
			// 				type="text"
			// 				className="form-control"
			// 				value={this.state.state}
			// 				onChange={this.onChangeState}
			// 			/>
			// 		</div>
			// 		<div className="form-group">
			// 			<input
			// 				type="submit"
			// 				value="Create User"
			// 				className="btn btn-primary"
			// 			/>
			// 		</div>
			// 	</form>
			// </div>
			<div className="index" style={{ backgroundColor: "black" }}>
				<h3 style={{ textAlign: "center", backgroundColor: "white" }}>
					NGO
				</h3>
			</div>
		);
	}
}
