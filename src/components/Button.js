const Button = (props) => {
	return (
		<button className="px-4 py-2 rounded text-lg text-white bg-normalBlue font-sans">
			{props.name}
		</button>
	);
};

export default Button;
// bg-gradient-to-br from-lightGray to-normalBlue