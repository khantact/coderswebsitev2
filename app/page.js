"use client";
import { LuInstagram } from "react-icons/lu";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import TypeIt from "typeit-react";
import { useState } from "react";
import Menutab from "@/components/Menutab";
import Gallery from "@/components/Gallery";
export default function Home() {
	const [missionTab, setMissionTab] = useState("");

	return (
		<main className=" font-serif">
			<div className=" text-amber-100 bg-gradient-to-b from-emerald-950 to-emerald-800 h-screen pt-8 grid grid-cols-1 place-content-center">
				<div className="text-center">
					<h1 className="text-8xl">&lt; Colgate Coders /&gt;</h1>
				</div>
				<div className="text-center w-full text-xl mt-4">
					<TypeIt options={{ speed: 30 }}>
						We want to create an environment where people who are
						interested in coding {<br></br>}can come together and
						cultivate a love for technology.
					</TypeIt>
				</div>
				<div className="flex place-content-center w-full mt-4 gap-6">
					<a
						href="https://mail.google.com/mail/?view=cm&fs=1&to=colgatecoders@colgate.edu"
						target="_blank"
					>
						<IoMdMail className="border-b-2 p-2 border-transparent text-5xl hover:border-orange-200 transition ease-in" />
					</a>
					<a
						href="https://www.instagram.com/colgatecoders/"
						target="_blank"
					>
						<LuInstagram className="border-b-2 p-2 border-transparent text-5xl hover:border-orange-200 transition ease-in" />
					</a>
				</div>
			</div>
			<div className="bg-white h-fit text-emerald-900 pb-8">
				<h1 className="text-8xl w-full text-center pt-8 text-emerald-900">
					OUR {<br></br>}MISSION
				</h1>
				{/* Begin menu tabs */}
				<Menutab />
			</div>
			<div className="bg-blue-300 h-screen">
				<h1 className="text-8xl w-full text-center pt-8 text-emerald-900">
					GALLERY
				</h1>

				<Gallery />
			</div>
		</main>
	);
}
