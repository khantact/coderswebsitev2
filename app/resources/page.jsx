"use client";
import React from "react";
import resourceData from "../../public/data/resources.json";

const Resources = () => {
	return (
		<div className="py-16 bg-gray-50">
			<h1 className="text-5xl font-extrabold text-center text-teal-900 mb-12">
				Resources
			</h1>

			<div className="container mx-auto px-6">
				{/* Map through resource categories */}
				{resourceData.map((category) => (
					<div key={category.id} className="mb-16">
						{/* Category Title */}
						<h2 className="text-3xl font-semibold text-teal-800 mb-6">
							{category.title}
						</h2>

						{/* Resource List */}
						{category.resources && (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{category.resources.map((resource) => (
									<div
										key={resource.id}
										className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 relative"
									>
										<h3 className="text-2xl font-semibold text-teal-900 mb-3 flex items-center">
											{resource.title}
											{resource.isNew && (
												<span className="ml-3 px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
													New
												</span>
											)}
										</h3>
										<p className="text-gray-700 mb-6">
											{resource.description}
										</p>
										<a
											href={resource.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block px-5 py-3 bg-teal-600 text-white font-medium rounded-lg shadow hover:bg-teal-700 transition-colors duration-200"
										>
											{resource.type === "pdf"
												? "Download PDF"
												: "View Resource"}
										</a>
									</div>
								))}
							</div>
						)}

						{/* Books List */}
						{category.books && (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
								{category.books.map((book) => (
									<div
										key={book.id}
										className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
									>
										<h3 className="text-2xl font-semibold text-teal-900 mb-3 flex items-center">
											{book.title}
											{book.isNew && (
												<span className="ml-3 px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
													New
												</span>
											)}
										</h3>
										<p className="text-sm text-gray-500 mb-2">
											by {book.author}
										</p>
										<p className="text-gray-700 mb-6">
											{book.description}
										</p>
										<a
											href={book.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block px-5 py-3 bg-teal-600 text-white font-medium rounded-lg shadow hover:bg-teal-700 transition-colors duration-200"
										>
											Learn More
										</a>
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Resources;
