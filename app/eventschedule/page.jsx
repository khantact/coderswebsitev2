// components/EventSchedule.js
import React from "react";

const events = [
	{
		id: 1,
		title: "CS Industry Panel",
		date: "2024-09-05",
		time: "11:30 AM - 12:30 PM",
		location: "Bernstein 217",
		description:
			"Join us for a 1-hour panel with students and alumni sharing their journeys in the tech industry. Learn how they secured internships, transitioned into full-time roles, and gain valuable insights for your own career path. Don't miss this chance to ask your questions and get advice from those who’ve been there!.",
	},
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
							<p className="text-gray-600 mb-1">
								<strong>Location:</strong> {event.location}
							</p>
							<p className="text-gray-600 mt-2">
								{event.description}
							</p>
						</div>
					))}
				</div>
			</div>
			{/* <h1 className="text-black text-center w-full">
				Nothing yet! This will be updated as more events are planned.
			</h1> */}
		</div>
	);
}

export default EventSchedule;
