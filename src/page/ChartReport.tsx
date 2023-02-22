import React from "react";
import { ChartReportContentBody } from "../component/content/body/chartreport/ChartReportContentBody";
import PageForm from "./PageForm";

function ChartReport() {
	return (
		<PageForm title="단독 조회 필터 + 더블 라인 차트 + 데이터 그리드 리포트 조회 페이지 템플릿">
			<ChartReportContentBody />
		</PageForm>
	);
}

export default ChartReport;
