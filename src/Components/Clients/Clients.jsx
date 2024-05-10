import React from "react";
import ClientCards from "./ClientCards";
import Brands from "./BrandSlider";
import Testimonials from "./Testimonials";
const Clients = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center w-full h-full py-24 ">
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4 font-Barlow">
					Client's Work
				</h1>
				<ClientCards />
			</div>
			<Brands />
			<Testimonials />
		</>
	);
};

export default Clients;

