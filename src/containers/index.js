import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "../components/Landing";
import About from "../components/About";
import Users from "../components/Users";
import Events from "../components/Events";

function Main() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
						<li>
							<Link to="/events">Events</Link>
						</li>
					</ul>
				</nav>

				<Route path="/" exact component={Index} />
				<Route path="/about" component={About} />
				<Route path="/users" component={Users} />
				<Route path="/events" component={Events} />
			</div>
		</Router>
	);
}

export default Main;
