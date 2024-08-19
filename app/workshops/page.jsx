"use client";
import React, { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";
import videoData from "../../public/data/workshopVideos.json";

const Workshops = () => {
	const [activeTags, setActiveTags] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleTagClick = (tag) => {
		setActiveTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		);
	};

	const toggleDropdown = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	const filteredVideos = videoData.filter(
		(video) =>
			video.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(activeTags.length === 0 ||
				video.tags.some((tag) => activeTags.includes(tag)))
	);

	const allTags = Array.from(
		new Set(videoData.flatMap((video) => video.tags))
	);

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

				<div className="relative mb-6">
					<button
						onClick={toggleDropdown}
						className="w-full px-4 py-2 bg-teal-500 text-white rounded-md shadow-md hover:shadow-lg transition-transform transform"
					>
						Filter by Tag
					</button>
					<div
						className={`absolute top-full left-0 mt-2 w-full bg-white border rounded-md shadow-lg z-10 transition-transform transform ${
							isDropdownOpen
								? "opacity-100 scale-100"
								: "opacity-0 scale-95"
						}`}
						style={{
							transition:
								"opacity 0.3s ease, transform 0.3s ease",
						}}
					>
						<div className="flex flex-wrap gap-2 p-4">
							{allTags.map((tag) => (
								<button
									key={tag}
									className={`px-4 py-2 rounded-md transition-transform transform ${
										activeTags.includes(tag)
											? "bg-teal-500 text-white scale-105"
											: "bg-gray-200 text-gray-800 hover:bg-teal-400 hover:text-white"
									} shadow-md hover:shadow-lg`}
									onClick={() => handleTagClick(tag)}
								>
									{tag}
								</button>
							))}
						</div>
					</div>
				</div>

				<div className="mb-6">
					{filteredVideos.length === 0 && searchTerm ? (
						<p className="text-center text-gray-500">
							No videos found.
						</p>
					) : (
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{filteredVideos.map((video) => (
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
};

export default Workshops;
