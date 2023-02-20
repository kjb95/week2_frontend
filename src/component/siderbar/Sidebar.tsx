import React from "react";
import OneDepthMenu from "./OneDepthMenu";
import {AUTHENTICATED_USERNAME_SESSION_KEY, UNAUTHENTICATED_USERNAME} from "../../const/Const";

function Sidebar() {
	let authenticatedUsername = sessionStorage.getItem(AUTHENTICATED_USERNAME_SESSION_KEY);
	if (!authenticatedUsername) {
		authenticatedUsername = UNAUTHENTICATED_USERNAME;
	}
	return (
		<aside className="sidebar">
			<ul className="sidebar-menu tree" data-widget="tree">
				<OneDepthMenu menuName={authenticatedUsername + " Home"} url="/" />
				<OneDepthMenu menuName="차트 리포트" url="/chart-report" />
			</ul>
		</aside>
	);
}

export default Sidebar;
