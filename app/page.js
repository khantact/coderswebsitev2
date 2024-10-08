"use client";
import Menutab from "@/components/MissionTab";
import Gallery from "@/components/Gallery";
import SplashScreen from "@/components/SplashScreen";
import Marquee from "react-fast-marquee";

export default function Home() {
	const headerMessages =
		"CS Industry Panel at COSC student lounge 9/5 11:30 - 12:30";

	return (
		<main className="font-serif">
			<Marquee
				speed={75}
				className="select-none pt-2 pb-1 mt-6 bg-teal-500 z-10"
			>
				{headerMessages}
			</Marquee>
			<div className="relative">
				<SplashScreen />
				<div className="relative z-10">
					<Menutab />
					<Gallery />
				</div>
			</div>
		</main>
	);
}
