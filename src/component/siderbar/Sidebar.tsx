import React from "react";
import OneDepthMenu from "./OneDepthMenu";
import { AUTHENTICATED_USERNAME_SESSION_KEY, ROLE_ADMIN, ROLE_MANAGER, ROLE_USER, UNAUTHENTICATED_USERNAME } from "../../const/Const";

function Sidebar() {
	let authenticatedUsername = sessionStorage.getItem(AUTHENTICATED_USERNAME_SESSION_KEY);
	const roleUser = sessionStorage.getItem(ROLE_USER);
	const roleManager = sessionStorage.getItem(ROLE_MANAGER);
	const roleAdmin = sessionStorage.getItem(ROLE_ADMIN);
	if (!authenticatedUsername) {
		authenticatedUsername = UNAUTHENTICATED_USERNAME;
	}

	return (
		<aside className="sidebar">
			<ul className="sidebar-menu tree" data-widget="tree">
				<OneDepthMenu menuName={authenticatedUsername + " Home"} url="/home" />
				<OneDepthMenu menuName="차트 리포트" url="/chart-report" />
				{roleUser && <OneDepthMenu menuName="User" url="/authority/user" />}
				{roleManager && <OneDepthMenu menuName="Manager" url="/authority/manager" />}
				{roleAdmin && <OneDepthMenu menuName="Admin" url="/authority/admin" />}
			</ul>
		</aside>
	);
}

export default Sidebar;
