import React from "react";
import ChartHeader from "./header/ChartHeader";
import ChartBody from "./body/ChartBody";

function Chart() {
    return (
        <div className="row">
            <div className="col col-12">
                <section className="wrap-section wrap-chart">
                    <ChartHeader/>
                    <ChartBody/>
                </section>
            </div>
        </div>
    );
}

export default Chart;
