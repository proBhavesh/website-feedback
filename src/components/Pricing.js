import Link from "next/link";
import Image from "next/image";
import { MdCheckBox } from "react-icons/md";
import Button from "./Button";

import teamBhavesh from "../assets/teamBhavesh.jpg";

const Team = () => {
	return (
		<>
			<section className="w-auto p-12 rounded m-auto items-center min-h-cl">
				<div className="text-5xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-br from-normalBlue to-lightGray border-b mb-8 text-center pb-4">
					<h1>Pricing</h1>
				</div>
				<div className="flex flex-col shadow-md bg-white px-20 py-12 items-center text-center rounded-xl w-full">
					<div className="m-4">
						<h1 className="text-4xl font-semibold text-normalBlue">
							Gold Plan
						</h1>
						<p className="text-lg text-normalBlue">
							For your Cute landing page
						</p>
					</div>
					<div>
						<ul>
							<li className="flex flex-row text-base pt-4">
								<MdCheckBox
									color="#6C63FB"
									size={25}
									className="mr-4"
								/>
								Full UI report
							</li>
							<li className="flex flex-row text-base pt-4">
								<MdCheckBox
									color="#6C63FB"
									size={25}
									className="mr-4"
								/>
								Full UX report
							</li>
							<li className="flex flex-row text-base pt-4">
								<MdCheckBox
									color="#6C63FB"
									size={25}
									className="mr-4"
								/>
								Video Call Discussion
							</li>
							<li className="flex flex-row text-base pt-4">
								<MdCheckBox
									color="#6C63FB"
									size={25}
									className="mr-4"
								/>
								Future Updated
							</li>
						</ul>
					</div>
					<div>
						<h1 className="text-3xl py-5 text-normalBlue">
							$50
							<span className="text-base text-black">/page</span>
						</h1>
					</div>
					<Link href="/getStarted">
						<a>
							<Button name="Get Started" />
						</a>
					</Link>
				</div>
			</section>
		</>
	);
};

export default Team;
