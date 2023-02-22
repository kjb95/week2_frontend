import React, { PropsWithChildren } from "react";
import Sidebar from "../component/siderbar/Sidebar";
import Content from "../component/content/Content";

interface PageFormProps {
	title: string;
}

function PageForm({ title, children }: PropsWithChildren<PageFormProps>) {
	return (
		<div>
			<Sidebar />
			<Content contentHeaderTitle={title}>{children}</Content>
		</div>
	);
}

export default PageForm;
