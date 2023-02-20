import React from "react";
import Content from "../component/content/Content";
import { ChartReportContentBody } from "../component/content/body/chartreport/ChartReportContentBody";
import Sidebar from "../component/siderbar/Sidebar";

function ChartReport() {
	return (
		<div>
			<Sidebar />
			<Content contentHeaderTitle="단독 조회 필터 + 더블 라인 차트 + 데이터 그리드 리포트 조회 페이지 템플릿">
				<ChartReportContentBody />
			</Content>
		</div>
	);
}

export default ChartReport;
