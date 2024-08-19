import HackathonCard from "@/components/HackathonCard";

const upcomingHackathonEvents = [
	{
		id: 1,
		title: "GateHacks '24",
		url: "https://gatehacksappdeployed-git-main-jaanhvi18s-projects.vercel.app/",
		description:
			"A 48-hour hackathon for tech enthusiasts to innovate and collaborate.",
		date: "September 28-29, 2024",
	},
];

const pastHackathonEvents = [
	{
		id: 1,
		title: "GateHacks",
		url: "",
		description:
			"A 48-hour hackathon for tech enthusiasts to innovate and collaborate.",
		date: "March 23-24, 2024",
	},
];

function Hackathons() {
	return (
		<div className="bg-gray-100 mt-8 py-8">
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
							date={event.date}
						/>
					))}
				</div>
			</div>
			<h1 className="text-4xl font-bold text-center text-teal-800 mb-6 pt-8">
				Past Hackathons
			</h1>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{pastHackathonEvents.map((event) => (
						<HackathonCard
							key={event.id}
							url={event.url}
							title={event.title}
							description={event.description}
							date={event.date}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Hackathons;
