import Meta from "../components/Meta";
import Form from "../components/Form";

import { Navbar } from "../components/Navbar.js";
import Footer from "../components/Footer";
const getStarted = () => {
	return (
		<>
			<Meta title="Get Started" />
			<Navbar />
			<Form />
			<Footer />
		</>
	);
};

export default getStarted;
