import React from "react";
import "./App.css";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css";
import "antd/dist/antd.min.css";
import "./gsadp/css/common.css";
import "./gsadp/css/layout.css";
import "./gsadp/css/plugin.css";
import "./gsadp/css/fonts/Pretendard/fonts.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ChartReport from "./page/ChartReport";
import Home from "./page/Home";
import AuthenticationNoneRequiredRouter from "./component/router/AuthenticationNoneRequiredRouter";
import Login from "./page/Login";
import AuthenticationRequiredRouter from "./component/router/AuthenticationRequiredRouter";
import SimplePageForm from "./page/SimplePageForm";
import RoleRequiredRouter from "./component/router/RoleRequiredRouter";
import { JWT_TOKEN, ROLE_ADMIN, ROLE_MANAGER, ROLE_USER } from "./const/Const";

function App() {
	const roleUser = sessionStorage.getItem(ROLE_USER);
	const roleManager = sessionStorage.getItem(ROLE_MANAGER);
	const roleAdmin = sessionStorage.getItem(ROLE_ADMIN);
	const jwtToken = sessionStorage.getItem(JWT_TOKEN);
	if (!jwtToken) {
		sessionStorage.clear();
	}

	return (
		<div className="wrap">
			<BrowserRouter>
				<Routes>
					<Route element={<AuthenticationRequiredRouter />}>
						<Route path="/" element={<Navigate to="/home" />} />
						<Route path="/home" element={<Home />} />
						<Route path="/chart-report" element={<ChartReport />} />
						<Route element={<RoleRequiredRouter role={roleUser} />}>
							<Route path="/authority/user" element={<SimplePageForm title="유저 이상만" />} />
						</Route>
						<Route element={<RoleRequiredRouter role={roleManager} />}>
							<Route path="/authority/manager" element={<SimplePageForm title="매니저 이상만" />} />
						</Route>
						<Route element={<RoleRequiredRouter role={roleAdmin} />}>
							<Route path="/authority/admin" element={<SimplePageForm title="관리자 이상만" />} />
						</Route>
					</Route>
					<Route element={<AuthenticationNoneRequiredRouter />}>
						<Route path="/login" element={<Login />} />
					</Route>
					<Route path="*" element={<SimplePageForm title="404 Not Found" />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
