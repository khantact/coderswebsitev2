import React from "react";

const VideoEmbed = ({ url, title, caption }) => {
	const videoId = new URL(url).searchParams.get("v");

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="block relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl"
		>
			<img
				src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
				alt={title}
				className="w-full h-48 object-cover"
			/>
			<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm">
				<p className="text-white text-lg font-medium px-4 text-center font-serif">
					{caption}
				</p>
			</div>
			<div className="p-6">
				<h2 className="text-2xl font-semibold text-teal-800 truncate mb-2">
					{title}
				</h2>
			</div>
		</a>
	);
};

export default VideoEmbed;
