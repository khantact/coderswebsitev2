"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const linkActive = (href) => {
		return pathname === href;
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="absolute top-0 w-full font-serif bg-teal-800 shadow-md z-20 select-none">
			<div className="container mx-auto flex justify-between items-center p-4">
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="relative text-gray-100 focus:outline-none"
					>
						<div
							className={`w-6 h-0.5 bg-gray-100 transition-transform duration-300 ${
								isOpen
									? "translate-y-2 rotate-45"
									: "-translate-y-1"
							}`}
						/>
						<div
							className={`w-6 h-0.5 bg-gray-100 transition-transform duration-300 ${
								isOpen ? "opacity-0" : "opacity-100"
							}`}
						/>
						<div
							className={`w-6 h-0.5 bg-gray-100 transition-transform duration-300 ${
								isOpen
									? "-translate-y-2 -rotate-45"
									: "translate-y-1"
							}`}
						/>
					</button>
				</div>

				<div className="hidden md:flex flex-grow justify-center transition ease-in">
					<div className="flex items-center space-x-6 text-gray-100 capitalize">
						<a
							href="/"
							className={`border-b-2 pb-1 transition-colors duration-300 transform ${
								linkActive("/")
									? "border-teal-300 text-teal-300"
									: "border-transparent hover:text-teal-400"
							}`}
						>
							Home
						</a>
						<a
							href="/eventschedule"
							className={`border-b-2 pb-1 transition-colors duration-300 transform ${
								linkActive("/eventschedule")
									? "border-teal-300 text-teal-300"
									: "border-transparent hover:text-teal-400"
							}`}
						>
							Event Schedule
						</a>
						<a
							href="/workshops"
							className={`border-b-2 pb-1 transition-colors duration-300 transform ${
								linkActive("/workshops")
									? "border-teal-300 text-teal-300"
									: "border-transparent hover:text-teal-400"
							}`}
						>
							Workshops
						</a>
						<a
							href="/hackathons"
							className={`border-b-2 pb-1 transition-colors duration-300 transform ${
								linkActive("/hackathons")
									? "border-teal-300 text-teal-300"
									: "border-transparent hover:text-teal-400"
							}`}
						>
							Hackathons
						</a>
						<a
							href="/resources"
							className={`border-b-2 pb-1 transition-colors duration-300 transform ${
								linkActive("/resources")
									? "border-teal-300 text-teal-300"
									: "border-transparent hover:text-teal-400"
							}`}
						>
							Resources
						</a>
						<a
							href="/eboard"
							className={`border-b-2 pb-1 transition-colors duration-300 transform ${
								linkActive("/eboard")
									? "border-teal-300 text-teal-300"
									: "border-transparent hover:text-teal-400"
							}`}
						>
							E-Board
						</a>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden flex flex-col items-center bg-teal-700 text-gray-100 capitalize py-4 space-y-4">
					<a
						href="/"
						className={`border-b-2 pb-1 transition-colors duration-300 transform ${
							linkActive("/")
								? "border-teal-300 text-teal-300"
								: "border-transparent hover:text-teal-400"
						}`}
					>
						Home
					</a>
					<a
						href="/eventschedule"
						className={`border-b-2 pb-1 transition-colors duration-300 transform ${
							linkActive("/eventschedule")
								? "border-teal-300 text-teal-300"
								: "border-transparent hover:text-teal-400"
						}`}
					>
						Event Schedule
					</a>
					<a
						href="/workshops"
						className={`border-b-2 pb-1 transition-colors duration-300 transform ${
							linkActive("/workshops")
								? "border-teal-300 text-teal-300"
								: "border-transparent hover:text-teal-400"
						}`}
					>
						Workshops
					</a>
					<a
						href="/hackathons"
						className={`border-b-2 pb-1 transition-colors duration-300 transform ${
							linkActive("/hackathons")
								? "border-teal-300 text-teal-300"
								: "border-transparent hover:text-teal-400"
						}`}
					>
						Hackathons
					</a>
					<a
						href="/resources"
						className={`border-b-2 pb-1 transition-colors duration-300 transform ${
							linkActive("/resources")
								? "border-teal-300 text-teal-300"
								: "border-transparent hover:text-teal-400"
						}`}
					>
						Resources
					</a>
					<a
						href="/eboard"
						className={`border-b-2 pb-1 transition-colors duration-300 transform ${
							linkActive("/eboard")
								? "border-teal-300 text-teal-300"
								: "border-transparent hover:text-teal-400"
						}`}
					>
						E-Board
					</a>
				</div>
			)}
		</nav>
	);
}
