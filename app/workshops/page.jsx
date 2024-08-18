"use client";
import React, { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const workshopTopics = [
	{
		topic: "Web Development",
		videos: [
			{
				id: 1,
				title: "Web Development Fundamentals",
				url: "https://www.youtube.com/watch?v=C15UkWl7Z_U",
				caption:
					"Learn the basics of HTML and CSS to create static websites and a one-page personal website.",
			},
		],
	},
	{
		topic: "Programming",
		videos: [
			{
				id: "P1",
				title: "Introduction to Python",
				url: "https://www.youtube.com/watch?v=5Qcm-kNbrU0",
				caption:
					"Python is an increasingly popular language. This workshop will provide you with a good grasp of the fundamentals.",
			},
			{
				id: "P2",
				title: "Introduction to Java",
				url: "https://www.youtube.com/watch?v=iri_Swy27Zo",
				caption:
					"Learn the basics of Java, one of the most used programming languages, and apply them to practice problems.",
			},
			{
				id: "P3",
				title: "Django Framework",
				url: "https://www.youtube.com/watch?v=z4YF1BZNX-c",
				caption: "Learn how to build a Django backend for a to-do app.",
			},
			{
				id: "P4",
				title: "Introduction to JavaScript",
				url: "https://www.youtube.com/watch?v=Lzvcuo4iR70",
				caption:
					"Learn the basics of JavaScript and make a static website interactive.",
			},
			{
				id: "P5",
				title: "Introduction to React",
				url: "https://www.youtube.com/watch?v=ZP4DCOwI2BA",
				caption:
					"Learn the fundamentals of React by building the front-end for a to-do list app.",
			},
			{
				id: "P6",
				title: "Introduction to Open Source Contribution",
				url: "https://www.youtube.com/watch?v=D9GquEsiyLY",
				caption:
					"Learn how to make quality contributions to open source, including intermediate git functionality and project selection.",
			},
			{
				id: "P7",
				title: "Unit Testing",
				url: "https://www.youtube.com/watch?v=Vg8MYqGkSxw",
				caption:
					"Learn to write tests for individual functions using Python's unittest library and advanced testing techniques.",
			},
			{
				id: "P8",
				title: "Functional Programming with OCaml",
				url: "https://www.youtube.com/watch?v=iHLdlNSqXfE",
				caption:
					"Learn a functional programming language that aligns with natural human thinking and ensures code reliability.",
			},
		],
	},
	{
		topic: "Tools and IDEs",
		videos: [
			{
				id: "TI1",
				title: "Intro to IDEs",
				url: "https://www.youtube.com/watch?v=NLcQQZauu3o",
				caption:
					"Learn about popular development tools and how they aid in writing maintainable code.",
			},
			{
				id: "TI2",
				title: "GitHub 101",
				url: "https://www.youtube.com/watch?v=ErBlLb8X3Sw",
				caption:
					"An interactive workshop on GitHub basics, including personal and collaborative use.",
			},
			{
				id: "TI3",
				title: "Command Line Fundamentals",
				url: "https://www.youtube.com/watch?v=NqcaKQLM1Cg",
				caption:
					"Cover essential skills for command line work, including navigation, file editing, and script writing.",
			},
			{
				id: "TI4",
				title: "Personal Web Deployment",
				url: "https://www.youtube.com/watch?v=-Jra38l_bko",
				caption:
					"Learn how to host personal websites for free using GitHub Pages.",
			},
		],
	},
	{
		topic: "Data Science",
		videos: [
			{
				id: 3,
				title: "Data Science Basics",
				url: "https://www.youtube.com/watch?v=y6WKOFUsrGA&feature=youtu.be",
				caption:
					"Learn to solve data problems from start to finish and explore statistical analysis.",
			},
		],
	},
	{
		topic: "Job Search",
		videos: [
			{
				id: 4,
				title: "Networking 101",
				url: "https://www.youtube.com/watch?v=vz-_89yTTXA",
				caption:
					"Best practices for networking to secure high-demand roles in tech, finance, and consulting.",
			},
		],
	},
	{
		topic: "Popular Buzzwords",
		videos: [
			{
				id: 5,
				title: "Blockchain 101",
				url: "https://www.youtube.com/watch?v=ffoKvNg4Lpk",
				caption:
					"Understand blockchain technology and its potential impact.",
			},
		],
	},
];

function Workshops() {
	const [activeSection, setActiveSection] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	const toggleSection = (idx) => {
		setActiveSection(activeSection === idx ? null : idx);
	};

	// Flatten the video array and filter based on search term
	const filteredVideos = workshopTopics.flatMap((section) =>
		section.videos.filter((video) =>
			video.title.toLowerCase().includes(searchTerm.toLowerCase())
		)
	);

	// Get the list of videos to display (filtered or all)
	const videosToDisplay = searchTerm
		? filteredVideos
		: workshopTopics.flatMap((section) => section.videos);

	return (
		<div className="py-8">
			<h1 className="text-4xl font-bold text-center text-teal-800 mb-6 pt-8">
				Workshops
			</h1>

			<div className="container mx-auto px-4">
				<div className="mb-6">
					<input
						type="text"
						placeholder="Search for a video..."
						className="w-full px-4 py-2 text-black border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

				<div className="mb-6">
					{videosToDisplay.length === 0 && searchTerm ? (
						<p className="text-center text-gray-500">
							No videos found.
						</p>
					) : (
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{videosToDisplay.map((video) => (
								<div key={video.id} className="mb-6">
									<VideoEmbed
										url={video.url}
										title={video.title}
										caption={video.caption}
									/>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Workshops;
