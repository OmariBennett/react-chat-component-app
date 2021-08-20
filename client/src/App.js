export default function App() {
	return (
		<div>
			{/* Login form component */}
			<section>
				<h1>Chat App</h1>
				<form onSubmit={(e) => e.preventDefault()}>
					<label for='name'>Name:</label>{' '}
					<input id='name' type='text' placeholder='Enter user name' />
					<label for='chatRoom'>Join a Chat Room</label>
					<select id='chatRoom' name='room'>
						<option value='' selected>
							Please choose
						</option>
						<option value='javascript'>JavaScript</option>
						<option value='css'>CSS</option>
						<option value='react'>React</option>
					</select>
					<input type='submit' value='Join' />
				</form>
			</section>
			{/* Login form component */}
			<section>
				<header>
					<span>logo placeholder</span>
					<h2>JavaScript room</h2>
					<button>close button placeholder</button>
				</header>
				<main>
					<ul>
						<li>John: message item 1</li>
						<li>Jane: message item 1</li>
						<li>John: message item 2</li>
						<li>Jane: message item 2</li>
						<li>John: message item 3</li>
						<li>Jane: message item 3</li>
					</ul>

					<form onSubmit={(e) => e.preventDefault()}>
						<label for='message'>Message:</label>
						<input id='message' type='text' placeholder='Enter message' />
						<input type='submit' value='Submit' />
					</form>
				</main>
			</section>
		</div>
	);
}
