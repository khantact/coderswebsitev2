"use client";
import { LuInstagram } from "react-icons/lu";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import TypeIt from "typeit-react";
import { useState } from "react";
import Menutab from "@/components/Menutab";
import Gallery from "@/components/Gallery";
import SplashScreen from "@/components/SplashScreen";
import { Splash } from "next/font/google";

export default function Home() {
	const [missionTab, setMissionTab] = useState("");

	return (
		<main className="font-serif">
			<div className="">
				<SplashScreen></SplashScreen>
				<Menutab />
				<Gallery />
			</div>
		</main>
	);
}
