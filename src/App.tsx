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
import AuthenticationRequiredRouter from "./component/router/AuthenticationRequiredRouter";
import AuthenticationNoneRequiredRouter from "./component/router/AuthenticationNoneRequiredRouter";
import NotFound from "./page/NotFound";
import Login from "./page/Login";

function App() {
	return (
		<div className="wrap">
			<BrowserRouter>
				<Routes>
					<Route element={<AuthenticationRequiredRouter />}>
						<Route path="/" element={<Navigate to="/home" />} />
						<Route path="/home" element={<Home />} />
						<Route path="/chart-report" element={<ChartReport />} />
					</Route>
					<Route element={<AuthenticationNoneRequiredRouter />}>
						<Route path="/login" element={<Login />} />
					</Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
