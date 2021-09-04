import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import formImage from "../assets/designFeedback.svg";

const Form = () => {
	const submitHandle = () => {
		e.preventDefault();
	};
	return (
		<>
			<section className="pt-12 px-4 bg-lightBlue mx-auto h-screen font-sans text-center md:text-left pt-20">
				<div className="grid grid-rows-2 m-auto md:grid-cols-2 grid-rows-none max-w-6xl  pt-24 gap-8">
					<form
						action="https://www.formbackend.com/f/0698d758eddc634e"
						method="POST"
						encType="multipart/form-data"
						className="flex flex-col content-between flex-wrap items-center md:items-start"
					>
						<label
							htmlFor="email"
							className="text-lg text-primary font-light placeholder-gray-gray4 px-2 pt-1.5"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							placeholder="Enter Your Email"
							className="w-full px-3 py-2 text-primary text-base font-light border rounded outline-none transition duration-300 ease-in-out focus:border-normalBlue"
							required
						/>
						<label
							htmlFor="website"
							className="text-lg text-primary font-light placeholder-gray-gray4 px-2 pt-1.5"
						>
							Website URL
						</label>
						<input
							type="text"
							id="website"
							placeholder="Enter Your website URL"
							className="w-full px-3 py-2 text-primary text-base font-light border rounded outline-none transition duration-300 ease-in-out focus:border-normalBlue"
							required
						/>
						<label
							htmlFor="message"
							className="text-lg text-primary font-light placeholder-gray-gray4 px-2 pt-1.5"
						>
							Message
						</label>
						<textarea
							name="message"
							id="message"
							className="w-full px-3 py-2 mb-4 text-primary text-base font-light border rounded outline-none transition duration-300 ease-in-out focus:border-normalBlue"
							placeholder="Message (Optional)"
						/>
						<Button
							type="submit"
							name="Submit"
							onCick={submitHandle}
						/>
					</form>
					<div className="mix-blend-darken">
						<Image src={formImage} alt="form image" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Form;
