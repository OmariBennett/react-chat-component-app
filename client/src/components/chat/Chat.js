import React from 'react';

export default function Chat() {
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
}
