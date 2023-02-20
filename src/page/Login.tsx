import React from "react";
import Content from "../component/content/Content";
import LoginContentBody from "../component/content/body/login/LoginContentBody";
import Sidebar from "../component/siderbar/Sidebar";

function Login() {
	return (
		<div>
			<Sidebar />
			<Content contentHeaderTitle={"로그인 페이지"}>
				<LoginContentBody />
			</Content>
		</div>
	);
}

export default Login;
