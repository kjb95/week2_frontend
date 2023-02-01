import React from "react";
import "./App.css";
import Sidebar from "./component/siderbar/Sidebar";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css";
import "antd/dist/antd.min.css";
import "./gsadp/css/common.css";
import "./gsadp/css/layout.css";
import "./gsadp/css/plugin.css";
import "./gsadp/css/fonts/Pretendard/fonts.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChartReport from "./component/content/ChartReport";
import Home from "./component/content/Home";

function App() {
	return (
		<div className="wrap">
			<Sidebar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chart-report" element={<ChartReport />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
