const HackathonCard = ({ url, title, description, date }) => {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="block bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105"
		>
			<div className="p-4 select-none">
				<h2 className="text-xl font-semibold text-teal-700 mb-1 truncate ">
					{title}
				</h2>
				<p className="text-gray-500 text-sm">{date}</p>
				<p className="text-gray-600 mb-2">{description}</p>
			</div>
		</a>
	);
};

export default HackathonCard;
