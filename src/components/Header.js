import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { MdStar } from "react-icons/md";

import reviewImage from "../assets/oliver.jpg";

const Header = () => {
	return (
		<>
			<div className="pt-12 px-4 bg-lightBlue mx-auto h-screen font-sans text-center md:text-left pt-16">
				<div className="grid grid-rows-2 m-auto md:grid-cols-2 grid-rows-none max-w-6xl  pt-24 gap-8">
					{/*left banner*/}
					<div className="flex flex-col content-between flex-wrap items-center md:items-start">
						<h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-normalBlue to-lightGray leading-extra-loose font-bold mb-6">
							Get feedback for your <br />
							landing page
						</h1>
						<p className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-normalBlue to-lightGray">
							We provide you detailed feedback for your landing
							page UI/UX and help you improving your conversion
							rate to upto 8%
						</p>
						<div className="mt-12 mb-0">
							<Link href="/getStarted">
								<a>
									<Button name="Get Started" />
								</a>
							</Link>
						</div>
						<div className="flex flex-row mt-6 py-3 items-center">
							<Image
								src={reviewImage}
								alt="Reviewer's Image"
								width="80"
								height="80"
								className="rounded-full"
							/>
							<div className="ml-3">
								<div className="flex">
									<MdStar size={25} color="#6C63FB" />
									<MdStar size={25} color="#6C63FB" />
									<MdStar size={25} color="#6C63FB" />
									<MdStar size={25} color="#6C63FB" />
									<MdStar size={25} color="#6C63FB" />
								</div>
								<h2 className="text-base">
									Oliver, Gigabyte Games
								</h2>
							</div>
						</div>
					</div>
					{/*right banner*/}
					<div className="mix-blend-darken">
						<video autoPlay loop muted>
							<source
								src={require("../assets/edit-live-website.mp4")}
							/>
						</video>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
