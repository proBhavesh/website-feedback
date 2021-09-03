const Button = (props) => {
	return (
		<button className="px-4 py-2 rounded text-white bg-normalBlue font-sanstext-lg md:text-lg">
			{props.name}
		</button>
	);
};

export default Button;
// bg-gradient-to-br from-lightGray to-normalBlue