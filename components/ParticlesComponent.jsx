import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
	const particlesInit = async (engine) => {
		await loadSlim(engine);
	};

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			options={{
				fpsLimit: 60,
				particles: {
					number: {
						value: 50,
					},
					color: {
						value: "#ffffff",
					},
					links: {
						enable: true,
						distance: 150,
						color: "#ffffff",
						opacity: 0.5,
						width: 1,
					},
					move: {
						enable: true,
						speed: 2,
					},
					size: {
						value: { min: 1, max: 3 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesComponent;
