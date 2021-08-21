import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;
let ENDPOINT = 'localhost:5000';

export default function Chat({ userName }) {
	const [message, setMessage] = useState('');

	useEffect(() => {
		socket = io(ENDPOINT, {
			transports: ['websocket', 'polling', 'flashsocket'],
		});

		socket.on('connect', () => {
			console.log(socket);
		});

		return () => {
			socket.on('disconnect', () => {
				console.log('disconnect for the client side...'); // undefined
			});
		};
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		setMessage('');
	};

	return (
		<React.Fragment>
			<main>
				<h2>{userName}</h2>
				<ul>
					<li>John: message item 1</li>
					<li>Jane: message item 1</li>
					<li>John: message item 2</li>
					<li>Jane: message item 2</li>
					<li>John: message item 3</li>
					<li>Jane: message item 3</li>
				</ul>

				<form onSubmit={handleSubmit}>
					<label for='message'>Message:</label>
					<input
						id='message'
						type='text'
						value={message}
						placeholder='Enter message'
						onChange={(e) => setMessage(e.target.value)}
					/>
					<input type='submit' value='Submit' />
				</form>
			</main>
		</React.Fragment>
	);
}
