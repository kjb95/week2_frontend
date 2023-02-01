import React from "react";
import ChartLeftHeader from "./ChartLeftHeader";
import ChartRightHeader from "./ChartRightHeader";

function ChartHeader() {
    return (
        <div className="box-header">
            <ChartLeftHeader/>
            <ChartRightHeader/>
        </div>
    );
}

export default ChartHeader;
