import React from 'react';
import HighChart from "./HighChart";

function ChartBody() {
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
                        <HighChart/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChartBody;