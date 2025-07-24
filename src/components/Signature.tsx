"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
		<span className="font-bold text-2xl sm:text-3xl md:text-4xl">
			{count}
			{suffix}
		</span>
	);
};

const Signature: React.FC = () => {
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
		<div ref={componentRef} className="w-full relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
				<div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
			</div>

			{/* Main content */}
			<div className="relative z-10 py-8 md:py-12 ">
				{/* Signature logo section */}
				<div className="text-center mb-6 pt-16 pb-10 bg-[#E68937] w-screen flex flex-col items-center justify-center">
					<div className="mb-4 p-3">
						<Image
							src={"/signature.png"}
							alt={"Signature Logo"}
							width={450}
							height={450}
							className="max-w-full h-auto"
							priority
							quality={100}
						/>
					</div>
					<div className="text-center mt-4 w-full max-w-sm lg:max-w-md">
						<div className="text-[#FFF6C4] py-2">
							<div className="px-2 sm:px-4">
								<span className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mr-1 sm:mr-2">
									Across
								</span>
								<span className="text-[#FFF6C4]">
									<Counter
										end={197}
										duration={2000}
										suffix="+"
										isVisible={isVisible}
									/>
									<span className="text-2xl sm:text-3xl md:text-4xl font-bold ml-1 sm:ml-2">
										CITIES
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom section with decade of excellence and trust badge */}
				<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-12">
					{/* Decade of Excellence image */}
					<div className="flex-shrink-0 p-3">
						<Image
							src={"/decade.png"}
							alt={"Decade of Excellence"}
							width={500}
							height={500}
							className="max-w-full h-auto"
						/>
					</div>

					{/* Trust of Farmers */}
					<div className="text-[#FFF6C4] flex-shrink-0">
						<div className="bg-[#417849] px-4 py-5">
							<div className="flex flex-wrap justify-center items-center">
								<span className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mr-1 sm:mr-2">
									Trust of
								</span>
								<span className="flex items-center">
									<Counter
										end={100000}
										duration={2000}
										suffix="+"
										isVisible={isVisible}
									/>
									<span className="text-2xl sm:text-3xl md:text-4xl font-bold ml-1 sm:ml-2">
										FARMERS
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signature;
