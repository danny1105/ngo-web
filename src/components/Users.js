/* jshint expr: true */

import React from "react";
import Stakeholders from "../data/stakeholders.json";

function Users() {
	return Stakeholders.users.map((user, index) => {
		return (
			<React.Fragment key={index}>
				<div className="users" style={{ padding: "15px" }}>
					<div className="name">Name: {user.name}</div>
					<div className="age">Age: {user.age}</div>
					<div className="members">
						{user.memberType !== "Individual"
							? user.members
							: "Individual"}
					</div>
					<div className="associatedWith">Location: {user.state}</div>
				</div>
			</React.Fragment>
		);
	});
}

export default Users;
