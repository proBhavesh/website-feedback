/*  ./components/Navbar.jsx     */
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

export const Navbar = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className="z-10 flex items-center flex-wrap bg-lightBlue p-3 font-sans shadow-md fixed w-screen font-sans">
				<Link href="/">
					<a className="inline-flex items-center p-2 mr-4 ">
						<span className="text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-normalBlue to-lightGray">
							Website Feedback
						</span>
					</a>
				</Link>
				<button
					className=" inline-flex p-3 rounded lg:hidden text-black ml-auto outline-none"
					onClick={handleClick}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
				<div
					className={`${
						active ? "" : "hidden"
					}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
				>
					<div className=" ml-3 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
						<Link href="/">
							<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center">
								About
							</a>
						</Link>
						<a
							href="https://twitter.com/yoBhavesh"
							target="_blank"
							rel="noreferrer"
							className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center"
						>
							Twitter
						</a>
						<Link href="/">
							<div className="mr-2">
								<Link href="/getStarted">
									<a>
										<Button name="Get Started" />
									</a>
								</Link>
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};
