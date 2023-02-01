import React from "react";
import Search from "./search/Search";
import Chart from "./chart/Chart";
import Grid from "./grid/Grid";

function ChartReportContentBody() {

    return (
        <div className="content-body">
            <div className="container-fluid">
                <Search/>
                <Chart/>
                <Grid/>
            </div>
        </div>
    );
}

export default ChartReportContentBody;
