import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Gallery() {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="container mx-auto max-w-lg ">
			<Slider {...settings} className="">
				<div className="">
					<Image
						src="/Images/GateHacks/hackdart.jpg"
						width={500}
						height={500}
						alt="HackGate"
					/>
				</div>
				<div>
					<Image
						src="/Images/GateHacks/Pitch.jpeg"
						width={500}
						height={500}
						alt="HackGate"
					/>
				</div>
				<div>
					<Image
						src="/Images/GateHacks/IMG_9758.jpeg"
						width={500}
						height={500}
						alt="HackGate"
					/>
				</div>

				<div className="h-full flex justify-center items-center">
					<Image
						src="/Images/LAHacks/BiscuitBuddy.jpeg"
						width={500}
						height={500}
						alt="HackGate"
						className="r"
					/>
				</div>
				<div>
					<Image
						src="/Images/LAHacks/GroupPhoto.jpeg"
						width={500}
						height={500}
						alt="HackGate"
					/>
				</div>
			</Slider>
		</div>
	);
}

export default Gallery;
