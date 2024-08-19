import React from "react";
import { LuInstagram } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import TypeIt from "typeit-react";
import ParticlesComponent from "./ParticlesComponent";

function SplashScreen() {
	return (
		<div className="relative text-gray-300 bg-gradient-to-b from-teal-900 to-teal-700 min-h-screen flex flex-col items-center justify-center animate-gradientAnimation">
			<ParticlesComponent className="absolute inset-0 z-0" />
			<div className="relative z-10 text-center">
				<h1 className="text-8xl text-gray-200">
					&lt; Colgate Coders /&gt;
				</h1>
				<div className="text-center w-full text-xl mt-4 text-gray-200">
					<TypeIt options={{ speed: 15 }}>
						We want to create an environment where people who are
						interested in coding
						{<br />} can come together and cultivate a love for
						technology.
					</TypeIt>
				</div>
				<div className="flex place-content-center w-full mt-4 gap-6">
					<a
						href="https://mail.google.com/mail/?view=cm&fs=1&to=colgatecoders@colgate.edu"
						target="_blank"
					>
						<IoMdMail className="border-b-2 p-2 border-transparent text-5xl hover:border-teal-400 transition ease-in" />
					</a>
					<a
						href="https://www.instagram.com/colgatecoders/"
						target="_blank"
					>
						<LuInstagram className="border-b-2 p-2 border-transparent text-5xl hover:border-teal-400 transition ease-in" />
					</a>
				</div>
				<div className="flex justify-center mt-8">
					<a
						href="https://getinvolved.colgate.edu/organization/colgate-coders"
						target="_blank"
						className="bg-teal-500 text-gray-300 px-6 py-3 rounded-lg shadow-md text-xl font-semibold hover:bg-teal-600 transition-colors duration-300"
					>
						Join Us
					</a>
				</div>
			</div>
		</div>
	);
}

export default SplashScreen;
