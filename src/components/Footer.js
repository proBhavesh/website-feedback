import Link from "next/link";
import Button from "./Button";

const Footer = () => {
	return (
		<>
			<footer className="text-lg text-center flex flex-col my-12 py-8 flex-wrap justify-evenly items-center border-t md:flex-row">
				<div className="sm:w-full md:w-1/6">
					<span>Team</span>
				</div>
				<div className="sm:w-1/2 md:w-1/4">
					<h6 className="">About</h6>
				</div>
				<div className="">
					<h6 className="">Free Resources</h6>
				</div>
				<div className="">
						<Link href="/getStarted">
							<a>
								<Button name="Get Started" />
							</a>
						</Link>
				</div>
				
			</footer>
			{/*<p>All Rights Reserved&#174; 2021 - &#169;</p>*/}
		</>
	);
};

export default Footer;
