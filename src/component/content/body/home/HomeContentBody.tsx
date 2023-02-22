import React from "react";

export function logout() {
	sessionStorage.clear();
	window.location.href = "/home";
}

function HomeContentBody() {
	return (
		<div className="content-body">
			<h2 className="fz-36 fc-1 fw-bold">바디 준비</h2>
			<button type="button" className="btn solid blue xlarge" onClick={logout}>
				로그아웃
			</button>
		</div>
	);
}

export default HomeContentBody;
