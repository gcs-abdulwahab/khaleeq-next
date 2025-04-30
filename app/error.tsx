"use client";

//  on reset  it should console  some message and reload the page
interface ErrorProps {
	error: Error;
	reset: () => void;
}
// Error component to handle errors in the app
const Error = ({ error, reset }: ErrorProps) => {
	return (
		<div>
			<h1>Something went wrong</h1>
			<p>We are sorry for the inconvenience</p>
			<p>Please try again later</p>
			{/* show error message */}

			<p>{error.message}</p>
			<button onClick={() => {
				console.log('reset is clicked')
				reset();
			}}>Try Again</button>
		</div>
	);
};


export default Error;
