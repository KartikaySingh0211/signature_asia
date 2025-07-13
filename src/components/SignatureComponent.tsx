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
		<span className="font-bold text-xl sm:text-2xl md:text-3xl">
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
		<div ref={componentRef} className="w-full max-w-6xl mx-auto p-4 sm:p-8">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				{/* Left Section - Signature Logo */}
				<div className="flex justify-center lg:justify-start order-1 lg:order-1">
					<div className="w-full max-w-md lg:max-w-lg">
						<Image
							src={"/signature.png"}
							alt="Signature logo image"
							height={500}
							width={500}
							className="w-full h-auto"
							quality={100}
						/>
					</div>
				</div>

				{/* Right Section - Decade of Excellence */}
				<div className="flex flex-col justify-center items-center order-2 lg:order-2">
					<div className="w-full max-w-sm lg:max-w-xl">
						<Image
							src={"/decade.png"}
							alt="Decade of excellency"
							width={500}
							height={500}
							className="bg-[#FFF6C4] w-full h-auto"
							quality={100}
						/>
					</div>
					<div className="text-center bg-[#FFF6C4] mt-4 w-full max-w-sm lg:max-w-md">
						<div className="text-[#417849] py-2 border-2 border-[#417849]">
							<div className="px-2 sm:px-4">
								<span className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mr-1 sm:mr-2">
									Across
								</span>
								<span className="text-[#417849]">
									<Counter
										end={197}
										duration={2000}
										suffix="+"
										isVisible={isVisible}
									/>
									<span className="text-xl sm:text-2xl md:text-3xl font-bold ml-1 sm:ml-2">
										CITIES
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Trust of Farmers */}
			<div className="text-center text-[#FFF6C4] max-w-xl mx-auto mt-8">
				<div className="bg-[#417849] px-4 py-5">
					<div className="flex flex-wrap justify-center items-center">
						<span className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide mr-1 sm:mr-2">
							Trust of
						</span>
						<span className="flex items-center">
							<Counter
								end={100000}
								duration={2000}
								suffix="+"
								isVisible={isVisible}
							/>
							<span className="text-xl sm:text-2xl md:text-3xl font-bold ml-1 sm:ml-2">
								FARMERS
							</span>
						</span>
					</div>
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
