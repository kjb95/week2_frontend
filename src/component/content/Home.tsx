import React from "react";
import HomeContentBody from "./body/home/HomeContentBody";
import Content from "./Content";
import Sidebar from "../siderbar/Sidebar";

function Home() {
	return (
		<div>
			<Sidebar />
			<Content contentHeaderTitle={"사라질 홈이다"}>
				<HomeContentBody />
			</Content>
		</div>
	);
}

export default Home;
