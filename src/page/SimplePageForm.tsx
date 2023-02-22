import React from "react";
import Sidebar from "../component/siderbar/Sidebar";
import Content from "../component/content/Content";

interface SimplePageFormProps {
	title: string;
}

function SimplePageForm({ title }: SimplePageFormProps) {
	return (
		<div>
			<Sidebar />
			<Content contentHeaderTitle={title} />
		</div>
	);
}

export default SimplePageForm;
