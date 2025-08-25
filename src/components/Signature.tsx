"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CounterProps {
	end: number;
	duration: number;
	suffix?: string;
	isVisible: boolean;
	className: string;
}

const Counter: React.FC<CounterProps> = ({
	end,
	duration,
	suffix = "",
	isVisible,
	className = "",
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
		<span className={` text-2xl sm:text-3xl md:text-4xl ${className}`}>
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
				<div className="text-center mb-6 pt-12 pb-8 bg-[#417849] w-screen flex flex-col items-center justify-center">
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
				</div>

				{/* Bottom section with decade of excellence and trust badge */}
				<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-12">
					{/* Decade of Excellence image */}
					<div className="flex-shrink-0 p-3">
						<Image
							src={"/decadeOf.png"}
							alt={"Decade of Excellence"}
							width={550}
							height={550}
							className="max-w-full h-auto"
						/>
					</div>

					{/* Trust of Farmers */}
					<div className="text-[#FFF6C4] flex flex-col items-center justify-center min-w-[30%]">
						<div className="bg-[#417849] px-4 py-5 min-w-full">
							<div className="flex flex-wrap justify-center items-center">
								<span className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mr-1 sm:mr-2">
									Trust of
								</span>
								<span className="flex items-center">
									<div className="inline-block min-w-[120px] sm:min-w-[140px] md:min-w-[160px] text-center">
										<Counter
											end={127000}
											duration={4000}
											suffix="+"
											isVisible={isVisible}
											className="font-bold font-mono"
										/>
									</div>
									<span className="text-2xl sm:text-3xl md:text-4xl font-bold ml-1 sm:ml-2">
										FARMERS
									</span>
								</span>
							</div>
						</div>
						<div className="text-center mt-4 w-full max-w-sm lg:max-w-md">
							<div className="text-[#417849] py-2">
								<div className="px-2 sm:px-4 flex items-center justify-center flex-nowrap">
									<span className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase mr-1 sm:mr-2 whitespace-nowrap">
										Across
									</span>
									<span className="text-[#417849] flex items-center justify-center flex-nowrap">
										<div className="inline-block min-w-[80px] sm:min-w-[90px] md:min-w-[100px] text-center">
											<Counter
												end={206}
												duration={4000}
												suffix="+"
												isVisible={isVisible}
												className="font-extrabold font-mono"
											/>
										</div>
										<span className="text-2xl sm:text-3xl md:text-4xl font-extrabold ml-1 sm:ml-2 whitespace-nowrap">
											CITIES
										</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signature;
