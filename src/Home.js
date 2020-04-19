import React from "react";

export function Home() {
	return (
		<div>
			<h2>Home</h2>
			<h2>Allan startcode test</h2>
			<p>I used the startcode and followed the instructions to get here</p>
			<p>
				Make sure to follow both instructions for the frontend and the backend
				:)
			</p>

			<p>
				Link to backend github:{" "}
				<a href="https://github.com/Gold-ish/StartCode_CA3_Backend">
					Backend setup
				</a>
			</p>
			<p>
				Link to frontend github:{" "}
				<a href="https://github.com/Gold-ish/StartCode_CA3_Frontend">
					Frontend setup
				</a>
			</p>
			<br />
			<p>
				To login as user or admin, use the following usernames and password:
			</p>
			<p>Username: admin, password: test1</p>
			<p>Username: user1, password: test123</p>
			<p>Username: user2, password: test123</p>
			<p>Username: user3, password: test123</p>

			<h2>Reflections on using the startcode</h2>
			<p>using the startcode made it easy to get a project up and running with security and continous integration.<br/>
				th code is easily deployed and tested with travis and serves its purpose well. <br/>There is alot of template code/
				start code that might not be usefull to most projects so there is alot of cleanup.<br/> The startcode still predicate that you have
				some idea of how JPA, java rest, and react works.<br/> The startguide is written with this assumption of knowledge.<br/>
				Improvements that could be incorporated would be pictures or video however into the readme file.<br/>
				I used the startcode and followed the instructions to get here</p>
			
		</div>
	);
}
