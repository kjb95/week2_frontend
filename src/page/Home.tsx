import React from "react";
import HomeContentBody from "../component/content/body/home/HomeContentBody";
import Content from "../component/content/Content";
import Sidebar from "../component/siderbar/Sidebar";

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
