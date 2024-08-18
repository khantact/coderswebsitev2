import React from "react";
import VideoEmbed from "@/components/VideoEmbed";
const workshopVideos = [
	{
		id: 1,
		title: "Introduction to React",
		url: "https://www.youtube.com/watch?v=0x7D4CTohEg",
	},
	{
		id: 2,
		title: "Advanced JavaScript Concepts",
		url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
	},
	{
		id: 3,
		title: "CSS Grid Tutorial",
		url: "https://www.youtube.com/watch?v=7k4Fq3scxQ0",
	},
];

function Workshops() {
	return (
		<div className="bg-gray-100 py-8 h-screen">
			<h1 className="text-4xl font-bold text-center text-teal-800 mb-6 pt-8">
				Workshops
			</h1>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{workshopVideos.map((video) => (
						<VideoEmbed
							key={video.id}
							url={video.url}
							title={video.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Workshops;
