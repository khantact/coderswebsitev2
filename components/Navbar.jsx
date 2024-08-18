"use client";
import { usePathname } from "next/navigation";
export default function Navbar() {
	const pathname = usePathname();

	const linkActive = (href) => {
		return pathname === href;
	};
	return (
		<nav className="absolute top-0 w-full font-serif bg-teal-800 shadow-md">
			<div className="container flex items-center justify-center py-4 mx-auto text-gray-100 capitalize">
				<a
					href="/"
					className={`border-b-2 pb-1 transition-colors duration-300 transform ${
						linkActive("/")
							? "border-teal-300 text-teal-300"
							: "border-transparent hover:text-teal-400"
					} mx-4`}
				>
					Home
				</a>
				<a
					href="/eventschedule"
					className={`border-b-2 pb-1 transition-colors duration-300 transform ${
						linkActive("/eventschedule")
							? "border-teal-300 text-teal-300"
							: "border-transparent hover:text-teal-400"
					} mx-4`}
				>
					Event Schedule
				</a>
				<a
					href="/workshops"
					className={`border-b-2 pb-1 transition-colors duration-300 transform ${
						linkActive("/workshops")
							? "border-teal-300 text-teal-300"
							: "border-transparent hover:text-teal-400"
					} mx-4`}
				>
					Workshops
				</a>
				<a
					href="/hackathons"
					className={`border-b-2 pb-1 transition-colors duration-300 transform ${
						linkActive("/hackathons")
							? "border-teal-300 text-teal-300"
							: "border-transparent hover:text-teal-400"
					} mx-4`}
				>
					Hackathons
				</a>
				<a
					href="/eboard"
					className={`border-b-2 pb-1 transition-colors duration-300 transform ${
						linkActive("/eboard")
							? "border-teal-300 text-teal-300"
							: "border-transparent hover:text-teal-400"
					} mx-4`}
				>
					E-Board
				</a>
			</div>
		</nav>
	);
}
