import React, { useState, useEffect, useRef } from "react";

const Counter = ({
	target = 100000,
	duration = 2000,
	label = "",
	prefix = "",
	suffix = "+",
}) => {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const [hasAnimated, setHasAnimated] = useState(false);
	const counterRef = useRef(null);

	// Intersection Observer to detect when component is in view
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setIsVisible(true);
					setHasAnimated(true);
				}
			},
			{
				threshold: 0.3, // Trigger when 30% of the component is visible
				rootMargin: "0px 0px -50px 0px", // Slight offset from bottom
			}
		);

		if (counterRef.current) {
			observer.observe(counterRef.current);
		}

		return () => {
			if (counterRef.current) {
				observer.unobserve(counterRef.current);
			}
		};
	}, [hasAnimated]);

	// Counter animation logic
	useEffect(() => {
		if (!isVisible) return;

		let startTime: number | null = null;
		let animationFrame: number | null = null;

		interface Animate {
			(timestamp: number): void;
		}

		let animate: Animate;
		animate = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress: number = Math.min((timestamp - startTime) / duration, 1);

			// Easing function for smooth animation
			const easeOutExpo: number =
				progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
			const currentCount: number = Math.floor(easeOutExpo * target);

			setCount(currentCount);

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			}
		};

		animationFrame = requestAnimationFrame(animate);

		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, [isVisible, target, duration]);

	const formatNumber = (num: number): string => {
		return num.toLocaleString();
	};

	return (
		<>
			<div>
				<div className="max-w-4xl mx-auto w-full">
					{/* Counter Component */}
					<div
						ref={counterRef}
						className={`text-center transform transition-all duration-1000 ${
							isVisible
								? "translate-y-0 opacity-100 scale-100"
								: "translate-y-20 opacity-0 scale-95"
						}`}
					>
						<div className="bg-[#417849] rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2rem] p-6 sm:p-10 lg:p-16 shadow-2xl relative overflow-hidden">
							<div className="relative z-10">
								{/* Title */}
								<h1
									className="text-[#FFF6C4] mb-3 sm:mb-4 lg:mb-6 text-2xl sm:text-4xl lg:text-[3.5rem]"
									style={{
										fontFamily: "Brush Script MT, cursive",
										fontWeight: "normal",
										lineHeight: "1.1",
										textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
									}}
								>
									Decade Of Excellency
								</h1>

								{/* Certified by */}
								<div
									className="text-[#FFF6C4] mb-2 sm:mb-3 lg:mb-2 text-lg sm:text-2xl lg:text-[2.5rem]"
									style={{
										fontFamily: "Brush Script MT, cursive",
										fontWeight: "normal",
										textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
									}}
								>
									Certified by
								</div>

								{/* Main Counter Display */}
								<div
									className="text-[#FFF6C4] mb-3 sm:mb-4 lg:mb-4 text-3xl sm:text-5xl lg:text-[4rem]"
									style={{
										fontFamily: "Brush Script MT, cursive",
										fontWeight: "normal",
										textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
										lineHeight: "1",
									}}
								>
									{formatNumber(count)}
									{suffix}
								</div>

								{/* Bottom text */}
								<div
									className="text-[#FFF6C4] text-lg sm:text-2xl lg:text-[2.5rem]"
									style={{
										fontFamily: "Brush Script MT, cursive",
										fontWeight: "normal",
										textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
										lineHeight: "1.2",
									}}
								>
									Customers across 197 cities
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Counter;
