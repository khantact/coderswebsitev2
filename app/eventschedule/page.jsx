// components/EventSchedule.js
import React from "react";

const events = [
	// {
	// 	id: 1,
	// 	title: "Coding Bootcamp",
	// 	date: "2024-09-10",
	// 	time: "10:00 AM - 4:00 PM",
	// 	description:
	// 		"A full-day coding bootcamp covering the basics of web development.",
	// },
	// {
	// 	id: 2,
	// 	title: "Tech Talk: The Future of AI",
	// 	date: "2024-09-15",
	// 	time: "2:00 PM - 3:30 PM",
	// 	description:
	// 		"A talk by industry experts on the latest trends and advancements in AI.",
	// },
	// {
	// 	id: 3,
	// 	title: "Hackathon Kickoff",
	// 	date: "2024-10-01",
	// 	time: "9:00 AM - 6:00 PM",
	// 	description:
	// 		"A 24-hour hackathon where teams compete to build innovative solutions.",
	// },
	// {
	// 	id: 4,
	// 	title: "Networking Mixer",
	// 	date: "2024-10-10",
	// 	time: "6:00 PM - 8:00 PM",
	// 	description:
	// 		"An opportunity to network with professionals and fellow coders in the community.",
	// },
];

function EventSchedule() {
	return (
		<div className="bg-gray-100 mt-8 min-h-screen overflow-y-hidden">
			<h1 className="text-4xl font-bold text-center text-teal-800 mb-6 pt-8">
				Event Schedule
			</h1>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{events.map((event) => (
						<div
							key={event.id}
							className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
						>
							<h2 className="text-2xl font-semibold text-teal-700 mb-2">
								{event.title}
							</h2>
							<p className="text-gray-600 mb-1">
								<strong>Date:</strong> {event.date}
							</p>
							<p className="text-gray-600 mb-1">
								<strong>Time:</strong> {event.time}
							</p>
							<p className="text-gray-600 mt-2">
								{event.description}
							</p>
						</div>
					))}
				</div>
			</div>
			<h1 className="text-black text-center w-full">
				Nothing yet! This will be updated as more events are planned.
			</h1>
		</div>
	);
}

export default EventSchedule;
