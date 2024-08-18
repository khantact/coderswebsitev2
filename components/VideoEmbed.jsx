import React from "react";

const VideoEmbed = ({ url, title }) => {
	const videoId = new URL(url).searchParams.get("v");

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="block bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105"
		>
			<img
				src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
				alt={title}
				className="w-full h-32 object-cover"
			/>
			<div className="p-4">
				<h2 className="text-xl font-semibold text-teal-700 truncate">
					{title}
				</h2>
			</div>
		</a>
	);
};

export default VideoEmbed;
