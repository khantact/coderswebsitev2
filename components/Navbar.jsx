"use client";
import { usePathname } from "next/navigation";
export default function Navbar() {
	const pathname = usePathname();

	const linkActive = (href) => {
		return pathname === href;
	};
	return (
		<nav className="bg-transparent h-4 absolute top-0 w-full font-serif">
			<div className="container flex items-center justify-center mt-6 mx-auto text-amber-100 capitalize h-4">
				<a
					href="/"
					className={`border-b-2  hover:text-amber-100 transition-colors duration-300 transform ${
						linkActive("/")
							? "border-orange-200"
							: "border-transparent"
					} hover:border-orange-200 mx-1.5 sm:mx-6`}
				>
					HOME
				</a>
				<a
					href="https://getinvolved.colgate.edu/organization/colgate-coders"
					target="_blank"
					className={`border-b-2  hover:text-amber-100 transition-colors duration-300 transform ${
						linkActive("/getinvolved")
							? "border-orange-200"
							: "border-transparent"
					} hover:border-orange-200 mx-1.5 sm:mx-6`}
				>
					GETINVOLVED
				</a>
				<a
					href="/eventschedule"
					className={`border-b-2  hover:text-amber-100 transition-colors duration-300 transform ${
						linkActive("/eventschedule")
							? "border-orange-200"
							: "border-transparent"
					} hover:border-orange-200 mx-1.5 sm:mx-6`}
				>
					EVENT SCHEDULE
				</a>

				<a
					href="/workshops"
					className={`border-b-2  hover:text-amber-100 transition-colors duration-300 transform ${
						linkActive("/workshops")
							? "border-orange-200"
							: "border-transparent"
					} hover:border-orange-200 mx-1.5 sm:mx-6`}
				>
					WORKSHOPS
				</a>

				<a
					href="/hackathons"
					className={`border-b-2  hover:text-amber-100 transition-colors duration-300 transform ${
						linkActive("/hackathons")
							? "border-orange-200"
							: "border-transparent"
					} hover:border-orange-200 mx-1.5 sm:mx-6`}
				>
					HACKATHONS
				</a>
			</div>
		</nav>
	);
}
