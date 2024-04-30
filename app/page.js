import { LuInstagram } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";

export default function Home() {
	return (
		<main className="text-amber-100 font-serif">
			<div className="bg-gradient-to-b from-emerald-950 to-emerald-800 h-screen pt-8 grid grid-cols-1 place-content-center">
				<div className="text-center">
					<h1 className="text-6xl">&lt; Colgate Coders /&gt;</h1>
				</div>
				<div className="text-center w-full">
					<p className="mt-4 text-wrap">
						Our mission is to create an environment where people who
						are interested in coding can come together and cultivate
						a love for technology.
					</p>
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
		</main>
	);
}
