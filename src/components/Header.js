import Image from "next/image";
// import tw from "twin.macro";
// import styled from "styled-components";
import Button from "./Button";
import bannerImg from "../assets/bannerImg2.svg";
// import headerVideo from "../assets/edit-live-website.mp4"
// const Container = tw.div`pt-24 px-4  bg-lightBlue m-auto h-screen`;
const Header = () => {
	return (
		<>
			<div className="pt-16 px-4  bg-lightBlue m-auto h-screen font-sans">
				<div className="grid grid-cols-2 max-w-6xl m-auto pt-24 gap-8">
					<div className="flex flex-col content-between">
						<h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-normalBlue to-lightGray leading-extra-loose font-bold mb-6">
							Get feedback for the your landing page
						</h1>
						<p className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-normalBlue to-lightGray">
							We provide you detailed feedback for your landing page UI/UX and help you improving your conversion rate to upto 8% 
						</p>
						<div className="mt-12">
							<Button name="Get Started" />
						</div>
					</div>
					<div className="mix-blend-darken">
						{/*<Image src={bannerImg} alt="UX man picture" />*/}
						<video
							autoPlay
							loop
							muted 
							// style={{ width: "500px", height: "500px" }}
						>
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
