import Image from "next/image";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Toast notification component
type ToastProps = {
	message: string;
	type: "success" | "error";
	isVisible: boolean;
	onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
	if (!isVisible) return null;

	const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
	const icon = type === "success" ? "✓" : "✕";

	return (
		<div
			className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center space-x-3 animate-slide-in`}
		>
			<span className="text-xl font-bold">{icon}</span>
			<span className="font-medium">{message}</span>
			<button
				onClick={onClose}
				className="ml-4 text-white hover:text-gray-200 font-bold text-lg"
			>
				×
			</button>
		</div>
	);
};

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		query: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		phone: "",
		query: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [toast, setToast] = useState<{
		isVisible: boolean;
		message: string;
		type: "success" | "error";
	}>({
		isVisible: false,
		message: "",
		type: "success", // 'success' or 'error'
	});

	// Show toast notification
	const showToast = (message: string, type: "success" | "error") => {
		setToast({ isVisible: true, message, type });
		// Auto-hide after 5 seconds
		setTimeout(() => {
			setToast((prev) => ({ ...prev, isVisible: false }));
		}, 5000);
	};

	// Hide toast notification
	const hideToast = () => {
		setToast((prev) => ({ ...prev, isVisible: false }));
	};

	// Email validation function
	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	// Phone number validation function (supports various formats)
	const validatePhone = (phone: string): boolean => {
		// Remove all non-digit characters
		const cleanPhone = phone.replace(/\D/g, "");

		// Check if it's a valid length (10-15 digits for international numbers)
		if (cleanPhone.length < 10 || cleanPhone.length > 15) {
			return false;
		}

		// Additional format validation - accepts various formats
		const phoneRegex =
			/^[\+]?[1-9][\d]{0,15}$|^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
		return phoneRegex.test(phone);
	};

	// Validate individual field
	const validateField = (name: string, value: string): string => {
		switch (name) {
			case "name":
				if (!value.trim()) return "Name is required";
				if (value.trim().length < 2)
					return "Name must be at least 2 characters";
				return "";

			case "email":
				if (!value.trim()) return "Email is required";
				if (!validateEmail(value)) return "Please enter a valid email address";
				return "";

			case "phone":
				if (!value.trim()) return "Phone number is required";
				if (!validatePhone(value))
					return "Please enter a valid phone number (10-15 digits)";
				return "";

			case "query":
				if (!value.trim()) return "Query is required";
				if (value.trim().length < 10)
					return "Query must be at least 10 characters";
				return "";

			default:
				return "";
		}
	};

	// Validate entire form
	const validateForm = (): boolean => {
		const newErrors = {
			name: validateField("name", formData.name),
			email: validateField("email", formData.email),
			phone: validateField("phone", formData.phone),
			query: validateField("query", formData.query),
		};

		setErrors(newErrors);

		// Return true if no errors
		return !Object.values(newErrors).some((error) => error !== "");
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		// Update form data
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Clear error for this field when user starts typing
		if (errors[name as keyof typeof errors]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	// Handle field blur for real-time validation
	const handleFieldBlur = (
		e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		const fieldError = validateField(name, value);

		setErrors((prev) => ({
			...prev,
			[name]: fieldError,
		}));
	};

	const handleSubmit = async () => {
		setIsSubmitting(true);

		// Validate form before submission
		if (!validateForm()) {
			setIsSubmitting(false);
			return;
		}

		try {
			// EmailJS configuration
			const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
			const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
			const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

			if (!serviceId || !templateId || !publicKey) {
				throw new Error(
					"EmailJS environment variables are not set. Please check your configuration."
				);
			}

			// Prepare email template parameters
			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				from_phone: formData.phone,
				message: formData.query,
				to_name: "Signature Asia",
				reply_to: formData.email,
				subject: `New Contact Form Submission from ${formData.name}`,
				// You can add more fields as needed
			};

			// Send email using EmailJS
			const result = await emailjs.send(
				serviceId,
				templateId,
				templateParams,
				publicKey
			);

			console.log("Email sent successfully:", result.text);

			// Reset form on successful submission
			setFormData({
				name: "",
				email: "",
				phone: "",
				query: "",
			});

			// Show success toast notification
			showToast(
				"Thank you! Your message has been sent successfully. We will get back to you soon.",
				"success"
			);
		} catch (error) {
			console.error("Error sending email:", error);

			// Show error toast notification
			showToast(
				"Sorry, there was an error sending your message. Please try again or contact us directly.",
				"error"
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleWhatsAppConnect = () => {
		const phoneNumber = "1234567890";
		const message =
			"Hello, I would like to know more about your farming products and services.";
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappUrl, "_blank");
	};

	return (
		<div className="space-y-6">
			{/* Toast Notification */}
			<Toast
				message={toast.message}
				type={toast.type}
				isVisible={toast.isVisible}
				onClose={hideToast}
			/>

			<div className="mb-8">
				<h1 className="text-[#FFF6C4] text-4xl font-bold mb-3">
					Get in touch with us
				</h1>
				<p className="text-green-100 text-lg leading-relaxed">
					Discover how our products can elevate your farming experience and
					boost your crop yields today!
				</p>
			</div>

			{/* WhatsApp Connection */}
			<button
				onClick={handleWhatsAppConnect}
				className="flex items-center space-x-3 mb-10 text-white hover:text-green-200 transition-colors duration-300 mt-10 cursor-pointer"
			>
				<div className="w-8 h-8 rounded-full flex items-center justify-center">
					<Image
						src={"/whatsapp.png"}
						alt="WhatsApp Icon"
						width={40}
						height={40}
					/>
				</div>
				<span className="font-large">Click to Connect on WhatsApp</span>
			</button>

			{/* Contact Form */}
			<div className="space-y-4">
				<div>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={formData.name}
						onChange={handleInputChange}
						onBlur={handleFieldBlur}
						className={`w-full px-4 py-3 rounded-lg bg-yellow-100 text-gray-800 placeholder-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all ${
							errors.name ? "border-red-500" : "border-transparent"
						}`}
					/>
					{errors.name && (
						<p className="text-red-300 text-sm mt-1 ml-1">{errors.name}</p>
					)}
				</div>

				<div>
					<input
						type="email"
						name="email"
						placeholder="Your email here"
						value={formData.email}
						onChange={handleInputChange}
						onBlur={handleFieldBlur}
						className={`w-full px-4 py-3 rounded-lg bg-yellow-100 text-gray-800 placeholder-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all ${
							errors.email ? "border-red-500" : "border-transparent"
						}`}
					/>
					{errors.email && (
						<p className="text-red-300 text-sm mt-1 ml-1">{errors.email}</p>
					)}
				</div>

				<div>
					<input
						type="tel"
						name="phone"
						placeholder="Phone Number"
						value={formData.phone}
						onChange={handleInputChange}
						onBlur={handleFieldBlur}
						className={`w-full px-4 py-3 rounded-lg bg-yellow-100 text-gray-800 placeholder-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all ${
							errors.phone ? "border-red-500" : "border-transparent"
						}`}
					/>
					{errors.phone && (
						<p className="text-red-300 text-sm mt-1 ml-1">{errors.phone}</p>
					)}
				</div>

				<div>
					<textarea
						name="query"
						placeholder="Query"
						value={formData.query}
						onChange={handleInputChange}
						onBlur={handleFieldBlur}
						rows={4}
						className={`w-full px-4 py-3 rounded-lg bg-yellow-100 text-gray-800 placeholder-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all resize-none ${
							errors.query ? "border-red-500" : "border-transparent"
						}`}
					/>
					{errors.query && (
						<p className="text-red-300 text-sm mt-1 ml-1">{errors.query}</p>
					)}
				</div>

				<button
					onClick={handleSubmit}
					disabled={isSubmitting}
					className={`bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
						isSubmitting ? "opacity-50 cursor-not-allowed transform-none" : ""
					}`}
				>
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>
			</div>

			{/* CSS for toast animation */}
			<style jsx>{`
				@keyframes slide-in {
					from {
						transform: translateX(100%);
						opacity: 0;
					}
					to {
						transform: translateX(0);
						opacity: 1;
					}
				}
				.animate-slide-in {
					animation: slide-in 0.3s ease-out;
				}
			`}</style>
		</div>
	);
};

export default ContactForm;
