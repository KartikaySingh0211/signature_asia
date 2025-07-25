"use client";
import React from "react";
import Team from "../Team";
import Signature from "../Signature";

const AboutSection = () => {
	return (
		<div className=" flex flex-col justify-center mt-24 cursor-default">
			<Signature />
			<Team />
			<div
				id="contact"
				className="mt-16 flex justify-center space-x-4 opacity-30"
			>
				<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
				<div
					className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
					style={{ animationDelay: "0.2s" }}
				></div>
				<div
					className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
					style={{ animationDelay: "0.4s" }}
				></div>
			</div>
		</div>
	);
};

export default AboutSection;
