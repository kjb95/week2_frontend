import React from 'react';
import ContentHeader from "../content/header/ContentHeader";
import ContentFooter from "../content/footer/ContentFooter";
import ChartReportContentBody from "../content/body/ChartReportContentBody";

function ChartReport() {
    return (
        <div className="content">
            <ContentHeader title="단독 조회 필터 + 더블 라인 차트 + 데이터 그리드 리포트 조회 페이지 템플릿"/>
            <ChartReportContentBody/>
            <ContentFooter/>
        </div>

    );
}

export default ChartReport;