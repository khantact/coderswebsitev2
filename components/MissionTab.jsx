"use client";
import { useState, useEffect } from "react";

function Menutab() {
	const [missionTab, setMissionTab] = useState("Action");
	const [missionText, setMissionText] = useState("");

	useEffect(() => {
		switch (missionTab) {
			case "Action":
				setMissionText(
					"We actively seek opportunities to further the knowledge and potential of our members by initiating and participating in projects that make a tangible difference."
				);
				break;
			case "Support":
				setMissionText(
					"We support our community by providing free access to quality workshops, talks, advice and guidance, as well as learning materials and hackathons."
				);
				break;
			case "Conversation":
				setMissionText(
					"We foster conversation by organizing regular meetups, workshops, and talks where members can discuss challenges, share ideas, and collaborate on projects."
				);
				break;
			case "Inspire":
				setMissionText(
					"We inspire our members by showcasing innovative projects made by students, hosting guest speakers, and providing mentorship opportunities, empowering members to explore their passions."
				);
				break;
			default:
				setMissionText(
					"We actively seek opportunities to further the knowledge of our members."
				);
		}
	}, [missionTab]);

	return (
		<div className="bg-gray-200 h-fit text-gray-900 pb-8 z-10">
			<h1 className="text-4xl md:text-6xl lg:text-8xl w-full text-center pt-8 pb-4 text-teal-800 select-none">
				OUR {<br className="hidden sm:block" />}MISSION
			</h1>
			<div className="flex flex-wrap justify-center">
				<div className="flex flex-wrap justify-center gap-4 border-b border-emerald-900/50 text-emerald-900/50">
					{["Action", "Support", "Conversation", "Inspire"].map(
						(tab) => (
							<button
								key={tab}
								onClick={() => {
									setMissionTab(tab);
								}}
								className={`${
									missionTab === tab
										? "text-emerald-900 border-b-emerald-950 border-b-4"
										: "text-emerald-900/50"
								} px-4 py-2 text-base md:text-lg lg:text-2xl transition-all duration-300 hover:text-emerald-700 hover:border-b-emerald-700`}
							>
								{tab}
							</button>
						)
					)}
				</div>
			</div>

			<div
				className={`flex justify-center mt-8 text-base md:text-xl lg:text-2xl text-center px-4 sm:px-8 lg:px-24 select-none transition-opacity duration-1000 ${
					missionText ? "opacity-100" : "opacity-0"
				}`}
			>
				<h2>{missionText}</h2>
			</div>
		</div>
	);
}

export default Menutab;
