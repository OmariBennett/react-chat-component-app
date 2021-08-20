export default function App() {
	return (
		<div>
			{/* Login form component */}
			<section>
				<h1>Chat App</h1>
				<form onSubmit={(e) => e.preventDefault()}>
					<label for='name'>Name:</label>{' '}
					<input id='name' type='text' value='' placeholder='Enter user name' />
					<label for='chatRoom'>Join a Chat Room</label>
					<input id='chatRoom' type='submit' value='Join' />
				</form>
			</section>
			{/* Login form component */}
			<section>
				<header>
					<span>logo placeholder</span>
					<button>close button placeholder</button>
				</header>
			</section>
		</div>
	);
}
