import React, { useState } from 'react';
import Chat from './components/chat/Chat';

export default function App() {
	const [userName, setUserName] = useState('');
	const [chatRoom, setChatRoom] = useState('');
	let [toogleComponents, setToogleComponents] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (userName !== '' && chatRoom !== '') {
			toogleComponents = setToogleComponents(true);
		}
	};

	const handleCloseChat = () => {
		setToogleComponents(false);
		setUserName('');
		setChatRoom('');
	};

	return (
		<section>
			{toogleComponents ? (
				<React.Fragment>
					{/* Chat component */}
					<header>
						<h1>Header Component</h1>
						<h2>{chatRoom} Chat Room</h2>
						<input type='button' value='Close' onClick={handleCloseChat} />
					</header>
					<Chat userName={userName} />
				</React.Fragment>
			) : (
				<React.Fragment>
					{/* Login form component */}
					<h1>Chat App</h1>
					<form onSubmit={handleSubmit}>
						<label for='name'>Name:</label>{' '}
						<input
							id='name'
							type='text'
							value={userName}
							placeholder='Enter user name'
							onChange={(e) => setUserName(e.target.value)}
						/>
						<label>
							Join a Chat Room
							<select
								id='chatRoom'
								name='room'
								value={chatRoom}
								onChange={(e) => setChatRoom(e.target.value)}>
								<option value='' selected>
									Please choose
								</option>
								<option value='javascript'>JavaScript</option>
								<option value='css'>CSS</option>
								<option value='react'>React</option>
							</select>
						</label>
						<input type='submit' value='Join' />
					</form>
				</React.Fragment>
			)}
		</section>
	);
}
