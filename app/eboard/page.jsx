import Image from "next/image";

const eboardMembers = [
	{
		name: "Ashley Hendratta",
		position: "Vice President",
		photo: "/Images/Eboard/placeholder-headshot.png",
	},
	{
		name: "Kevin Han",
		position: "President",
		photo: "/Images/Eboard/photo.jpeg",
	},
	{
		name: "Shayla Walley",
		position: "Treasurer",
		photo: "/Images/Eboard/placeholder-headshot.png",
	},
	{
		name: "Danny Orlando",
		position: "Curriculum Developer",
		photo: "/Images/Eboard/placeholder-headshot.png",
	},
	{
		name: "Jude Ramanan",
		position: "Curriculum Developer",
		photo: "/Images/Eboard/placeholder-headshot.png",
	},
	{
		name: "Yuliia Heleveria",
		position: "Social Media Director",
		photo: "/Images/Eboard/yuliia.jpg",
	},
	{
		name: "Dilni Pathirana",
		position: "Social Media Director",
		photo: "/Images/Eboard/placeholder-headshot.png",
	},
	{
		name: "Andrew Li",
		position: "Freshman Outreach",
		photo: "/Images/Eboard/placeholder-headshot.png",
	},
];

const EBoard = () => {
	return (
		<div className="py-12 bg-gray-100 mt-8 select-none">
			<h1 className="text-5xl font-extrabold text-center text-teal-800 mb-10">
				E-Board Members 2024
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 container mx-auto px-6">
				{eboardMembers.map((member, index) => (
					<div
						key={index}
						className="text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform"
					>
						<div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full">
							<Image
								src={member.photo}
								alt={member.name}
								layout="fill"
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						<h2 className="mt-6 text-2xl text-teal-700 font-semibold">
							{member.name}
						</h2>
						<p className="text-lg text-gray-500 mt-2">
							{member.position}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default EBoard;
