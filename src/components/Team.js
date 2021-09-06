import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

import teamBhavesh from "../assets/teamBhavesh.jpg";

const Team = () => {
	return (
		<>
			<section className="max-w-lg p-12 h-auto rounded m-auto items-center">
				<div className="text-5xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-br from-normalBlue to-lightGray border-b mb-8 text-center pb-4">
					<h1>Team</h1>
				</div>
				<div className="flex flex-col border bg-white px-20 py-12 items-center rounded-xl hover:shadow-lg hover:border-none">
					<div className="w-8/12 p-6 rounded-xl">
						<Image
							src={teamBhavesh}
							alt="team member Image"
							className="rounded-xl w-full h-auto"
						/>
					</div>
					<h2 className="pb-3">
						<Button name="Bhavesh Choudhary" />
					</h2>
					<p className="font-md">Full Stack Web Developer</p>
				</div>
			</section>
		</>
	);
};

export default Team;
