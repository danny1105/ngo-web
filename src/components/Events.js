import React from "react";
import Event from "../data/events.json";

function Events() {
	return Event.events.map((event, index) => {
		return (
			<React.Fragment key={index}>
				<div className="name" style={{ padding: "15px" }}>
					Name: {event.name}
				</div>
				<div className="description">
					Description: {event.description}
				</div>
				<div className="date">Date of Event: {event.date}</div>
				<div className="organizer">Organizer: {event.organizer}</div>
				<div className="fundedBy">
					Funded By:
					{event.funding ? event.fundedBy : " No Funding Yet!!!"}
				</div>
			</React.Fragment>
		);
	});
}

export default Events;
