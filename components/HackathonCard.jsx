const HackathonCard = ({ url, title, description }) => {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="block bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105"
		>
			<div className="p-4">
				<h2 className="text-xl font-semibold text-teal-700 mb-2 truncate">
					{title}
				</h2>
				<p className="text-gray-600">{description}</p>
			</div>
		</a>
	);
};

export default HackathonCard;
