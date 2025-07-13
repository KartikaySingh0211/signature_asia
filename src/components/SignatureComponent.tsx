"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
	end: number;
	duration: number;
	suffix?: string;
	isVisible: boolean;
}

const Counter: React.FC<CounterProps> = ({
	end,
	duration,
	suffix = "",
	isVisible,
}) => {
	const [count, setCount] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);

	useEffect(() => {
		if (isVisible && !hasStarted) {
			setHasStarted(true);
			let startTime: number;
			const startValue = 0;
			const endValue = end;

			const animate = (currentTime: number) => {
				if (!startTime) startTime = currentTime;
				const progress = Math.min((currentTime - startTime) / duration, 1);

				const easeOutQuart = 1 - Math.pow(1 - progress, 4);
				const currentCount = Math.floor(
					startValue + (endValue - startValue) * easeOutQuart
				);

				setCount(currentCount);

				if (progress < 1) {
					requestAnimationFrame(animate);
				}
			};

			requestAnimationFrame(animate);
		}
	}, [isVisible, hasStarted, end, duration]);

	return (
		<span className="font-bold text-2xl md:text-3xl">
			{count}
			{suffix}
		</span>
	);
};

const SignatureComponent: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const componentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{ threshold: 0.3 }
		);

		if (componentRef.current) {
			observer.observe(componentRef.current);
		}

		return () => {
			if (componentRef.current) {
				observer.unobserve(componentRef.current);
			}
		};
	}, []);

	return (
		<div ref={componentRef} className="w-full max-w-6xl mx-auto p-8 ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
				{/* Left Section - Signature Logo */}
				<div className="flex justify-center mt-10 md:justify-start">
					<Image
						src={"/signature.png"}
						alt="Signature logo image"
						height={500}
						width={500}
					/>
				</div>

				{/* Right Section - Decade of Excellence */}
				<div className="absolute flex flex-col justify-center items-center  lg:top-0 lg:right-0">
					<Image
						src={"/decade.png"}
						alt="Decade of excellency"
						width={500}
						height={500}
						className="bg-[#FFF6C4]"
					/>
					<div className="text-center bg-[#FFF6C4] mt-4">
						<div className=" text-[#417849] py-2 border-2 border-[#417849]">
							<span className="text-2xl md:text-3xl font-bold uppercase mr-2 pl-10">
								Across
							</span>
							<span className="text-[#417849]">
								<Counter
									end={197}
									duration={2000}
									suffix="+"
									isVisible={isVisible}
								/>
								<span className="text-2xl md:text-3xl font-bold ml-2 pr-10">
									CITIES
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Trust of Farmers */}
			<div className="text-center text-[#FFF6C4] max-w-xl mx-auto">
				<div className="bg-[#417849]  px-4 py-5">
					<span className="text-2xl md:text-3xl font-bold uppercase tracking-wide mr-2">
						Trust of
					</span>
					<span>
						<Counter
							end={100000}
							duration={2000}
							suffix="+"
							isVisible={isVisible}
						/>
						<span className="text-2xl md:text-3xl font-bold ml-2">FARMERS</span>
					</span>
				</div>
			</div>

			{/* Bottom Section - Statistics */}
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Across Cities */}
			</div>
		</div>
	);
};

export default SignatureComponent;
