import React from "react";
import Image from "next/image";

const images = [
	{
		src: "/Images/GateHacks/hackdart.jpg",
		alt: "HackGate",
		caption: "HackGate Event",
	},
	{
		src: "/Images/GateHacks/Pitch.jpeg",
		alt: "HackGate",
		caption: "Pitch Presentation",
	},
	{
		src: "/Images/GateHacks/IMG_9758.jpeg",
		alt: "HackGate",
		caption: "Team Collaboration",
	},
	{
		src: "/Images/LAHacks/BiscuitBuddy.jpeg",
		alt: "HackGate",
		caption: "Biscuit Buddy Demo",
	},
	{
		src: "/Images/LAHacks/GroupPhoto.jpeg",
		alt: "HackGate",
		caption: "Group Photo",
	},
];

function Gallery() {
	return (
		<div className="pt-8 pb-16 px-4 bg-gradient-to-r from-gray-50 to-gray-200">
			<div className="container mx-auto max-w-6xl">
				<h1 className="text-8xl font-bold text-center text-teal-800 mb-8 select-none">
					Gallery
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 select-none">
					{images.map((image, index) => (
						<div
							key={index}
							className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
						>
							<div className="relative w-full h-64">
								<Image
									src={image.src}
									alt={image.alt}
									layout="fill"
									className="rounded-lg object-cover"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<p className="text-white text-lg p-4 text-center select-none">
									{image.caption}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Gallery;
