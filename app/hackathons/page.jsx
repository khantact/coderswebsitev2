import HackathonCard from "@/components/HackathonCard";
const upcomingHackathonEvents = [
	{
		id: 1,
		title: "HackGate",
		url: "https://techinnovators.com/hackathon",
		description:
			"A 48-hour hackathon for tech enthusiasts to innovate and collaborate.",
	},
	{
		id: 2,
		title: "AI Challenge 2024",
		url: "https://aichallenge2024.com",
		description:
			"Compete in building AI solutions to address real-world problems.",
	},
	{
		id: 3,
		title: "Startup Weekend",
		url: "https://startupweekend.org",
		description:
			"Join us for a weekend of startup pitches and rapid prototyping.",
	},
];

function Hackathons() {
	return (
		<div className="bg-gray-100 py-8">
			<h1 className="text-4xl font-bold text-center text-teal-800 mb-6 pt-8">
				Upcoming Hackathons
			</h1>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{upcomingHackathonEvents.map((event) => (
						<HackathonCard
							key={event.id}
							url={event.url}
							title={event.title}
							description={event.description}
						/>
					))}
				</div>
			</div>
			<h1 className="text-4xl font-bold text-center text-teal-800 mb-6 pt-8">
				Past Hackathons
			</h1>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{upcomingHackathonEvents.map((event) => (
						<HackathonCard
							key={event.id}
							url={event.url}
							title={event.title}
							description={event.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Hackathons;
