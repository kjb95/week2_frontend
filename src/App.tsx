import React from "react";
import "./App.css";
import Sidebar from "./component/siderbar/Sidebar";
import "./gsadp/css/common.css";
import "./gsadp/css/layout.css";
import "./gsadp/css/plugin.css";
import "./gsadp/css/fonts/Pretendard/fonts.css";
import Content from "./component/content/Content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChartReport from "./component/page/ChartReport";
import Home from "./component/page/Home";

function App() {
	return (
		<div className="wrap">
			<Sidebar />
			<BrowserRouter>
			    <Routes>
			        <Route path="/" element={<Home/>}/>
			        <Route path="/chart-report" element={<ChartReport />}/>
			    </Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
