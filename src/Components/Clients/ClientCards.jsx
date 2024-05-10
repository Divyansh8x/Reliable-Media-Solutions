import { workShow } from "../../constants/work";

import Card from "./Card";
import React from "react";

function ClientCards() {
	return (
		<div className="flex items-center flex-wrap justify-center max-w-screen-lg gap-10">
			{workShow.map(({ id, type, src }) => (
				<Card key={id} type={type} src={src} />
			))}
		</div>
	);
}

export default ClientCards;
