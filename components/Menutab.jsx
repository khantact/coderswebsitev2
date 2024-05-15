"use client";
import React from "react";
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
					"We foster conversation by organizing regular meetups, workshops, and talks where members can discuss challenges, share ideas, and collaborate on projects"
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
		<div className="">
			<div className="grid grid-cols-1">
				<div className="flex justify-center mt-8">
					<div className="flex gap-6 border-b border-emerald-900/50 text-emerald-900/50">
						<button
							onClick={() => {
								setMissionTab("Action");
								console.log("missiontab:", missionTab);
							}}
							className={`${
								missionTab === "Action"
									? "text-emerald-900 border-b-emerald-950 border-b-2"
									: "text-emerald-900/50"
							}px-1 pb-4 text-2xl border-b-2 border-transparent transition ease-in`}
						>
							Take action
						</button>

						<button
							onClick={() => {
								setMissionTab("Support");
								console.log("missiontab:", missionTab);
							}}
							className={`${
								missionTab === "Support"
									? "text-emerald-900 border-b-emerald-950 border-b-2"
									: "text-emerald-900/50"
							}px-1 pb-4 text-2xl border-b-2 border-transparent transition ease-in`}
						>
							Provide support
						</button>

						<button
							onClick={() => {
								setMissionTab("Conversation");
								console.log("missiontab:", missionTab);
							}}
							className={`${
								missionTab === "Conversation"
									? "text-emerald-900 border-b-emerald-950 border-b-2"
									: "text-emerald-900/50"
							}px-1 pb-4 text-2xl border-b-2 border-transparent transition ease-in`}
						>
							Create conversation
						</button>
						<button
							onClick={() => {
								setMissionTab("Inspire");
								console.log("missiontab:", missionTab);
							}}
							className={`${
								missionTab === "Inspire"
									? "text-emerald-900 border-b-emerald-950 border-b-2"
									: "text-emerald-900/50"
							}px-1 pb-4 text-2xl border-b-2 border-transparent transition ease-in`}
						>
							Inspire
						</button>
					</div>
				</div>
				{missionTab === "Action" ? (
					<h2 className="flex place-content-center mt-8 text-2xl text-center mx-[25vw] select-none animate-fadeIn">
						{missionText}
					</h2>
				) : (
					<></>
				)}
				{missionTab === "Support" ? (
					<h2 className="flex place-content-center mt-8 text-2xl text-center mx-[25vw] select-none animate-fadeIn">
						{missionText}
					</h2>
				) : (
					<></>
				)}
				{missionTab === "Conversation" ? (
					<h2 className="flex place-content-center mt-8 text-2xl text-center mx-[25vw] select-none animate-fadeIn">
						{missionText}
					</h2>
				) : (
					<></>
				)}
				{missionTab === "Inspire" ? (
					<h2 className="flex place-content-center mt-8 text-2xl text-center mx-[25vw] select-none animate-fadeIn">
						{missionText}
					</h2>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

export default Menutab;
