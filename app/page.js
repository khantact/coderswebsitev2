"use client";
import Menutab from "@/components/Menutab";
import Gallery from "@/components/Gallery";
import SplashScreen from "@/components/SplashScreen";
import Marquee from "react-fast-marquee";

export default function Home() {
	const headerMessages =
		"New workshops available! Explore them now. Stay tuned for upcoming events and news.";

	return (
		<main className="font-serif">
			<Marquee
				speed={75}
				className="select-none pt-2 pb-1 mt-6 bg-teal-500 z-10"
			>
				{headerMessages}
			</Marquee>
			<div className="">
				<SplashScreen></SplashScreen>
				<Menutab />
				<Gallery />
			</div>
		</main>
	);
}
