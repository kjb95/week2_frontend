import React, {useContext} from "react";
import AgGrid from "./AgGrid";
import {UserAccessDataContext} from "../../ChartReportContentBody";

function GridBody() {
    const context = useContext(UserAccessDataContext);

    return (
        <div className="box-body">
            <div className="ag-grid-empty">
                <div style={{height: "100%"}}>
                    <div className="ag-root-wrapper ag-ltr ag-keyboard-focus ag-layout-auto-height" role="presentation">
                        <div className="ag-root-wrapper-body ag-focus-managed ag-layout-auto-height"
                             role="presentation">
                            <div className="ag-tab-guard ag-tab-guard-top" role="presentation" tabIndex={0}></div>
                            <div className="ag-root ag-unselectable ag-layout-auto-height" role="grid" aria-colcount={9}
                                 aria-rowcount={1}>
                                {context.isChartOn && <AgGrid/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridBody;
