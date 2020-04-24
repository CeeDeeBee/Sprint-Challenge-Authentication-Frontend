import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Jokes = () => {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get("/api/jokes")
			.then((res) => setJokes(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="jokes-page">
			<div className="jokes-list">
				<h1>Jokes</h1>
				{jokes.map(({ joke, id }) => (
					<div key={id} className="joke">
						{joke}
					</div>
				))}
			</div>
		</div>
	);
};

export default Jokes;
