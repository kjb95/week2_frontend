import React, {useContext} from 'react';
import HighChart from "./HighChart";
import {UserAccessDataContext} from "../../ChartReportContentBody";

function ChartBody() {
    const context = useContext(UserAccessDataContext);

    return (
        <div className="box-body">
            <div className="box-top">
                <div className="line-bar-chart-area">
                    <div
                        data-highcharts-chart="0"
                        style={{
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }}
                    >
                        {context.isChartOn && <HighChart/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChartBody;